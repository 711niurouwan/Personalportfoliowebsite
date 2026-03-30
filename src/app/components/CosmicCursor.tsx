import { useEffect, useRef } from "react";

export function CosmicCursor({ active }: { active: boolean }) {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return;

    const onMouseMove = (e: MouseEvent) => {
      // Move the main crosshair
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }

      // Spawn "Dust" particles (Abstract circles instead of emojis)
      if (Math.random() > 0.8) {
        const particle = document.createElement("div");
        
        // Randomly pick a color from your cosmic theme
        const colors = ['#a855f7', '#ec4899', '#ffffff'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.className = "fixed pointer-events-none z-[100] rounded-full blur-[1px]";
        particle.style.width = `${Math.random() * 4 + 1}px`;
        particle.style.height = particle.style.width;
        particle.style.background = color;
        particle.style.boxShadow = `0 0 8px ${color}`;
        particle.style.left = `${e.clientX}px`;
        particle.style.top = `${e.clientY}px`;
        
        // Random drift direction for the animation
        particle.style.setProperty('--tx', `${(Math.random() - 0.5) * 80}px`);
        particle.style.setProperty('--ty', `${(Math.random() - 0.5) * 80}px`);
        particle.style.animation = "cosmic-drift 1.2s ease-out forwards";
        
        document.body.appendChild(particle);

        setTimeout(() => {
          if (document.body.contains(particle)) {
            document.body.removeChild(particle);
          }
        }, 1200);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [active]);

  if (!active) return null;

  return (
    <>
      {/* The Main Crosshair */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[101] flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{ transition: "transform 0.05s linear" }}
      >
        {/* Horizontal Line */}
        <div className="absolute w-6 h-[1px] bg-white/40" />
        {/* Vertical Line */}
        <div className="absolute h-6 w-[1px] bg-white/40" />
        {/* Center Point */}
        <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_8px_white]" />
      </div>

      <style>{`
        @keyframes cosmic-drift {
          0% { opacity: 0.8; transform: translate(0, 0) scale(1); }
          100% { opacity: 0; transform: translate(var(--tx), var(--ty)) scale(0); }
        }
        body {
          cursor: none !important;
        }
        a, button {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}