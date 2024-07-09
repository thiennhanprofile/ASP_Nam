using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using Ex5.Model;
using System;

namespace Ex5.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly UserContext _context;

        public CartController(UserContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("AddToCart")]
        public IActionResult AddToCart(int userId, Product product)
        {
            try
            {
                // Tạo hoặc cập nhật thông tin giỏ hàng
                var existingCartItem = _context.Carts.FirstOrDefault(c => c.UserId == userId && c.ProductId == product.ProductId);
                if (existingCartItem != null)
                {
                    existingCartItem.Quantity++;
                }
                else
                {
                    var newCartItem = new Cart
                    {
                        UserId = userId,
                        ProductId = product.ProductId,
                        Quantity = 1
                    };
                    _context.Carts.Add(newCartItem);
                }
                _context.SaveChanges();

                return Ok("Product added to cart");
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }


        [HttpGet]
        [Route("GetCartItems")]
        public IActionResult GetCartItems(int userId)
        {
            var user = _context.Users.FirstOrDefault(u => u.UserId == userId);

            // Lấy các sản phẩm trong giỏ hàng của người dùng
            var cartItems = _context.Carts.Where(c => c.UserId == userId).ToList();

            return Ok(cartItems);
        }

        [HttpPost]
        [Route("Checkout")]
        public IActionResult Checkout(int userId, List<Cart> cartItems)
        {
            try
            {
                // Lấy thông tin người dùng từ cơ sở dữ liệu
                var user = _context.Users.FirstOrDefault(u => u.UserId == userId);
                if (user == null)
                {
                    return NotFound("User not found");
                }

                // Tạo đơn hàng mới
                var newOrder = new Order
                {
                    UserId = userId,
                    Name = user.FirstName, // Sử dụng FirstName của người dùng làm tên đơn hàng
                    CreatedOnUtc = DateTime.UtcNow,
                    Status = 1 // Trạng thái mặc định của đơn hàng
                };
                _context.Orders.Add(newOrder);
                _context.SaveChanges();

                // Lấy thông tin sản phẩm từ danh sách các mục trong giỏ hàng
                foreach (var item in cartItems)
                {
                    // Tạo chi tiết đơn hàng cho mỗi sản phẩm trong giỏ hàng
                    var orderDetail = new OrderDetails
                    {
                        OrderId = newOrder.OrderId,
                        ProductId = item.ProductId,
                        Quantity = item.Quantity // Lưu số lượng sản phẩm từ tham số truyền vào
                    };
                    _context.OrderDetails.Add(orderDetail);
                }

                // Xóa các sản phẩm trong giỏ hàng sau khi đã thanh toán
                _context.Carts.RemoveRange(_context.Carts.Where(c => c.UserId == userId));

                // Lưu thay đổi vào cơ sở dữ liệu
                _context.SaveChanges();

                return Ok("Checkout successful");
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }


        [HttpPost]
        [Route("ClearCart")]
        public IActionResult ClearCart(int cartId)
        {
            // Tìm giỏ hàng cần xóa dựa trên cartId
            var cartItem = _context.Carts.FirstOrDefault(c => c.CartId == cartId);
            if (cartItem == null)
            {
                return NotFound("Cart not found");
            }

            // Xóa giỏ hàng
            _context.Carts.Remove(cartItem);

            // Lưu thay đổi vào cơ sở dữ liệu
            _context.SaveChanges();

            return Ok("Cart cleared successfully");
        }
    }
}
