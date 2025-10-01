using Microsoft.AspNetCore.ResponseCompression;

var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

// Health endpoint
app.MapGet("/health", () => Results.Ok("ok"));

// Blazor WASM static dosyaları
app.UseBlazorFrameworkFiles();
app.UseStaticFiles();

// SPA fallback
app.MapFallbackToFile("index.html");

app.Run();

