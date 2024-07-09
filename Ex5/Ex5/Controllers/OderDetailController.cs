using Microsoft.AspNetCore.Mvc;
using Ex5.Model;
using System.Linq;
using System.Collections.Generic;

namespace Ex5.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class OrderDetailController : ControllerBase
    {
        private readonly UserContext userContext;

        public OrderDetailController(UserContext userContext)
        {
            this.userContext = userContext;
        }

        [HttpGet]
        [Route("GetOrderDetails")]
        public IActionResult GetOrderDetails()
        {
            var orderDetails = userContext.OrderDetails.ToList();
            return Ok(orderDetails);
        }

        [HttpGet]
        [Route("GetOrderDetail")]
        public IActionResult GetOrderDetail(int id)
        {
            var orderDetail = userContext.OrderDetails.FirstOrDefault(x => x.OrderDetaiId == id);
            if (orderDetail == null)
                return NotFound();

            return Ok(orderDetail);
        }

        [HttpGet]
        [Route("GetOrderDetailsByOrderId")]
        public IActionResult GetOrderDetailsByOrderId(int orderId)
        {
            // Lấy order có orderId và status = 1
            var order = userContext.Orders.FirstOrDefault(x => x.OrderId == orderId && x.Status == 1);
            if (order == null)
                return NotFound("Order not found for the given order ID or status is not 1");

            // Lấy danh sách orderDetail của order đã tìm thấy
            var orderDetails = userContext.OrderDetails.Where(x => x.OrderId == orderId).ToList();
            if (orderDetails == null || orderDetails.Count == 0)
                return NotFound("Order details not found for the given order ID");

            return Ok(orderDetails);
        }


        [HttpPost]
        [Route("AddOrderDetail")]
        public IActionResult AddOrderDetail(OrderDetails orderDetail)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            userContext.OrderDetails.Add(orderDetail);
            userContext.SaveChanges();
            return Ok("Order detail added");
        }

        [HttpPut]
        [Route("UpdateOrderDetail")]
        public IActionResult UpdateOrderDetail(OrderDetails orderDetail)
        {
            var existingOrderDetail = userContext.OrderDetails.FirstOrDefault(x => x.OrderDetaiId == orderDetail.OrderDetaiId);
            if (existingOrderDetail == null)
                return NotFound("Order detail not found");

            userContext.Entry(existingOrderDetail).CurrentValues.SetValues(orderDetail);
            userContext.SaveChanges();
            return Ok("Order detail updated");
        }

        [HttpDelete]
        [Route("DeleteOrderDetail")]
        public IActionResult DeleteOrderDetail(int id)
        {
            var orderDetail = userContext.OrderDetails.FirstOrDefault(x => x.OrderDetaiId == id);
            if (orderDetail == null)
                return NotFound("Order detail not found");

            userContext.OrderDetails.Remove(orderDetail);
            userContext.SaveChanges();
            return Ok("Order detail deleted");
        }
        [HttpPut]
        [Route("UpdateOrderStatus")]
        public IActionResult UpdateOrderStatus(int orderId)
        {
            // Tìm order có orderId
            var order = userContext.Orders.FirstOrDefault(x => x.OrderId == orderId);
            if (order == null)
                return NotFound("Order not found for the given order ID");

            // Cập nhật trạng thái của order thành 0
            order.Status = 0;
            userContext.SaveChanges();

            return Ok("Order status updated");
        }
    }
}
