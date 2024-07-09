using Ex5.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.IO;
using Microsoft.EntityFrameworkCore;


namespace Ex5.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly UserContext userContext;
        private readonly IWebHostEnvironment hostingEnvironment;


        public ProductController(UserContext userContext, IWebHostEnvironment hostingEnvironment)
        {
            this.userContext = userContext;
            this.hostingEnvironment = hostingEnvironment;
        }

        [HttpGet]
        [Route("GetProducts")]
        public IActionResult GetProducts()
        {
            var productsWithDetails = userContext.Products.Select(product => new
            {
                product.ProductId,
                product.CategoryId,
                product.BrandId,
                product.ProductTitle,
                product.ImageUrl,
                product.Price,
                product.Quantity,
                product.CreatedAt,
                product.UpdatedAt,
                CategoryName = GetCategoryName(userContext, product.CategoryId),
                BrandName = GetBrandName(userContext, product.BrandId)
            }).ToList();

            return Ok(productsWithDetails);
        }

        private static string GetCategoryName(UserContext userContext, int? categoryId)
        {
            var category = userContext.Categories.FirstOrDefault(c => c.CategoryID == categoryId);
            return category != null ? category.Name : "";
        }

        private static string GetBrandName(UserContext userContext, int? brandId)
        {
            var brand = userContext.Brands.FirstOrDefault(b => b.BrandId == brandId);
            return brand != null ? brand.Name : "";
        }

        [HttpGet]
        [Route("GetProduct")]
        public IActionResult GetProduct(int id)
        {
            var product = userContext.Products.FirstOrDefault(x => x.ProductId == id);
            if (product == null)
                return NotFound();

            // Lấy thông tin category của sản phẩm
            var category = userContext.Categories.FirstOrDefault(c => c.CategoryID == product.CategoryId);

            // Lấy thông tin brand của sản phẩm
            var brand = userContext.Brands.FirstOrDefault(b => b.BrandId == product.BrandId);

            // Tạo một đối tượng mới chứa thông tin của sản phẩm cùng với tên của category và brand
            var productWithDetails = new
            {
                product.ProductId,
                product.CategoryId,
                product.BrandId,
                product.ProductTitle,
                product.ImageUrl,
                product.Price,
                product.Quantity,
                product.CreatedAt,
                product.UpdatedAt,
                CategoryName = category != null ? category.Name : "",
                BrandName = brand != null ? brand.Name : ""
            };

            return Ok(productWithDetails);
        }


        [HttpPost]
        [Route("AddProduct")]
        public IActionResult AddProduct(Product product)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            userContext.Products.Add(product);
            userContext.SaveChanges();
            return Ok("Product added");

        }
        [HttpPost]
        [Route("UploadImage")]
        public async Task<IActionResult> UploadImage(IFormFile imageFile)
        {
            if (imageFile == null || imageFile.Length == 0)
                return BadRequest("Yêu cầu tệp hình ảnh");

            if (imageFile.Length > 0 && imageFile.Length <= 1012000)
            {
                var pathStoredImage = Path.Combine("Content", "Images");
                var uploadFolderPath = Path.Combine(hostingEnvironment.ContentRootPath, pathStoredImage);

                if (!Directory.Exists(uploadFolderPath))
                    Directory.CreateDirectory(uploadFolderPath);

                var fileName = Path.GetFileName(imageFile.FileName);
                var filePath = Path.Combine(uploadFolderPath, fileName);

                // Kiểm tra xem tệp có tồn tại không
                if (System.IO.File.Exists(filePath))
                {
                    // Sử dụng hình ảnh cũ nếu tệp đã tồn tại
                    return Ok("Hình ảnh đã tồn tại, sử dụng hình ảnh cũ");
                }
                else
                {
                    // Nếu tệp không tồn tại, tải lên hình ảnh mới
                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await imageFile.CopyToAsync(stream);
                    }

                    return Ok("Hình ảnh đã được tải lên thành công");
                }
            }

            return BadRequest("Tệp hình ảnh quá lớn");
        }
        [HttpGet]
        [Route("GetImage")]
        public IActionResult GetImage(string imageName)
        {
            var pathStoredImage = Path.Combine("Content", "Images");
            var imagePath = Path.Combine(hostingEnvironment.ContentRootPath, pathStoredImage, imageName);

            if (!System.IO.File.Exists(imagePath))
                return NotFound("Không tìm thấy hình ảnh");

            var imageBytes = System.IO.File.ReadAllBytes(imagePath);
            return File(imageBytes, "image/jpeg");
        }
        [HttpGet]
        [Route("CheckImageExist")]
        public IActionResult CheckImageExist(string imageName)
        {
            try
            {
                var pathStoredImage = Path.Combine("Content", "Images");
                var imagePath = Path.Combine(hostingEnvironment.ContentRootPath, pathStoredImage, imageName);

                // Kiểm tra xem hình ảnh có tồn tại không
                if (System.IO.File.Exists(imagePath))
                {
                    return Ok(new { exist = true });
                }
                else
                {
                    return Ok(new { exist = false });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }
        [HttpPut]
        [Route("UpdateProduct")]
        public IActionResult UpdateProduct(Product product)
        {
            var existingProduct = userContext.Products.FirstOrDefault(x => x.ProductId == product.ProductId);
            if (existingProduct == null)
                return NotFound("Product not found");

            userContext.Entry(existingProduct).CurrentValues.SetValues(product);
            userContext.SaveChanges();
            return Ok("Product updated");
        }

        [HttpDelete]
        [Route("DeleteProduct")]
        public IActionResult DeleteProduct(int id)
        {
            var product = userContext.Products.FirstOrDefault(x => x.ProductId == id);
            if (product == null)
                return NotFound("Product not found");

            userContext.Products.Remove(product);
            userContext.SaveChanges();
            return Ok("Product deleted");
        }
        [HttpGet]
        [Route("GetProductsByCategory")]
        public IActionResult GetProductsByCategory(int categoryId)
        {
            var products = userContext.Products.Where(p => p.CategoryId == categoryId).ToList();
            return Ok(products);
        }

        [HttpGet]
        [Route("GetAllCategories")]
        public IActionResult GetAllCategories()
        {
            var categories = userContext.Categories.ToList();
            return Ok(categories);
        }
    }
}
