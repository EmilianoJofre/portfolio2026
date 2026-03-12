import { Boxes, Globe, Server } from 'lucide-react';
import { useEffect, useMemo, useRef } from 'react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const overlaySignals = [
  {
    title: 'Backend Systems',
    detail: 'Rails, APIs y dominio',
    icon: Server,
    position: 'top',
  },
  {
    title: 'Infra Cloud',
    detail: 'AWS, Docker y delivery',
    icon: Globe,
    position: 'right',
  },
  {
    title: 'Product Surfaces',
    detail: 'UX conectada a datos',
    icon: Boxes,
    position: 'bottom',
  },
];

function fibonacciSpherePoint(index, total) {
  const offset = 2 / total;
  const increment = Math.PI * (3 - Math.sqrt(5));
  const y = index * offset - 1 + offset / 2;
  const radius = Math.sqrt(1 - y * y);
  const phi = index * increment;

  return {
    x: Math.cos(phi) * radius,
    y,
    z: Math.sin(phi) * radius,
  };
}

function rotatePoint(point, angleY, angleX) {
  const cosY = Math.cos(angleY);
  const sinY = Math.sin(angleY);
  const cosX = Math.cos(angleX);
  const sinX = Math.sin(angleX);

  const x = point.x * cosY - point.z * sinY;
  const z = point.x * sinY + point.z * cosY;
  const y = point.y * cosX - z * sinX;
  const depth = point.y * sinX + z * cosX;

  return { x, y, z: depth };
}

function projectPoint(point, radius) {
  const perspective = 1 / (1.55 - point.z * 0.45);

  return {
    x: point.x * radius * perspective,
    y: point.y * radius * perspective,
    scale: perspective,
    alpha: Math.max(0.08, (point.z + 1) / 2),
  };
}

function drawPath(context, points, radius, strokeStyle, lineWidth) {
  context.beginPath();

  points.forEach((point, index) => {
    const projected = projectPoint(point, radius);

    if (index === 0) {
      context.moveTo(projected.x, projected.y);
      return;
    }

    context.lineTo(projected.x, projected.y);
  });

  context.strokeStyle = strokeStyle;
  context.lineWidth = lineWidth;
  context.stroke();
}

