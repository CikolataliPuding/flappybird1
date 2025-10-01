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

### Render Dağıtım (Web Service, .NET 8)
1. Render’da yeni bir “Web Service” oluşturun.
2. Kaynak: Bu GitHub deposu.
3. Ortam: Docker (render.yaml ve Dockerfile bu repoda mevcut).
4. Plan: Free (veya ihtiyacınıza göre).
5. Region: Oregon (varsayılan).
6. `render.yaml` içindeki servisi otomatik algılar; özel komut gerekmez.

Konteyner 10000 portunu dinliyor ve ASP.NET Core uygulaması Blazor WASM static dosyalarını servis ediyor. İlk kurulum sonrası 1-2 dakika içinde uygulama yayında olur.
