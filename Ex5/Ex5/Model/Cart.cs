using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Ex5.Model
{
    public class Cart
    {
        [Key]
        public int CartId { get; set; }
        [ForeignKey("User")]
        public int UserId { get; set; }

        [ForeignKey("Product")]
        public int ProductId { get; set; }

        public int Quantity { get; set; }
    }
}