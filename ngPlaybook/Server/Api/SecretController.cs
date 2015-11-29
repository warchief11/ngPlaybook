using System.Collections.Generic;
using System.Web.Http;
using NgPlaybook.Server.Models;

namespace NgPlaybook.Server.Api
{
    [Authorize]
    public class SecretController : ApiController
    {
        public IHttpActionResult Get()
        {
            return Ok(new Recipe
            {
                Id = 1, 
                Title = "French Toast",
                Instructions = @"Mix the ingredients and cook.",
                Ingredients = new List<Ingredient>
                {
                  new Ingredient { Id = 1, Name="Eggs", Quantity="4"},
                  new Ingredient { Id = 2, Name="Milk", Quantity="2/3 Cup"},
                  new Ingredient { Id = 4, Name="Day Old Bread", Quantity="8 thick slices"}
                }
            });
        }
    }
}
