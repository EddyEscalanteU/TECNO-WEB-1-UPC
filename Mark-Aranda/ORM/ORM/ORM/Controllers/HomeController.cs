using Microsoft.AspNetCore.Mvc;

namespace ORM.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
