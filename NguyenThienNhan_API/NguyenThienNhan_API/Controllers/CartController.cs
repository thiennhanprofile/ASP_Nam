using Microsoft.AspNetCore.Mvc;
using Ex5.Model;
using System;
using System.Collections.Generic;
using System.Linq;

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

        // GET: api/Cart
        [HttpGet]
        public IActionResult GetCart()
        {
            var cartItems = _context.OrderDetails.ToList();
            return Ok(cartItems);
        }

        // POST: api/Cart/AddToCart
        [HttpPost]
        [Route("AddToCart")]
        public IActionResult AddToCart(OrderDetails cartItem)
        {
            var existingCartItem = _context.OrderDetails.FirstOrDefault(c => c.ProductId == cartItem.ProductId);
            if (existingCartItem != null)
            {
                existingCartItem.Quantity += cartItem.Quantity;
            }
            else
            {
                _context.OrderDetails.Add(cartItem);
            }
            _context.SaveChanges(); 

            return Ok("Thêm vào giỏ hàng thành công");
        }

        // DELETE: api/Cart/RemoveFromCart/5
        [HttpDelete]
        [Route("RemoveFromCart/{id}")]
        public IActionResult RemoveFromCart(int id)
        {
            var cartItem = _context.OrderDetails.FirstOrDefault(c => c.OrderDetaiId == id);
            if (cartItem == null)
            {
                return NotFound();
            }

            _context.OrderDetails.Remove(cartItem);
            _context.SaveChanges();

            return Ok("Xóa khỏi giỏ hàng thành công");
        }

        // POST: api/Cart/ClearCart
        [HttpPost]
        [Route("ClearCart")]
        public IActionResult ClearCart()
        {
            _context.OrderDetails.RemoveRange(_context.OrderDetails);
            _context.SaveChanges();

            return Ok("Giỏ hàng đã được xóa");
        }
    }
}
