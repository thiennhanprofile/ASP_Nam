using Microsoft.AspNetCore.Mvc;
using Ex5.Model;
using System;
using System.Linq;

namespace Ex5.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly UserContext _context;

        public PaymentController(UserContext context)
        {
            _context = context;
        }

        // POST: api/Payment/Checkout
        [HttpPost]
        [Route("Checkout")]
        public IActionResult Checkout(Order order)
        {
            order.CreatedOnUtc = DateTime.UtcNow;
            _context.Orders.Add(order);
            _context.SaveChanges();

            var orderId = order.OrderId;

            var cartItems = _context.OrderDetails.ToList();
            var orderDetails = cartItems.Select(item => new OrderDetails
            {
                OrderId = orderId,
                ProductId = item.ProductId,
                Quantity = item.Quantity
            }).ToList();
            _context.OrderDetails.AddRange(orderDetails);
            _context.SaveChanges();

            _context.OrderDetails.RemoveRange(_context.OrderDetails);
            _context.SaveChanges();

            return Ok("Thanh toán thành công");
        }
    }
}
