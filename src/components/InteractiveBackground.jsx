import { useEffect } from 'react';
import '../css/interactive-background.css';

function InteractiveBackground() {
  useEffect(() => {
    const canvas = document.getElementById('halftone-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const mouse = { x: width / 2, y: height / 2, radius: 220 };
    let time = 0;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function onMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      time += 0.02;
      const cols = Math.ceil(width / 28);
      const rows = Math.ceil(height / 28);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * 28 + 14;
          const y = j * 28 + 14;
          const dist = Math.hypot(mouse.x - x, mouse.y - y);
          let radius = 1.5 + Math.sin(time + i * 0.18 + j * 0.18) * 1.4;

          if (dist < mouse.radius) {
            radius += (1 - dist / mouse.radius) * 4.5;
          }

          ctx.beginPath();
          ctx.arc(x, y, Math.min(radius, 6.5), 0, Math.PI * 2);
          ctx.fillStyle = (i + j) % 3 === 0
            ? `rgba(255, 107, 0, ${0.12 + radius / 18})`
            : `rgba(0, 240, 255, ${0.10 + radius / 18})`;
          ctx.fill();
        }
      }
      requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <>
      <canvas id="halftone-canvas" className="halftone-canvas" />
      <div className="bg-halftone-grid" />
      <div className="ambient-lights" />
    </>
  );
}

export default InteractiveBackground;
