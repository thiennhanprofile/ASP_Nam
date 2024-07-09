using Microsoft.AspNetCore.Mvc;
using Ex5.Model;
using System;
using System.Linq;

namespace Ex5.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly UserContext _context;

        public OrderController(UserContext context)
        {
            _context = context;
        }

        // POST: api/Order/Create
        [HttpPost]
        [Route("Create")]
        public IActionResult CreateOrder(Order order)
        {
            // Lấy UserId từ session
            int? userId = HttpContext.Session.GetInt32("UserId");

            // Kiểm tra xem UserId có tồn tại không
            if (!userId.HasValue)
            {
                return Unauthorized("User is not authenticated");
            }

            // Tạo Order mới
            var newOrder = new Order
            {
                UserId = userId.Value,
                Name = order.Name, // Thông tin khác của Order
                CreatedOnUtc = DateTime.UtcNow,
                Status = 1 // Trạng thái mặc định của Order
            };

            _context.Orders.Add(newOrder);
            _context.SaveChanges();

            return Ok(newOrder.OrderId);
        }

        // POST: api/Order/AddToCart
        [HttpPost]
        [Route("AddToCart")]
        public IActionResult AddToCart(OrderDetails orderDetail)
        {
            // Lấy OrderId từ session hoặc từ client
            int orderId = orderDetail.OrderId; // Đây là ví dụ, bạn cần thay đổi phần này để lấy OrderId từ session hoặc client

            // Kiểm tra xem OrderId có tồn tại không
            var existingOrder = _context.Orders.FirstOrDefault(o => o.OrderId == orderId);
            if (existingOrder == null)
            {
                return NotFound("Order not found");
            }

            // Tạo OrderDetail mới
            var newOrderDetail = new OrderDetails
            {
                OrderId = orderId,
                ProductId = orderDetail.ProductId,
                Quantity = orderDetail.Quantity
            };

            _context.OrderDetails.Add(newOrderDetail);
            _context.SaveChanges();

            return Ok("Product added to cart");
        }
    }
}
