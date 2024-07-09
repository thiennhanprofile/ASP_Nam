using Microsoft.AspNetCore.Mvc;
using Ex5.Model;
using System;
using Microsoft.AspNetCore.Http; // Import thư viện này để sử dụng HttpContext

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
        // GET: api/Order/GetOrder
        [HttpGet]
        [Route("GetOrder")]
        public IActionResult GetOrder(int orderId)
        {
            // Lấy thông tin đơn hàng từ OrderId
            var order = _context.Orders.FirstOrDefault(o => o.OrderId == orderId);

            // Kiểm tra xem đơn hàng có tồn tại không
            if (order == null)
            {
                return NotFound("Order not found");
            }

            return Ok(order);
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
        // GET: api/Order/GetAllOrders
        [HttpGet]
        [Route("GetAllOrders")]
        public IActionResult GetAllOrders()
        {
            // Lấy tất cả các đơn hàng từ cơ sở dữ liệu
            var orders = _context.Orders.ToList();

            return Ok(orders);
        }
        // DELETE: api/Order/Delete
        [HttpDelete]
        [Route("Delete/{orderId}")]
        public IActionResult DeleteOrder(int orderId)
        {
            // Tìm đơn hàng trong cơ sở dữ liệu
            var order = _context.Orders.FirstOrDefault(o => o.OrderId == orderId);

            // Kiểm tra xem đơn hàng có tồn tại không
            if (order == null)
            {
                return NotFound("Order not found");
            }

            // Tìm và xóa các chi tiết đơn hàng có cùng orderId
            var orderDetails = _context.OrderDetails.Where(od => od.OrderId == orderId);
            _context.OrderDetails.RemoveRange(orderDetails);

            // Xóa đơn hàng và lưu thay đổi vào cơ sở dữ liệu
            _context.Orders.Remove(order);
            _context.SaveChanges();

            return Ok("Order and associated order details deleted successfully");
        }
        // GET: api/Order/GetOrderItems
        [HttpGet]
        [Route("GetOrderItems/{orderId}")]
        public IActionResult GetOrderItems(int orderId)
        {
            // Lấy các orderItem có cùng orderId từ cơ sở dữ liệu
            var orderItems = _context.OrderDetails.Where(od => od.OrderId == orderId).ToList();

            // Kiểm tra xem có orderItem nào không
            if (orderItems == null || orderItems.Count == 0)
            {
                return NotFound("No order items found for the provided orderId");
            }

            return Ok(orderItems);
        }

    }
}
