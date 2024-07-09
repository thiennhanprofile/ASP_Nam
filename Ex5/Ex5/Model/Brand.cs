using System.ComponentModel.DataAnnotations;

namespace Ex5.Model
{
    public class Brand
    {
        [Key]
        public int BrandId { get; set; }
        public string Name { get; set; }
        public string Avatar { get; set; }
        public string Slug { get; set; }
        public bool? ShowOnHomePage { get; set; }
        public int? DisplayOrder { get; set; }
        public DateTime? CreatedOnUtc { get; set; }
        public DateTime? UpdatedOnUtc { get; set; }
        public bool? Deleted { get; set; }

    }
}
