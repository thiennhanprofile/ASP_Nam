using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Ex5.Model
{
    public class OrderDetails
    {
        [Key]
        public int OrderDetaiId { get; set; }
        public int OrderId { get; set; } // Khóa ngoại của Order
        public int ProductId { get; set; }
        public int Quantity { get; set; }
    }
}
