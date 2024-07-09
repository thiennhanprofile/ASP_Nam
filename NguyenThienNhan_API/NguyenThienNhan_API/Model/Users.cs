using System.ComponentModel.DataAnnotations;

namespace Ex5.Model
{
    public class Users
    {
        [Key]
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string? LastName { get; set; } 
        public string Email { get; set; }
        public string Password { get; set; }
        public bool? IsAdmin { get; set; }

    }
}
