using Microsoft.AspNetCore.Mvc;
using Ex5.Model;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Ex5.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class BrandController : ControllerBase
    {
        private readonly UserContext userContext;

        public BrandController(UserContext userContext)
        {
            this.userContext = userContext;
        }

        [HttpGet]
        [Route("GetBrands")]
        public IActionResult GetBrands()
        {
            var brands = userContext.Brands.ToList();
            return Ok(brands);
        }

        [HttpGet]
        [Route("GetBrand")]
        public IActionResult GetBrand(int id)
        {
            var brand = userContext.Brands.FirstOrDefault(x => x.BrandId == id);
            if (brand == null)
                return NotFound();

            return Ok(brand);
        }

        [HttpPost]
        [Route("AddBrand")]
        public IActionResult AddBrand(Brand brand)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            userContext.Brands.Add(brand);
            userContext.SaveChanges();
            return Ok("Brand added");
        }

        [HttpPut]
        [Route("UpdateBrand")]
        public IActionResult UpdateBrand(Brand brand)
        {
            var existingBrand = userContext.Brands.FirstOrDefault(x => x.BrandId == brand.BrandId);
            if (existingBrand == null)
                return NotFound("Brand not found");

            userContext.Entry(existingBrand).CurrentValues.SetValues(brand);
            userContext.SaveChanges();
            return Ok("Brand updated");
        }

        [HttpDelete]
        [Route("DeleteBrand")]
        public IActionResult DeleteBrand(int id)
        {
            var brand = userContext.Brands.FirstOrDefault(x => x.BrandId == id);
            if (brand == null)
                return NotFound("Brand not found");

            userContext.Brands.Remove(brand);
            userContext.SaveChanges();
            return Ok("Brand deleted");
        }
    }
}
