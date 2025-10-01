using Microsoft.AspNetCore.ResponseCompression;

var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.UseHttpsRedirection();

// Blazor WASM static dosyaları
app.UseBlazorFrameworkFiles();
app.UseStaticFiles();

// SPA fallback
app.MapFallbackToFile("index.html");

app.Run();

