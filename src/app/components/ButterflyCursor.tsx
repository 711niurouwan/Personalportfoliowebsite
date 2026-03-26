import { useEffect, useRef } from "react";

export function ButterflyCursor({ active }: { active: boolean }) {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return;

    let particles: HTMLDivElement[] = [];

    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }

      // Randomly spawn sparkles
      if (Math.random() > 0.6) {
        const particle = document.createElement("div");
        particle.innerText = ["✨", "⭐️", "🌟"][Math.floor(Math.random() * 3)];
        particle.className = "fixed pointer-events-none z-[100] animate-float-away opacity-80 text-sm md:text-base";
        particle.style.left = `${e.clientX + (Math.random() * 20 - 10)}px`;
        particle.style.top = `${e.clientY + (Math.random() * 20 - 10)}px`;
        
        // Random drift direction
        particle.style.setProperty('--tx', `${Math.random() * 60 - 30}px`);
        particle.style.setProperty('--ty', `${Math.random() * 60 - 30}px`);
        
        document.body.appendChild(particle);
        particles.push(particle);

        setTimeout(() => {
          if (document.body.contains(particle)) {
            document.body.removeChild(particle);
          }
          particles = particles.filter(p => p !== particle);
        }, 1000);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      particles.forEach(p => {
        if (document.body.contains(p)) document.body.removeChild(p);
      });
    };
  }, [active]);

  if (!active) return null;

  return (
    <>
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[101] -translate-x-1/2 -translate-y-1/2 text-2xl md:text-3xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        style={{ transition: "transform 0.1s ease-out" }}
      >
        🦋
      </div>
      <style>{`
        @keyframes float-away {
          0% { opacity: 1; transform: scale(1) translate(0, 0); }
          100% { opacity: 0; transform: scale(0.3) translate(var(--tx), var(--ty)); }
        }
        .animate-float-away {
          animation: float-away 1s ease-out forwards;
        }
        body {
          cursor: none;
        }
        a, button {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
