import { useEffect, useState } from "react";

function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      // update instantly (no lag)
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Main Dot */}
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-red-500 rounded-full pointer-events-none z-50"
        style={{
          transform: `translate(${pos.x - 6}px, ${pos.y - 6}px)`,
          transition: "transform 0.05s linear", // ultra-fast response
        }}
      />
      {/* Outer Ring */}
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-red-500/40 rounded-full pointer-events-none z-50"
        style={{
          transform: `translate(${pos.x - 16}px, ${pos.y - 16}px)`,
          transition: "transform 0.12s ease-out", // slight smooth trailing effect
        }}
      />
    </>
  );
}

export default CustomCursor;
