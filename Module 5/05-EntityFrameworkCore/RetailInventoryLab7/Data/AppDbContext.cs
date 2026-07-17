using Microsoft.EntityFrameworkCore;
using RetailInventoryLab7.Models;

namespace RetailInventoryLab7.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Product> Products { get; set; }

        public DbSet<Category> Categories { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(
                "Server=.;Database=RetailInventoryDB;Trusted_Connection=True;");
        }
    }
}