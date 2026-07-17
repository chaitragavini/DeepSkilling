using RetailInventoryLab7.Data;
using Microsoft.EntityFrameworkCore;

using var context = new AppDbContext();

// Filter and Sort Products
var filtered = await context.Products
    .Where(p => p.Price > 1000)
    .OrderByDescending(p => p.Price)
    .ToListAsync();

Console.WriteLine("Filtered Products:");

foreach (var p in filtered)
{
    Console.WriteLine($"{p.Name} - ₹{p.Price}");
}

Console.WriteLine();

// Project into DTO
var productDTOs = await context.Products
    .Select(p => new
    {
        p.Name,
        p.Price
    })
    .ToListAsync();

Console.WriteLine("Product DTOs:");

foreach (var p in productDTOs)
{
    Console.WriteLine($"{p.Name} - ₹{p.Price}");
}