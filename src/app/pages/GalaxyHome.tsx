import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";
import { useState, useEffect } from "react";
import { CosmicCursor } from "../components/CosmicCursor";
// @ts-ignore
import FuzzyText from '@/components/FuzzyText';

// Component ported and enhanced from https://codepen.io/JuanFuentes/pen/eYEeoyE
export function GalaxyHome() {
  const [butterflyActive] = useState(true);
  const [fontSize, setFontSize] = useState("22px");
  // Add this hook near the top of your component
const [isBirthday, setIsBirthday] = useState(false);

useEffect(() => {
  const now = new Date();
  const isToday = now.getMonth() === 3 && now.getDate() === 13; // April 13
  setIsBirthday(isToday);
}, []);

  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth < 640 ? "14px" : "22px");
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-screen h-screen bg-transparent overflow-hidden font-body text-white selection:bg-purple-900/50 pointer-events-none">
      
      {/* Cosmic Cursor */}
      <CosmicCursor active={butterflyActive} />

      {/* Left: Fuzzy Text */}
<div className="absolute top-6 left-6 w-[60vw] max-w-[400px] h-auto z-[30] pointer-events-auto">
  <div className="relative w-full h-[60px]">
    <FuzzyText fontSize={fontSize} baseIntensity={0.01} hoverIntensity={0.39} enableHover>Hi! My name is Cindy.</FuzzyText>
  </div>
  <div className="relative w-full h-[60px]">
    <FuzzyText fontSize={fontSize} baseIntensity={0.01} hoverIntensity={0.39} enableHover>Welcome to my website!</FuzzyText>
  </div>
</div>

      {/* Header/Nav overlay */}
      <header className="absolute top-0 left-0 w-full p-6 z-40 flex flex-row items-center pointer-events-auto">
        <div className="flex-1 flex justify-end">
          <Link
            to="/journal"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/10 rounded-full hover:bg-white/20 transition-colors text-sm text-slate-300"
          >
            <Rocket size={16} />
            View Journal
          </Link>
        </div>
      </header>
            {/* Birthday decoration */}
            {isBirthday && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none select-none flex gap-3 text-3xl animate-bounce">
          It's my Bday!🎂🎉🎈
        </div>
      )}
    </div>
  );
}