using Ex5.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Ex5.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserContext userContext;

        public UsersController(UserContext userContext)
        {
            this.userContext = userContext;
        }

        [HttpGet]
        [Route("GetUsers")]
        public IActionResult GetUsers()
        {
            var users = userContext.Users.ToList();
            return Ok(users);
        }

        [HttpGet]
        [Route("GetUser")]
        public IActionResult GetUser(int id)
        {
            var user = userContext.Users.FirstOrDefault(x => x.UserId == id);
            if (user == null)
                return NotFound();

            return Ok(user);
        }

        [HttpPost]
        [Route("AddUser")]
        public IActionResult AddUser(Users user)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            userContext.Users.Add(user);
            userContext.SaveChanges();
            return Ok("User added");
        }

        [HttpPut]
        [Route("UpdateUser")]
        public IActionResult UpdateUser(Users user)
        {
            var existingUser = userContext.Users.FirstOrDefault(x => x.UserId == user.UserId);
            if (existingUser == null)
                return NotFound("User not found");

            userContext.Entry(existingUser).CurrentValues.SetValues(user);
            userContext.SaveChanges();
            return Ok("User updated");
        }

        [HttpDelete]
        [Route("DeleteUser")]
        public IActionResult DeleteUser(int id)
        {
            var user = userContext.Users.FirstOrDefault(x => x.UserId == id);
            if (user == null)
                return NotFound("User not found");

            userContext.Users.Remove(user);
            userContext.SaveChanges();
            return Ok("User deleted");
        }

    }
}
