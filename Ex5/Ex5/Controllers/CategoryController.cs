using Microsoft.AspNetCore.Mvc;
using Ex5.Model;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Ex5.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly UserContext userContext;

        public CategoryController(UserContext userContext)
        {
            this.userContext = userContext;
        }

        [HttpGet]
        [Route("GetCategories")]
        public IActionResult GetCategories()
        {
            var categories = userContext.Categories.ToList();
            return Ok(categories);
        }

        [HttpGet]
        [Route("GetCategory")]
        public IActionResult GetCategory(int id)
        {
            var category = userContext.Categories.FirstOrDefault(x => x.CategoryID == id);
            if (category == null)
                return NotFound();

            return Ok(category);
        }

        [HttpPost]
        [Route("AddCategory")]
        public IActionResult AddCategory(Category category)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            userContext.Categories.Add(category);
            userContext.SaveChanges();
            return Ok("Category added");
        }

        [HttpPut]
        [Route("UpdateCategory")]
        public IActionResult UpdateCategory(Category category)
        {
            var existingCategory = userContext.Categories.FirstOrDefault(x => x.CategoryID == category.CategoryID);
            if (existingCategory == null)
                return NotFound("Category not found");

            userContext.Entry(existingCategory).CurrentValues.SetValues(category);
            userContext.SaveChanges();
            return Ok("Category updated");
        }

        [HttpDelete]
        [Route("DeleteCategory")]
        public IActionResult DeleteCategory(int id)
        {
            var category = userContext.Categories.FirstOrDefault(x => x.CategoryID == id);
            if (category == null)
                return NotFound("Category not found");

            userContext.Categories.Remove(category);
            userContext.SaveChanges();
            return Ok("Category deleted");
        }
    }
}
