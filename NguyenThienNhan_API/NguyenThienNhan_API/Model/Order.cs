using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Ex5.Model
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }
        public string Name { get; set; }
        public int? UserId { get; set; } 
        public int? Status { get; set; }
        public DateTime? CreatedOnUtc { get; set; }

    }
}
