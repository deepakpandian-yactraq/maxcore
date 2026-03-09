import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  dx: number;
  dy: number;
}

const CursorEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize points
    const initPoints = () => {
      pointsRef.current = Array.from({ length: 50 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
      }));
    };

    const drawPoint = (x: number, y: number, radius: number, color: string) => {
      if (!ctx) return;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    };

    const connectPoints = (p1: Point, p2: Point, distance: number) => {
      if (!ctx) return;
      const opacity = 1 - (distance / 200);
      if (opacity <= 0) return;

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = `rgba(127, 90, 240, ${opacity * 0.2})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw points
      pointsRef.current.forEach((point, i) => {
        // Move points
        point.x += point.dx;
        point.y += point.dy;

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.dx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.dy *= -1;

        // Attract to mouse
        const dx = mouseRef.current.x - point.x;
        const dy = mouseRef.current.y - point.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          point.dx += (dx / distance) * 0.1;
          point.dy += (dy / distance) * 0.1;
        }

        // Limit speed
        const speed = Math.sqrt(point.dx * point.dx + point.dy * point.dy);
        if (speed > 2) {
          point.dx = (point.dx / speed) * 2;
          point.dy = (point.dy / speed) * 2;
        }

        // Connect nearby points
        pointsRef.current.forEach((otherPoint, j) => {
          if (i === j) return;
          const d = Math.sqrt(
            Math.pow(point.x - otherPoint.x, 2) + 
            Math.pow(point.y - otherPoint.y, 2)
          );
          if (d < 200) {
            connectPoints(point, otherPoint, d);
          }
        });

        drawPoint(point.x, point.y, 1, 'rgba(127, 90, 240, 0.5)');
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    resizeCanvas();
    initPoints();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ opacity: 0.6 }}
    />
  );
};

export default CursorEffect;