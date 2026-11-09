(() => {
  const hero = document.querySelector('.hero-expert');
  if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !window.matchMedia('(pointer: fine)').matches) return;
  const canvas = document.createElement('canvas');
  canvas.className = 'cursor-lines';
  canvas.setAttribute('aria-hidden', 'true');
  hero.prepend(canvas);
  const ctx = canvas.getContext('2d');
  const step = 52;
  let pointer = { x: -999, y: -999 }, size = { width: 0, height: 0 };
  const resize = () => {
    size = { width: hero.clientWidth, height: hero.clientHeight };
    canvas.width = size.width * devicePixelRatio; canvas.height = size.height * devicePixelRatio;
    canvas.style.width = `${size.width}px`; canvas.style.height = `${size.height}px`;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  };
  const draw = () => {
    ctx.clearRect(0, 0, size.width, size.height);
    for (let x = 0; x < size.width; x += step) for (let y = 0; y < size.height; y += step) {
      const near = Math.hypot(x - pointer.x, y - pointer.y) < step * 2.5;
      if (near) {
        ctx.strokeStyle = 'rgba(126, 231, 255, .52)'; ctx.lineWidth = 1.5;
        if (Math.hypot(x + step - pointer.x, y - pointer.y) < step * 2.5) { ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + step, y); ctx.stroke(); }
        if (Math.hypot(x - pointer.x, y + step - pointer.y) < step * 2.5) { ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + step); ctx.stroke(); }
      }
      ctx.beginPath(); ctx.arc(x, y, near ? 3.5 : 1.7, 0, Math.PI * 2);
      ctx.fillStyle = near ? '#7ee7ff' : 'rgba(220, 225, 255, .38)'; ctx.fill();
      if (near) { ctx.beginPath(); ctx.arc(x, y, 7, 0, Math.PI * 2); ctx.strokeStyle = 'rgba(126, 231, 255, .22)'; ctx.stroke(); }
    }
    requestAnimationFrame(draw);
  };
  hero.addEventListener('pointermove', event => { const rect = hero.getBoundingClientRect(); pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top }; });
  hero.addEventListener('pointerleave', () => { pointer = { x: -999, y: -999 }; });
  resize(); new ResizeObserver(resize).observe(hero); draw();
})();
