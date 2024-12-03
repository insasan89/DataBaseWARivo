import { useEffect, useRef } from "react";

const InteractiveBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Canvas setup
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gridSpacing = 40;
    const curveIntensity = 50;
    let mouse = { x: 0, y: 0 };

    // Track mouse movement
    window.addEventListener("mousemove", (e) => {
      mouse = { x: e.clientX, y: e.clientY };
    });

    // Resize canvas dynamically
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Main draw loop
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let x = 0; x < canvas.width; x += gridSpacing) {
        for (let y = 0; y < canvas.height; y += gridSpacing) {
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const distortion = Math.exp(-distance / 300) * curveIntensity;

          const nx = x + (dx / distance) * distortion || 0;
          const ny = y + (dy / distance) * distortion || 0;

          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(nx, ny);
          ctx.strokeStyle = "black";
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
      requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener("mousemove", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default InteractiveBackground;
