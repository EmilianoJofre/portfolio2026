import { useEffect, useRef } from 'react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const POINT_COUNT = 24;

function createPoints(width, height) {
  return Array.from({ length: POINT_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.18,
    vy: (Math.random() - 0.5) * 0.18,
    radius: Math.random() * 2.1 + 1.2,
    phase: Math.random() * Math.PI * 2,
  }));
}

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!canvas || !context) {
      return undefined;
    }

    const pointer = { x: 0.5, y: 0.35 };
    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let points = [];
    let time = 0;

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      points = createPoints(width, height);
    };

    const drawGradientFields = () => {
      const gradientA = context.createRadialGradient(
        width * 0.72,
        height * 0.16,
        40,
        width * 0.72,
        height * 0.16,
        width * 0.46,
      );

      gradientA.addColorStop(0, 'rgba(232, 201, 122, 0.16)');
      gradientA.addColorStop(0.55, 'rgba(128, 87, 16, 0.08)');
      gradientA.addColorStop(1, 'rgba(5, 5, 5, 0)');

      const gradientB = context.createRadialGradient(
        width * 0.2,
        height * 0.82,
        20,
        width * 0.2,
        height * 0.82,
        width * 0.38,
      );

      gradientB.addColorStop(0, 'rgba(173, 124, 37, 0.12)');
      gradientB.addColorStop(0.6, 'rgba(91, 62, 13, 0.06)');
      gradientB.addColorStop(1, 'rgba(5, 5, 5, 0)');

      context.fillStyle = gradientA;
      context.fillRect(0, 0, width, height);
      context.fillStyle = gradientB;
      context.fillRect(0, 0, width, height);
    };

    const drawScene = () => {
      context.clearRect(0, 0, width, height);
      drawGradientFields();

      context.save();
      context.globalCompositeOperation = 'screen';

      points.forEach((point, index) => {
        if (!reducedMotion) {
          point.x += point.vx + Math.cos(time * 0.00045 + point.phase) * 0.06;
          point.y += point.vy + Math.sin(time * 0.0003 + point.phase) * 0.04;
        }

        if (point.x < -40) point.x = width + 40;
        if (point.x > width + 40) point.x = -40;
        if (point.y < -40) point.y = height + 40;
        if (point.y > height + 40) point.y = -40;

        const parallaxX = (pointer.x - 0.5) * (index % 3 === 0 ? 32 : 18);
        const parallaxY = (pointer.y - 0.5) * (index % 2 === 0 ? 22 : 12);
        const x = point.x + parallaxX;
        const y = point.y + parallaxY;

        for (let innerIndex = index + 1; innerIndex < points.length; innerIndex += 1) {
          const innerPoint = points[innerIndex];
          const innerX = innerPoint.x + (pointer.x - 0.5) * 16;
          const innerY = innerPoint.y + (pointer.y - 0.5) * 10;
          const distance = Math.hypot(innerX - x, innerY - y);

          if (distance < 190) {
            context.strokeStyle = `rgba(232, 201, 122, ${0.12 - distance / 2200})`;
            context.lineWidth = 0.6;
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(innerX, innerY);
            context.stroke();
          }
        }

        const glow = context.createRadialGradient(x, y, 0, x, y, 28);
        glow.addColorStop(0, 'rgba(248, 214, 132, 0.95)');
        glow.addColorStop(0.35, 'rgba(233, 187, 80, 0.28)');
        glow.addColorStop(1, 'rgba(233, 187, 80, 0)');

        context.fillStyle = glow;
        context.beginPath();
        context.arc(x, y, 28, 0, Math.PI * 2);
        context.fill();

        context.fillStyle = 'rgba(255, 244, 224, 0.9)';
        context.beginPath();
        context.arc(x, y, point.radius, 0, Math.PI * 2);
        context.fill();
      });

      context.restore();
    };

    const animate = () => {
      time += 16;
      drawScene();
      animationFrame = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event) => {
      pointer.x = event.clientX / width;
      pointer.y = event.clientY / height;
    };

    setCanvasSize();
    drawScene();

    if (!reducedMotion) {
      animationFrame = window.requestAnimationFrame(animate);
    }

    window.addEventListener('resize', setCanvasSize);
    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, [reducedMotion]);

  return <canvas ref={canvasRef} className="background-canvas" aria-hidden="true" />;
}
