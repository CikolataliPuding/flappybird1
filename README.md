## Flappy Bird (C# - Blazor WebAssembly)

Bu depo, C# ile Blazor WebAssembly kullanılarak geliştirilmiş, tarayıcıda çalışan basit bir Flappy Bird oyununu içerir. Render üzerinde statik site olarak dağıtılabilir.

### Geliştirme (Yerel)

Gereksinimler:
- .NET 8 SDK

Çalıştırma:

```bash
dotnet restore
dotnet build
dotnet run --project FlappyBird.Client/FlappyBird.Client.csproj
```

Varsayılan olarak `http://localhost:5000` veya `http://localhost:5173` adreslerinden ulaşabilirsiniz.

### Kontroller
- Space / Mouse tıklama / Dokunma: Zıpla
- Yeniden Başlat: Oyun biterse yeniden başlatır

### Render Dağıtım (Web Service, .NET runtime)
1. Render’da “Web Service” oluşturun.
2. Kaynak: Bu GitHub deposu.
3. Runtime: .NET
4. Region: Oregon (varsayılan), Plan: Free
5. Build Command: `dotnet publish FlappyBird.Server/FlappyBird.Server.csproj -c Release -o out`
6. Start Command: `dotnet out/FlappyBird.Server.dll`
7. Environment > Add: `ASPNETCORE_URLS = http://0.0.0.0:${PORT}` (render.yaml bunu içerir)

Uygulama, ASP.NET Core ile Blazor WASM static dosyalarını sunar ve tüm yolları `index.html`’e yönlendirir.
