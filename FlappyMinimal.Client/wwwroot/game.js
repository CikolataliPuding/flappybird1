(function(){
  const game = {
    canvas: null,
    ctx: null,
    dotnet: null,
    last: 0,
    init: async function(dotnetRef){
      this.canvas = document.getElementById('gameCanvas');
      this.ctx = this.canvas.getContext('2d');
      this.dotnet = dotnetRef;
      window.addEventListener('keydown', e => {
        if (!this.dotnet) return;
        this.dotnet.invokeMethodAsync('OnKeyDown', e.key);
      });
      // Resize handling: scale via CSS already; keep canvas backing size fixed.
    },
    startLoop: function(){
      const step = (t)=>{
        if (this.last === 0) this.last = t;
        const dt = Math.min(0.05, (t - this.last) / 1000);
        this.last = t;
        if (this.dotnet){ this.dotnet.invokeMethodAsync('Tick', dt); }
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    },
    draw: function(state){
      const ctx = this.ctx;
      if (!ctx) return;
      const w = state.w, h = state.h;
      ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
      ctx.fillStyle = '#13151a';
      ctx.fillRect(0,0,w,h);

      // Pipes
      ctx.fillStyle = '#3cb371';
      const gap = 170;
      for (let i=0;i<state.pipes.length;i++){
        const p = state.pipes[i];
        const topH = p.gapY - gap/2;
        ctx.fillRect(p.x, 0, 64, topH);
        const bottomY = p.gapY + gap/2;
        ctx.fillRect(p.x, bottomY, 64, h - bottomY);
      }

      // Player
      ctx.fillStyle = '#ffd166';
      ctx.beginPath();
      ctx.arc(state.px, state.py, state.pr, 0, Math.PI*2);
      ctx.fill();

      // HUD
      ctx.fillStyle = '#e9eef5';
      ctx.font = '16px system-ui, sans-serif';
      ctx.fillText('Skor: ' + state.score, 12, 24);
      const m = 'Max: ' + state.maxScore;
      const wText = ctx.measureText(m).width;
      ctx.fillText(m, w - wText - 12, 24);

      // Hints / States
      ctx.globalAlpha = 0.8;
      ctx.font = '14px system-ui, sans-serif';
      ctx.fillText('Space=Zıpla | R=Reset | P=Dur/Devam', 12, h - 12);
      ctx.globalAlpha = 1;

      if (state.state === 'Ready'){
        ctx.globalAlpha = 0.85;
        ctx.fillStyle = '#0e0f12';
        ctx.fillRect(0,0,w,h);
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#e9eef5';
        ctx.font = 'bold 22px system-ui, sans-serif';
        const msg = 'Başlamak için Space';
        const tw = ctx.measureText(msg).width;
        ctx.fillText(msg, (w-tw)/2, h/2);
      } else if (state.state === 'GameOver'){
        ctx.globalAlpha = 0.85;
        ctx.fillStyle = '#0e0f12';
        ctx.fillRect(0,0,w,h);
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#e9eef5';
        ctx.font = 'bold 22px system-ui, sans-serif';
        const msg = 'Oyun Bitti - Space ile Yeniden';
        const tw = ctx.measureText(msg).width;
        ctx.fillText(msg, (w-tw)/2, h/2);
      }
    },
    storeGet: (k)=> { try { return localStorage.getItem(k) ?? ''; } catch { return ''; } },
    storeSet: (k,v)=> { try { localStorage.setItem(k, v ?? ''); } catch { } }
  };
  window.game = game;
})();


