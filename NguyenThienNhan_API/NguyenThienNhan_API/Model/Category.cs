using System.ComponentModel.DataAnnotations;

namespace Ex5.Model
{
    public class Category
    {
        [Key]
        public int CategoryID { get; set; }

        public string Name { get; set; }
        public string Avartar { get; set; }
        public string Slug { get; set; }
        public bool? ShowOnHomePage { get; set; }
        public int? DisplayOrder { get; set; }
        public bool? Deleted { get; set; }
        public DateTime? CreateOnUtc { get; set; }
        public DateTime? UpdatedOnUtc { get; set; }
    }
}
