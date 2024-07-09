using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Ex5.Model
{
    public class OrderDetails
    {
        [Key]
        public int OrderDetaiId { get; set; }
        [ForeignKey("Order")]
        public int OrderId { get; set; } // Khóa ngoại của Order

        [ForeignKey("Product")]
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public Order Order { get; set; }

    }
}
