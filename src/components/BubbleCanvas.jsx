import React, { useEffect, useRef } from 'react';

const BubbleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let bubbles = [];
    const numBubbles = 50;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Bubble {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = Math.random() * 11 + 3; // 3px to 14px
        this.speed = (Math.random() * 1 + 0.5) * (this.size / 10);
        this.opacity = Math.random() * 0.3 + 0.1; // 0.1 to 0.4
        this.drift = Math.random() * 2 - 1;
        this.wobble = 0;
        this.wobbleSpeed = Math.random() * 0.05 + 0.01;
      }

      update() {
        this.y -= this.speed;
        this.wobble += this.wobbleSpeed;
        this.x += Math.sin(this.wobble) * 1 + this.drift * 0.5;

        if (this.y < -20) {
          this.reset();
        }
      }

      draw() {
        // Hide bubbles in the Hero section
        const heroBottom = window.innerHeight - window.scrollY;
        if (this.y < heroBottom) {
          return;
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
        ctx.closePath();
      }
    }

    for (let i = 0; i < numBubbles; i++) {
      bubbles.push(new Bubble());
    }

    const animate = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach((bubble) => {
        bubble.update();
        bubble.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 mix-blend-screen"
    />
  );
};

export default BubbleCanvas;
