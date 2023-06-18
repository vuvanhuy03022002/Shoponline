using Demo_OnlineShop.Models;
using Microsoft.AspNetCore.Mvc;

namespace Demo_OnlineShop.Controllers; 

[ApiController]
public class UserController : Controller {

    private readonly DataContext dataContext;

    public UserController(DataContext dataContext) {
        this.dataContext = dataContext;
    }

    [HttpPost]
    [Route("/api/login")]
    public IActionResult login(UserLogin userLogin) {
        User user = dataContext.Users.Where(user => user.Email.Equals(userLogin.Email)).FirstOrDefault();
        if (user == null) {
            return BadRequest("User không tồn tại: " + userLogin.Email);
        }

        if (!user.Password.Equals(userLogin.Password)) {
            return BadRequest(StatusCodes.Status400BadRequest);
        }

        return Ok(StatusCodes.Status200OK);
    }
}