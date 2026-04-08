import { Link } from "react-router-dom";
import { CosmicCursor } from "../components/CosmicCursor";
import { logs } from "../../content/logs/logs";
import { useGlobalState } from "../../context/GlobalState";
import { Rocket, Star } from "lucide-react";
import { useState } from "react";

export function GalaxyHome() {
  const { activeStarId, setActiveStarId } = useGlobalState();
  const [butterflyActive] = useState(true);
  const activeStar = logs.find((p) => p.slug === activeStarId);
  
  return (
    <div className="relative w-screen h-screen bg-transparent overflow-hidden font-body text-white selection:bg-purple-900/50 pointer-events-none">
      {/* Cosmic Cursor */}
      <CosmicCursor active={butterflyActive} />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)] z-0 pointer-events-none" />

      {/* Header/Nav overlay */}
      <header className="absolute top-0 left-0 w-full p-6 z-20 flex flex-col gap-4 md:flex-row md:items-center md:justify-between pointer-events-auto">
        <div>
          <h1 className="font-hand text-2xl md:text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-white">
            Cindy's World
          </h1>
          <p className="font-note text-slate-400 text-lg md:text-xl">Explore Cindy's Documentation</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/journal"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/10 rounded-full hover:bg-white/20 transition-colors text-sm text-slate-300"
          >
            <Rocket size={16} />
            View Journal
          </Link>
        </div>
      </header>
    </div>
  );
}