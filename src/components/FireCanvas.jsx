import React, { useEffect, useRef } from 'react';

/**
 * Authentic "OG Fire" Background Simulation for imminent exam cards.
 * Features realistic roaring fire structure:
 * - Nested procedural bezier flame columns (white-hot core -> golden body -> crimson licking tips)
 * - Dynamic air turbulence and organic swaying flame tongues
 * - Elongated teardrop rising flame plumes with thermal decay
 * - Crackling spark embers drifting in the thermal updraft
 * - Deep glowing hearth base
 */
export default function FireCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || 340);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 170);

    const onResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth || 340;
      height = canvas.height = canvas.parentElement.offsetHeight || 170;
    };
    window.addEventListener('resize', onResize);

    let time = 0;

    // 1. Procedural Licking Flame Columns (Authentic OG Fire Tongues)
    const tongueCount = 13;
    const tongues = Array.from({ length: tongueCount }, (_, i) => ({
      xRatio: (i + 0.5) / tongueCount,
      baseWidthRatio: 0.16 + Math.random() * 0.08,
      heightRatio: 0.58 + Math.random() * 0.36,
      speed: 1.6 + Math.random() * 1.4,
      offset: Math.random() * Math.PI * 2,
      swaySpeed: 1.1 + Math.random() * 1.3,
      swayAmp: 10 + Math.random() * 14,
    }));

    // 2. Rising Elongated Flame Plumes (Teardrop shape, authentic fire turbulence)
    const particleCount = 46;
    class FlameParticle {
      constructor() {
        this.reset(true);
      }
      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? height - Math.random() * (height * 0.85) : height + Math.random() * 10;
        this.vx = (Math.random() - 0.5) * 1.1;
        this.vy = -(Math.random() * 2.2 + 1.5);
        this.scaleX = Math.random() * 11 + 7;
        this.scaleY = this.scaleX * (1.7 + Math.random() * 0.7);
        this.life = 1;
        this.decay = Math.random() * 0.022 + 0.014;
        this.sway = Math.random() * Math.PI * 2;
        this.tilt = (Math.random() - 0.5) * 0.3;
      }
      update() {
        this.sway += 0.07;
        this.x += this.vx + Math.sin(this.sway) * 0.55;
        this.y += this.vy;
        this.tilt = Math.sin(this.sway) * 0.18;
        this.scaleX = Math.max(0.8, this.scaleX * 0.984);
        this.scaleY = Math.max(1.2, this.scaleY * 0.98);
        this.life -= this.decay;
        if (this.life <= 0 || this.y < height * 0.08) {
          this.reset();
        }
      }
      draw(c) {
        if (this.life <= 0) return;
        const p = 1 - this.life;
        c.save();
        c.translate(this.x, this.y);
        c.rotate(this.tilt);

        c.beginPath();
        c.ellipse(0, 0, Math.max(1, this.scaleX), Math.max(2, this.scaleY), 0, 0, Math.PI * 2);

        if (p < 0.22) {
          // White-hot core
          c.fillStyle = `rgba(255, 255, 230, ${this.life * 0.9})`;
        } else if (p < 0.52) {
          // Golden yellow flame
          c.fillStyle = `rgba(255, 185, 25, ${this.life * 0.82})`;
        } else if (p < 0.8) {
          // Roaring fire orange
          c.fillStyle = `rgba(240, 80, 10, ${this.life * 0.7})`;
        } else {
          // Crimson flame tips
          c.fillStyle = `rgba(180, 20, 5, ${this.life * 0.45})`;
        }
        c.fill();
        c.restore();
      }
    }

    const particles = Array.from({ length: particleCount }, () => new FlameParticle());

    // 3. Crackling Sparks & Floating Fire Embers
    const sparkCount = 28;
    class Spark {
      constructor() {
        this.reset(true);
      }
      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? height - Math.random() * height : height + Math.random() * 6;
        this.vx = (Math.random() - 0.5) * 1.6;
        this.vy = -(Math.random() * 2.8 + 1.8);
        this.radius = Math.random() * 1.8 + 0.8;
        this.life = 1;
        this.decay = Math.random() * 0.016 + 0.01;
        this.wobble = Math.random() * Math.PI * 2;
      }
      update() {
        this.wobble += 0.11;
        this.x += this.vx + Math.cos(this.wobble) * 0.75;
        this.y += this.vy;
        this.life -= this.decay;
        if (this.life <= 0 || this.y < 0) {
          this.reset();
        }
      }
      draw(c) {
        if (this.life <= 0) return;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = `rgba(255, ${Math.floor(210 * this.life + 45)}, 30, ${this.life * 0.95})`;
        c.fill();
      }
    }

    const sparks = Array.from({ length: sparkCount }, () => new Spark());

    // Render loop
    const render = () => {
      time += 0.032;
      ctx.clearRect(0, 0, width, height);

      // A. Fiery bottom bed glow (coals / hearth)
      const hearthGrad = ctx.createLinearGradient(0, height, 0, height * 0.28);
      hearthGrad.addColorStop(0, 'rgba(255, 60, 0, 0.52)');
      hearthGrad.addColorStop(0.45, 'rgba(255, 120, 0, 0.24)');
      hearthGrad.addColorStop(1, 'rgba(255, 30, 0, 0)');
      ctx.fillStyle = hearthGrad;
      ctx.fillRect(0, 0, width, height);

      // B. Screen blend for luminous additive flame licking
      ctx.globalCompositeOperation = 'screen';

      // C. Draw Organic Bezier Flame Tongues
      tongues.forEach((t, i) => {
        const baseX = t.xRatio * width;
        const baseW = t.baseWidthRatio * width;
        const flameH = (t.heightRatio * height) * (0.82 + Math.sin(time * t.speed + t.offset) * 0.2 + Math.cos(time * 0.65 + i) * 0.1);
        const sway = Math.sin(time * t.swaySpeed + t.offset) * t.swayAmp;
        const tipX = baseX + sway;
        const tipY = Math.max(height * 0.08, height - flameH);

        // 1. Outer Crimson Flame Mantel
        ctx.beginPath();
        ctx.moveTo(baseX - baseW * 0.6, height);
        ctx.bezierCurveTo(
          baseX - baseW * 0.4 + sway * 0.3, height - flameH * 0.45,
          tipX - baseW * 0.25, tipY + flameH * 0.2,
          tipX, tipY
        );
        ctx.bezierCurveTo(
          tipX + baseW * 0.25, tipY + flameH * 0.2,
          baseX + baseW * 0.4 + sway * 0.3, height - flameH * 0.45,
          baseX + baseW * 0.6, height
        );
        ctx.closePath();
        const gradOuter = ctx.createLinearGradient(baseX, height, tipX, tipY);
        gradOuter.addColorStop(0, 'rgba(220, 38, 38, 0.7)');
        gradOuter.addColorStop(0.6, 'rgba(234, 88, 12, 0.55)');
        gradOuter.addColorStop(1, 'rgba(185, 28, 28, 0)');
        ctx.fillStyle = gradOuter;
        ctx.fill();

        // 2. Middle Bright Roaring Flame Body
        ctx.beginPath();
        const midH = flameH * 0.82;
        const midTipY = height - midH;
        ctx.moveTo(baseX - baseW * 0.4, height);
        ctx.bezierCurveTo(
          baseX - baseW * 0.25 + sway * 0.25, height - midH * 0.45,
          tipX - baseW * 0.15, midTipY + midH * 0.2,
          tipX, midTipY
        );
        ctx.bezierCurveTo(
          tipX + baseW * 0.15, midTipY + midH * 0.2,
          baseX + baseW * 0.25 + sway * 0.25, height - midH * 0.45,
          baseX + baseW * 0.4, height
        );
        ctx.closePath();
        const gradMid = ctx.createLinearGradient(baseX, height, tipX, midTipY);
        gradMid.addColorStop(0, 'rgba(249, 115, 22, 0.85)');
        gradMid.addColorStop(0.7, 'rgba(245, 158, 11, 0.65)');
        gradMid.addColorStop(1, 'rgba(239, 68, 68, 0)');
        ctx.fillStyle = gradMid;
        ctx.fill();

        // 3. Inner White-Hot Flame Core
        ctx.beginPath();
        const coreH = flameH * 0.52;
        const coreTipY = height - coreH;
        ctx.moveTo(baseX - baseW * 0.22, height);
        ctx.bezierCurveTo(
          baseX - baseW * 0.12 + sway * 0.15, height - coreH * 0.4,
          tipX - baseW * 0.08, coreTipY + coreH * 0.2,
          tipX, coreTipY
        );
        ctx.bezierCurveTo(
          tipX + baseW * 0.08, coreTipY + coreH * 0.2,
          baseX + baseW * 0.12 + sway * 0.15, height - coreH * 0.4,
          baseX + baseW * 0.22, height
        );
        ctx.closePath();
        const gradCore = ctx.createLinearGradient(baseX, height, tipX, coreTipY);
        gradCore.addColorStop(0, 'rgba(255, 255, 235, 0.95)');
        gradCore.addColorStop(0.5, 'rgba(254, 240, 138, 0.85)');
        gradCore.addColorStop(1, 'rgba(251, 191, 36, 0)');
        ctx.fillStyle = gradCore;
        ctx.fill();
      });

      // D. Draw Licking Teardrop Plumes
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx);
      }

      // E. Draw Crackling Sparks
      for (let i = 0; i < sparks.length; i++) {
        sparks[i].update();
        sparks[i].draw(ctx);
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
      {/* Procedural Canvas OG Fire Simulation */}
      <canvas ref={canvasRef} className="fire-moving-canvas" />

      {/* Layered CSS organic flame crests for rich silhouette body */}
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