export default function HeroGlobe() {
  const canvasRef = useRef(null);
  const frameRef = useRef(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const points = useMemo(
    () => Array.from({ length: 140 }, (_, index) => fibonacciSpherePoint(index, 140)),
    [],
  );

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext('2d');

    if (!context) {
      return undefined;
    }

    const parent = canvas.parentElement;

    if (!parent) {
      return undefined;
    }

    const draw = (rotation) => {
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, width / 2, height / 2);
      context.clearRect(-width / 2, -height / 2, width, height);

      const radius = Math.min(width, height) * 0.315;
      const tilt = -0.28;

      const glow = context.createRadialGradient(0, 0, radius * 0.08, 0, 0, radius * 1.55);
      glow.addColorStop(0, 'rgba(8, 253, 216, 0.22)');
      glow.addColorStop(0.55, 'rgba(8, 253, 216, 0.08)');
      glow.addColorStop(1, 'rgba(8, 253, 216, 0)');

      context.beginPath();
      context.arc(0, 0, radius * 1.48, 0, Math.PI * 2);
      context.fillStyle = glow;
      context.fill();

      const shell = context.createRadialGradient(
        -radius * 0.28,
        -radius * 0.34,
        radius * 0.12,
        0,
        0,
        radius,
      );
      shell.addColorStop(0, 'rgba(94, 234, 212, 0.22)');
      shell.addColorStop(0.38, 'rgba(7, 33, 37, 0.92)');
      shell.addColorStop(1, 'rgba(4, 8, 11, 0.98)');

      context.beginPath();
      context.arc(0, 0, radius, 0, Math.PI * 2);
      context.fillStyle = shell;
      context.fill();

      context.save();
      context.beginPath();
      context.arc(0, 0, radius, 0, Math.PI * 2);
      context.clip();

      const longitudes = 7;
      const latitudes = [-60, -30, 0, 30, 60];

      for (let latIndex = 0; latIndex < latitudes.length; latIndex += 1) {
        const latitude = (latitudes[latIndex] * Math.PI) / 180;
        const path = [];

        for (let step = 0; step <= 72; step += 1) {
          const theta = (step / 72) * Math.PI * 2;
          const point = rotatePoint(
            {
              x: Math.cos(latitude) * Math.cos(theta),
              y: Math.sin(latitude),
              z: Math.cos(latitude) * Math.sin(theta),
            },
            rotation,
            tilt,
          );

          path.push(point);
        }

        drawPath(context, path, radius, 'rgba(94, 234, 212, 0.16)', 1);
      }

      for (let longitudeIndex = 0; longitudeIndex < longitudes; longitudeIndex += 1) {
        const longitude = (longitudeIndex / longitudes) * Math.PI * 2;
        const path = [];

        for (let step = 0; step <= 72; step += 1) {
          const latitude = ((step / 72) * Math.PI) - Math.PI / 2;
          const point = rotatePoint(
            {
              x: Math.cos(latitude) * Math.cos(longitude),
              y: Math.sin(latitude),
              z: Math.cos(latitude) * Math.sin(longitude),
            },
            rotation,
            tilt,
          );

          path.push(point);
        }

        drawPath(context, path, radius, 'rgba(8, 253, 216, 0.09)', 1);
      }

      const projectedPoints = points
        .map((point) => rotatePoint(point, rotation, tilt))
        .map((point) => ({ rotated: point, projected: projectPoint(point, radius) }))
        .sort((first, second) => first.rotated.z - second.rotated.z);

      const visible = projectedPoints.filter((point) => point.rotated.z > 0.02);

      for (let index = 0; index < visible.length; index += 10) {
        const current = visible[index];
        const next = visible[index + 7];

        if (!current || !next) {
          continue;
        }

        context.beginPath();
        context.moveTo(current.projected.x, current.projected.y);
        context.lineTo(next.projected.x, next.projected.y);
        context.strokeStyle = 'rgba(8, 253, 216, 0.14)';
        context.lineWidth = 1;
        context.stroke();
      }

      projectedPoints.forEach(({ rotated, projected }, index) => {
        const pointRadius = rotated.z > 0 ? 1.3 + projected.scale * 2.1 : 1.1;

        context.beginPath();
        context.arc(projected.x, projected.y, pointRadius, 0, Math.PI * 2);
        context.fillStyle =
          rotated.z > 0
            ? `rgba(94, 234, 212, ${0.2 + projected.alpha * 0.72})`
            : `rgba(8, 253, 216, ${0.08 + index * 0.00035})`;
        context.shadowBlur = rotated.z > 0 ? 12 : 0;
        context.shadowColor = 'rgba(8, 253, 216, 0.42)';
        context.fill();
      });

      context.restore();

      context.beginPath();
      context.arc(0, 0, radius, 0, Math.PI * 2);
      context.strokeStyle = 'rgba(94, 234, 212, 0.24)';
      context.lineWidth = 1.4;
      context.stroke();

      context.beginPath();
      context.arc(0, 0, radius * 1.12, 0, Math.PI * 2);
      context.strokeStyle = 'rgba(8, 253, 216, 0.09)';
      context.lineWidth = 1;
      context.setLineDash([8, 10]);
      context.stroke();
      context.setLineDash([]);

      context.beginPath();
      context.ellipse(radius * 0.12, radius * 0.92, radius * 0.7, radius * 0.12, 0, 0, Math.PI * 2);
      context.fillStyle = 'rgba(8, 253, 216, 0.08)';
      context.filter = 'blur(12px)';
      context.fill();
      context.filter = 'none';
      context.shadowBlur = 0;
    };

    let resizeFrame = 0;
    const renderFrame = (time) => {
      const rotation = time * 0.00022;
      draw(rotation);
      frameRef.current = window.requestAnimationFrame(renderFrame);
    };

    const handleResize = () => {
      window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(() => draw(0.8));
    };

    if (prefersReducedMotion) {
      draw(0.8);
    } else {
      frameRef.current = window.requestAnimationFrame(renderFrame);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.cancelAnimationFrame(frameRef.current);
      window.cancelAnimationFrame(resizeFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, [points, prefersReducedMotion]);

  return (
    <div className="hero-globe" aria-label="Globo digital con visualizacion de sistemas">
      <div className="hero-globe__frame">
        <div className="hero-globe__halo hero-globe__halo--outer" />
        <div className="hero-globe__halo hero-globe__halo--inner" />
        <canvas ref={canvasRef} className="hero-globe__canvas" aria-hidden="true" />

        {overlaySignals.map((signal) => {
          const Icon = signal.icon;

          return (
            <div
              key={signal.title}
              className={`hero-globe__badge hero-globe__badge--${signal.position}`}
            >
              <Icon size={16} strokeWidth={1.8} />
              <div>
                <strong>{signal.title}</strong>
                <span>{signal.detail}</span>
              </div>
            </div>
          );
        })}

        <div className="hero-globe__legend">
          <span>Angular</span>
          <span>Python</span>
          <span>Postgresql</span>
          <span>Integraciones</span>
          <span>Python</span>
          <span>Gcloud</span>
        </div>
      </div>
    </div>
  );
}
