import React, { useEffect, useRef } from 'react';

const FishParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let fishes = [];
    const numFishes = 25; // Less fishes since they are bigger and detailed

    const imgBetta = new Image();
    imgBetta.src = `${import.meta.env.BASE_URL}images/betta.png`;
    const imgGoldfish = new Image();
    imgGoldfish.src = `${import.meta.env.BASE_URL}images/goldfish.png`;
    const fishImages = [imgBetta, imgGoldfish];

    const resizeCanvas = () => {
      // Get parent element's dimensions since this is absolute positioned
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // initial sizing

    class Fish {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.direction = Math.random() > 0.5 ? 1 : -1; // 1 = right, -1 = left
        if (initial) {
          this.x = Math.random() * canvas.width;
        } else {
          this.x = this.direction === 1 ? -50 : canvas.width + 50;
        }
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 60 + 40; // 40 to 100
        this.speed = (Math.random() * 1 + 0.5) * (this.size / 40) * this.direction;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.03 + 0.01;
        this.img = fishImages[Math.floor(Math.random() * fishImages.length)];
      }

      update() {
        this.x += this.speed;
        this.wobble += this.wobbleSpeed;
        this.y += Math.sin(this.wobble) * 0.5;

        if (this.direction === 1 && this.x > canvas.width + 50) {
          this.reset();
        } else if (this.direction === -1 && this.x < -50) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        
        // Flip fish depending on direction
        if (this.direction === -1) {
          ctx.scale(-1, 1);
        }

        if (this.img.complete) {
          ctx.globalAlpha = this.opacity;
          // The canvas CSS mix-blend-screen will make the black background of the images transparent against the page
          ctx.drawImage(this.img, -this.size / 2, -this.size / 2, this.size, this.size);
          ctx.globalAlpha = 1.0;
        }
        
        ctx.restore();
      }
    }

    for (let i = 0; i < numFishes; i++) {
      fishes.push(new Fish());
    }

    const animate = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      fishes.forEach((fish) => {
        fish.update();
        fish.draw();
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
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 mix-blend-screen"
    />
  );
};

export default FishParticles;
