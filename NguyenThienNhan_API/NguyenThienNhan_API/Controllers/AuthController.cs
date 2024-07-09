using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Ex5.Model;

namespace Ex5.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserContext _context;

        public AuthController(UserContext context)
        {
            _context = context;
        }

        // Register
        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register(Users user)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Email == user.Email);
            if (existingUser != null)
                return Conflict("Email already exists");

            user.Password = GetMD5(user.Password);
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok("User registered successfully");
        }

        // Login
        // Login
        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login(string email, string password)
        {
            if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
                return BadRequest("Email and password are required");

            var f_password = GetMD5(password);
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email.Equals(email) && u.Password.Equals(f_password));

            if (user == null)
                return NotFound("Invalid email or password");

            // Tìm kiếm Order có cùng UserId trong CSDL và Status != 0
            var order = await _context.Orders.FirstOrDefaultAsync(o => o.UserId == user.UserId && o.Status != 0);

            // Nếu đã tồn tại Order có Status khác 0, trả về thông tin của người dùng cùng với Order đã có
            if (order != null)
            {
                return Ok(new { UserId = user.UserId, FirstName = user.FirstName, OrderId = order.OrderId });
            }
            else
            {
                // Nếu không tìm thấy Order hoặc Order có Status = 0, tạo một Order mới
                order = new Order
                {
                    Name = user.FirstName, // Gán Name bằng FirstName của User
                    UserId = user.UserId, // Sử dụng UserId của người dùng đã đăng nhập
                    CreatedOnUtc = DateTime.UtcNow,
                    Status = 1 // Trạng thái mặc định của đơn hàng
                };

                _context.Orders.Add(order);
                await _context.SaveChangesAsync();

                // Trả về thông tin của người dùng cùng với Order mới được tạo
                return Ok(new { UserId = user.UserId, FirstName = user.FirstName, OrderId = order.OrderId });
            }
        }

        // Logout
        [HttpGet]
        [Route("Logout")]
        public IActionResult Logout()
        {
            // Here you can clear the authentication token or session
            // For simplicity, I'll just return a message
            return Ok("Logged out successfully");
        }

        // Utility method to compute MD5 hash
        private string GetMD5(string str)
        {
            using (MD5 md5 = MD5.Create())
            {
                byte[] hashBytes = md5.ComputeHash(Encoding.UTF8.GetBytes(str));
                StringBuilder sb = new StringBuilder();
                for (int i = 0; i < hashBytes.Length; i++)
                {
                    sb.Append(hashBytes[i].ToString("x2"));
                }
                return sb.ToString();
            }
        }
    }
}
