using Microsoft.EntityFrameworkCore;
using RetailInventoryLab6.Models;

namespace RetailInventoryLab6.Data
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