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

            // Trả về thông tin của người dùng
            return Ok(new { UserId = user.UserId, FirstName = user.FirstName });
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
