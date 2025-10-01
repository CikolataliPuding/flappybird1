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

### Render Dağıtım
1. Depoyu Render'a bağlayın.
2. `render.yaml` dosyasını kullanarak Static Site olarak kurulum yapın.
3. Build Command: `dotnet publish FlappyBird.Client/FlappyBird.Client.csproj -c Release -o build`
4. Publish Directory: `build/wwwroot`

Render, `wwwroot` içeriğini statik olarak sunacaktır. Blazor WebAssembly istemci tarafında çalışır.
