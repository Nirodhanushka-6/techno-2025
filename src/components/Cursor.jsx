import { useEffect, useState } from "react";

function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect if device is touch-enabled
    const checkTouch = () => {
      if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
        setIsTouch(true);
      }
    };
    checkTouch();
  }, []);

  useEffect(() => {
    if (isTouch) return; // Do not attach cursor events on touch devices

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isTouch]);

  if (isTouch) return null; // Don't render custom cursor on touch devices

  return (
    <>
      {/* Main Dot */}
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-red-500 rounded-full pointer-events-none z-50"
        style={{
          transform: `translate(${pos.x - 6}px, ${pos.y - 6}px)`,
          transition: "transform 0.05s linear",
        }}
      />
      {/* Outer Ring */}
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-red-500/40 rounded-full pointer-events-none z-50"
        style={{
          transform: `translate(${pos.x - 16}px, ${pos.y - 16}px)`,
          transition: "transform 0.12s ease-out",
        }}
      />
    </>
  );
}

export default CustomCursor;
