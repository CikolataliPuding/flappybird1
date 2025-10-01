## Flappy Minimal (Blazor WebAssembly Hosted, .NET 8)

Minimal, canvas tabanlı bir Flappy benzeri oyun. Space ile zıpla, skor ve maksimum skor (localStorage) desteği. Render.com Web Service olarak kolay deploy.

### Yapı
- `FlappyMinimal.Client` (WASM): Oyun ve canvas/JS interop
- `FlappyMinimal.Server` (ASP.NET Core): WASM ve statik dosyalar
- `FlappyMinimal.Shared`: Ortak tipler (şimdilik boş)

### Gereksinimler
- .NET 8 SDK

### Geliştirme (Yerel)
```bash
dotnet restore
dotnet run --project FlappyMinimal.Server/FlappyMinimal.Server.csproj
# veya canlı yenileme: dotnet watch run --project FlappyMinimal.Server
```
Tarayıcı: `https://localhost:5001` veya CLI çıktısı.

### Build
```bash
dotnet publish FlappyMinimal.Server/FlappyMinimal.Server.csproj -c Release -o out
```

### Render.com – Web Service (önerilen)
Yeni Web Service oluştur:
- Runtime: .NET 8
- Build Command: `dotnet publish FlappyMinimal.Server/FlappyMinimal.Server.csproj -c Release -o out`
- Start Command: `dotnet out/FlappyMinimal.Server.dll --urls http://0.0.0.0:$PORT`
- Health Check Path: `/health`

Deploy sonrası verilen URL’yi aç.

### Oyun Kontrolleri
- Space: Zıpla / Başlat / Yeniden başlat
- R: Reset
- P: Dur/Devam

### Notlar
- Çizimler tamamen canvas ile, görsel yok
- Skor ve Max Skor ekranda; `maxScore` anahtarıyla localStorage’da tutulur

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
