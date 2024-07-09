using Ex5.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Ex5.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly UserContext userContext;

        public ProductController(UserContext userContext)
        {
            this.userContext = userContext;
        }

        [HttpGet]
        [Route("GetProducts")]
        public IActionResult GetProducts()
        {
            var products = userContext.Products.ToList();
            return Ok(products);
        }

        [HttpGet]
        [Route("GetProduct")]
        public IActionResult GetProduct(int id)
        {
            var product = userContext.Products.FirstOrDefault(x => x.ProductId == id);
            if (product == null)
                return NotFound();

            return Ok(product);
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
