using Demo_OnlineShop.Models;
using Microsoft.EntityFrameworkCore;

namespace Demo_OnlineShop; 

public class DataContext : DbContext {

    public DataContext(DbContextOptions<DataContext> options) : base(options) {
        
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Product> Products { get; set; }

}