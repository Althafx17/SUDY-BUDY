import React, { useEffect, useRef } from 'react';

/**
 * Realistic procedural moving fire background for near examination cards.
 * Generates continuous licking flames, turbulent flame tongues, and flying luminous embers.
 * Zero external network/GIF dependencies.
 */
export default function FireCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || 320);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 160);

    const onResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth || 320;
      height = canvas.height = canvas.parentElement.offsetHeight || 160;
    };
    window.addEventListener('resize', onResize);

    // Particle pool for flame tongues
    const flameCount = 55;
    const flames = [];

    // Particle pool for floating embers
    const emberCount = 24;
    const embers = [];

    class Flame {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 8;
        this.vx = (Math.random() - 0.5) * 1.4;
        this.vy = -(Math.random() * 2.8 + 1.8);
        this.radius = Math.random() * 16 + 10;
        this.life = 1;
        this.decay = Math.random() * 0.032 + 0.018;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx += (Math.random() - 0.5) * 0.35;
        this.radius = Math.max(0.8, this.radius - 0.3);
        this.life -= this.decay;
        if (this.life <= 0 || this.y < height * 0.12) {
          this.reset();
        }
      }
      draw(c) {
        if (this.life <= 0) return;
        const progress = 1 - this.life;
        let r, g, b, a;

        if (progress < 0.22) {
          // White-hot flame core to golden yellow
          r = 255;
          g = Math.floor(220 + 35 * (1 - progress * 4.5));
          b = Math.floor(120 * (1 - progress * 4.5));
          a = this.life * 0.85;
        } else if (progress < 0.6) {
          // Intense roaring fire orange
          r = 255;
          g = Math.floor(140 * (1 - (progress - 0.22) * 2.6));
          b = 10;
          a = this.life * 0.75;
        } else {
          // Deep crimson flame tips fading out
          r = Math.floor(220 * (1 - (progress - 0.6) * 2.5));
          g = 20;
          b = 0;
          a = this.life * 0.45;
        }

        c.beginPath();
        c.arc(this.x, this.y, Math.max(0.5, this.radius), 0, Math.PI * 2);
        c.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
        c.fill();
      }
    }

    class Ember {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 6;
        this.vx = (Math.random() - 0.5) * 1.6;
        this.vy = -(Math.random() * 3.4 + 1.6);
        this.size = Math.random() * 2.2 + 1.0;
        this.life = 1;
        this.decay = Math.random() * 0.022 + 0.012;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx += (Math.random() - 0.5) * 0.28;
        this.life -= this.decay;
        if (this.life <= 0 || this.y < 0) {
          this.reset();
        }
      }
      draw(c) {
        if (this.life <= 0) return;
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fillStyle = `rgba(255, ${Math.floor(190 * this.life + 60)}, 40, ${this.life * 0.95})`;
        c.shadowColor = '#ff6a00';
        c.shadowBlur = 5;
        c.fill();
        c.shadowBlur = 0;
      }
    }

    for (let i = 0; i < flameCount; i++) {
      const f = new Flame();
      f.y = height - Math.random() * (height * 0.85);
      f.life = Math.random();
      flames.push(f);
    }

    for (let i = 0; i < emberCount; i++) {
      const e = new Ember();
      e.y = height - Math.random() * height;
      e.life = Math.random();
      embers.push(e);
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Fiery base furnace glow
      const baseGrad = ctx.createLinearGradient(0, height, 0, height * 0.25);
      baseGrad.addColorStop(0, 'rgba(255, 68, 0, 0.48)');
      baseGrad.addColorStop(0.35, 'rgba(255, 130, 0, 0.22)');
      baseGrad.addColorStop(1, 'rgba(255, 30, 0, 0)');
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, height * 0.2, width, height);

      // Additive screen blend for intense luminous flames
      ctx.globalCompositeOperation = 'screen';

      for (let i = 0; i < flames.length; i++) {
        flames[i].update();
        flames[i].draw(ctx);
      }

      for (let i = 0; i < embers.length; i++) {
        embers[i].update();
        embers[i].draw(ctx);
      }

      ctx.globalCompositeOperation = 'source-over';
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="fire-moving-container" aria-hidden="true">
      {/* Procedural Canvas Fire Simulation */}
      <canvas ref={canvasRef} className="fire-moving-canvas" />

      {/* Layered CSS morphing flame tongues for rich organic body */}
      <div className="fire-flame-tongues">
        <div className="flame-tongue tongue-back" />
        <div className="flame-tongue tongue-mid" />
        <div className="flame-tongue tongue-front" />
      </div>

      {/* Burning furnace ember glow at the bottom */}
      <div className="fire-bottom-furnace" />
    </div>
  );
}
