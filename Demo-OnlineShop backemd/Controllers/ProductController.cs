using Demo_OnlineShop.Models;
using Microsoft.AspNetCore.Mvc;

namespace Demo_OnlineShop.Controllers; 

[ApiController]
public class ProductController : Controller {

    private readonly DataContext dataContext;
    
    public ProductController(DataContext dataContext) {
        this.dataContext = dataContext;
    }

    [HttpPost]
    [Route("/api/product/new")]
    public IActionResult createProduct(ProductRequest product) {
        Product newProduct = new Product();
        newProduct.Name = product.Name;
        newProduct.Description = product.Description;
        newProduct.Thumbnail = product.Thumbnail;
        newProduct.Price = product.Price;
        
        dataContext.Products.Add(newProduct);
        dataContext.SaveChanges();
        return Ok(newProduct);
    }

    [HttpGet]
    [Route("/api/product/{id}")]
    public IActionResult getProductById(int id) {
        Product product = dataContext.Products.Where(product => product.Id.Equals(id)).FirstOrDefault();
        if (product == null) {
            return BadRequest(StatusCodes.Status400BadRequest);
        }

        return Ok(product);
    }

    [HttpGet]
    [Route("/api/product/all")]
    public IActionResult getAllProduct() {
        List<Product> products = dataContext.Products.ToList();
        return Ok(products);
    }
    
    
}