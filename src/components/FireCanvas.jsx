import React, { useEffect, useRef } from 'react';

/**
 * Light, Slow & Sharp "OG Fire" Simulation.
 * Key characteristics:
 * - Razor-sharp pointed flame blades & spurs (zero round circles/ellipses)
 * - Sharp diamond/shard flame particles that drift slowly
 * - Sharp needle spark embers
 * - Light, luminous, ethereal color palette (warm golden-amber & radiant fire orange)
 * - Calm, hypnotic, slow-motion licking movement (~3x slower)
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

    // 1. Sharp Procedural Flame Blades (Pointed spearhead/dagger flame tongues)
    const tongueCount = 12;
    const tongues = Array.from({ length: tongueCount }, (_, i) => ({
      xRatio: (i + 0.5) / tongueCount,
      baseWidthRatio: 0.14 + Math.random() * 0.06,
      heightRatio: 0.52 + Math.random() * 0.32,
      speed: 0.45 + Math.random() * 0.4, // Slower oscillation
      offset: Math.random() * Math.PI * 2,
      swaySpeed: 0.35 + Math.random() * 0.35,
      swayAmp: 7 + Math.random() * 8,
    }));

    // 2. Sharp Rising Flame Shards (Pointed diamond & blade geometry - NO round circles)
    const particleCount = 38;
    class SharpFlameShard {
      constructor() {
        this.reset(true);
      }
      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? height - Math.random() * (height * 0.8) : height + Math.random() * 8;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = -(Math.random() * 0.65 + 0.45); // Slower, gentle rise
        this.halfW = Math.random() * 4 + 2.5;
        this.halfH = this.halfW * (2.2 + Math.random() * 1.0); // Elongated sharp blade
        this.life = 1;
        this.decay = Math.random() * 0.009 + 0.006; // Slower decay
        this.sway = Math.random() * Math.PI * 2;
        this.rot = (Math.random() - 0.5) * 0.4;
        this.rotSpeed = (Math.random() - 0.5) * 0.015;
      }
      update() {
        this.sway += 0.025;
        this.rot += this.rotSpeed;
        this.x += this.vx + Math.sin(this.sway) * 0.28;
        this.y += this.vy;
        this.halfW = Math.max(0.6, this.halfW * 0.992);
        this.halfH = Math.max(1.2, this.halfH * 0.99);
        this.life -= this.decay;
        if (this.life <= 0 || this.y < height * 0.06) {
          this.reset();
        }
      }
      draw(c) {
        if (this.life <= 0) return;
        const p = 1 - this.life;
        c.save();
        c.translate(this.x, this.y);
        c.rotate(this.rot);

        // Draw razor-sharp diamond flame shard
        c.beginPath();
        c.moveTo(0, -this.halfH); // Sharp top tip
        c.lineTo(this.halfW, 0); // Sharp right flank
        c.lineTo(0, this.halfH * 0.7); // Sharp bottom notch
        c.lineTo(-this.halfW, 0); // Sharp left flank
        c.closePath();

        // Light, airy, luminous palette
        if (p < 0.25) {
          // White-hot radiant core
          c.fillStyle = `rgba(255, 255, 220, ${this.life * 0.65})`;
        } else if (p < 0.58) {
          // Light golden amber flame
          c.fillStyle = `rgba(255, 190, 45, ${this.life * 0.52})`;
        } else if (p < 0.84) {
          // Warm bright orange
          c.fillStyle = `rgba(250, 115, 20, ${this.life * 0.4})`;
        } else {
          // Delicate crimson tip
          c.fillStyle = `rgba(215, 45, 15, ${this.life * 0.25})`;
        }
        c.fill();
        c.restore();
      }
    }

    const shards = Array.from({ length: particleCount }, () => new SharpFlameShard());

    // 3. Sharp Needle Spark Embers (Pointed 4-point star/needle - NO round dots)
    const sparkCount = 22;
    class SharpNeedleSpark {
      constructor() {
        this.reset(true);
      }
      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? height - Math.random() * height : height + Math.random() * 5;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = -(Math.random() * 0.9 + 0.6); // Slower rise
        this.len = Math.random() * 3.5 + 2.0;
        this.life = 1;
        this.decay = Math.random() * 0.008 + 0.005;
        this.wobble = Math.random() * Math.PI * 2;
      }
      update() {
        this.wobble += 0.04;
        this.x += this.vx + Math.cos(this.wobble) * 0.35;
        this.y += this.vy;
        this.life -= this.decay;
        if (this.life <= 0 || this.y < 0) {
          this.reset();
        }
      }
      draw(c) {
        if (this.life <= 0) return;
        // Draw sharp cross / needle ember
        c.save();
        c.translate(this.x, this.y);
        c.beginPath();
        c.moveTo(0, -this.len);
        c.lineTo(this.len * 0.28, 0);
        c.lineTo(0, this.len);
        c.lineTo(-this.len * 0.28, 0);
        c.closePath();
        c.fillStyle = `rgba(255, ${Math.floor(215 * this.life + 40)}, 40, ${this.life * 0.75})`;
        c.fill();
        c.restore();
      }
    }

    const needleSparks = Array.from({ length: sparkCount }, () => new SharpNeedleSpark());

    // Render loop
    const render = () => {
      time += 0.011; // Slower progression (~3x slower than before)
      ctx.clearRect(0, 0, width, height);

      // A. Light, luminous bottom hearth glow
      const hearthGrad = ctx.createLinearGradient(0, height, 0, height * 0.25);
      hearthGrad.addColorStop(0, 'rgba(255, 100, 15, 0.25)');
      hearthGrad.addColorStop(0.5, 'rgba(255, 150, 30, 0.12)');
      hearthGrad.addColorStop(1, 'rgba(255, 60, 0, 0)');
      ctx.fillStyle = hearthGrad;
      ctx.fillRect(0, 0, width, height);

      // B. Screen blend for clean luminous flame licking
      ctx.globalCompositeOperation = 'screen';

      // C. Draw Razor-Sharp Pointed Flame Blades
      tongues.forEach((t, i) => {
        const baseX = t.xRatio * width;
        const baseW = t.baseWidthRatio * width;
        const flameH = (t.heightRatio * height) * (0.86 + Math.sin(time * t.speed + t.offset) * 0.15 + Math.cos(time * 0.28 + i) * 0.08);
        const sway = Math.sin(time * t.swaySpeed + t.offset) * t.swayAmp;
        const tipX = baseX + sway;
        const tipY = Math.max(height * 0.1, height - flameH);

        // Helper to draw a sharp blade with pointed spear tip and optional side barb
        const drawSharpBlade = (scaleW, scaleH, colorStart, colorEnd) => {
          const w = baseW * scaleW;
          const h = flameH * scaleH;
          const curTipY = height - h;

          ctx.beginPath();
          ctx.moveTo(baseX - w * 0.5, height);

          // Left sharp edge with a slight sharp barb indentation
          const leftBarbX = baseX - w * 0.28 + sway * 0.35;
          const leftBarbY = height - h * 0.42;
          ctx.quadraticCurveTo(baseX - w * 0.38, height - h * 0.2, leftBarbX, leftBarbY);
          ctx.lineTo(leftBarbX + w * 0.08, leftBarbY + h * 0.06); // Sharp barb notch
          ctx.quadraticCurveTo(tipX - w * 0.08, curTipY + h * 0.22, tipX, curTipY); // Razor-sharp tip

          // Right sharp edge with sharp barb indentation
          const rightBarbX = baseX + w * 0.26 + sway * 0.35;
          const rightBarbY = height - h * 0.38;
          ctx.quadraticCurveTo(tipX + w * 0.08, curTipY + h * 0.22, rightBarbX - w * 0.07, rightBarbY + h * 0.06);
          ctx.lineTo(rightBarbX, rightBarbY); // Sharp right barb
          ctx.quadraticCurveTo(baseX + w * 0.38, height - h * 0.2, baseX + w * 0.5, height);

          ctx.closePath();

          const grad = ctx.createLinearGradient(baseX, height, tipX, curTipY);
          grad.addColorStop(0, colorStart);
          grad.addColorStop(0.7, colorEnd);
          grad.addColorStop(1, 'rgba(255, 60, 0, 0)');
          ctx.fillStyle = grad;
          ctx.fill();
        };

        // 1. Outer Sharp Amber/Crimson Blade (Light & airy)
        drawSharpBlade(1.0, 1.0, 'rgba(245, 95, 20, 0.42)', 'rgba(220, 45, 10, 0.28)');

        // 2. Middle Sharp Bright Golden Fire Blade
        drawSharpBlade(0.68, 0.82, 'rgba(255, 165, 30, 0.55)', 'rgba(250, 110, 15, 0.35)');

        // 3. Inner Razor-Sharp White-Hot Needle Spire
        drawSharpBlade(0.35, 0.55, 'rgba(255, 255, 230, 0.72)', 'rgba(255, 205, 50, 0.45)');
      });

      // D. Draw Sharp Rising Flame Shards (Pointed diamonds)
      for (let i = 0; i < shards.length; i++) {
        shards[i].update();
        shards[i].draw(ctx);
      }

      // E. Draw Sharp Needle Sparks (Pointed crosses)
      for (let i = 0; i < needleSparks.length; i++) {
        needleSparks[i].update();
        needleSparks[i].draw(ctx);
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
      {/* Procedural Canvas Light Sharp Fire Simulation */}
      <canvas ref={canvasRef} className="fire-moving-canvas" />

      {/* Layered CSS sharp jagged flame crests */}
      <div className="fire-flame-tongues">
        <div className="flame-tongue tongue-back" />
        <div className="flame-tongue tongue-mid" />
        <div className="flame-tongue tongue-front" />
      </div>

      {/* Light burning furnace glow at the bottom */}
      <div className="fire-bottom-furnace" />
    </div>
  );
}
