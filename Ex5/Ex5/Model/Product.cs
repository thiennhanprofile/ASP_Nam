using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Ex5.Model
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }
        [ForeignKey("Category")]
        public int CategoryId { get; set; }

        public int BrandId { get; set; }

        public string ProductTitle { get; set; }

        public string ImageUrl { get; set; }

        public decimal Price { get; set; }

        public int Quantity { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }

    }
}
