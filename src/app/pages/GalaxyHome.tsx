import { Link } from "react-router-dom";
import { CosmicCursor } from "../components/CosmicCursor";
import { projectsData } from "../data/projects";
import { useGlobalState } from "../../context/GlobalState"; // Tune into the radio station
import { Rocket, X, Star, Wand2 } from "lucide-react";
import { useState } from "react";

export function GalaxyHome() {
  // 1. Get the shared state instead of local state
  const { activeStarId, setActiveStarId } = useGlobalState();
  const [butterflyActive, setButterflyActive] = useState(true);

  // Find the data for the star currently selected in the background
  const activeStar = projectsData.find((p) => p.id === activeStarId);

  return (
    /* 2. CHANGE: bg-transparent allows the App.tsx background to show through */
    <div className="relative w-screen h-screen bg-transparent overflow-hidden font-body text-white selection:bg-purple-900/50 pointer-events-none">
      <CosmicCursor active={butterflyActive} />

      {/* 3. Subtle vignette to make the edges darker, but keeping the center clear for stars */}
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
            className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/10 rounded-full hover:bg-white/20 transition-colors text-sm"
          >
            <Rocket size={16} />
            View Journal
          </Link>
        </div>
      </header>

      <main className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center">
        <div className="max-w-3xl">
          {activeStar ? (
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-3xl">
              <Star size={20} className="text-yellow-300" />
              <div className="text-left">
                <p className="text-sm text-slate-400">Current focus:</p>
                <p className="font-semibold text-white">{activeStar.title}</p>
              </div>
            </div>
          ) : null}
        </div>
      </main>

      {!activeStar && (
        <div className="absolute bottom-8 inset-x-0 flex justify-center z-20">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-3xl text-slate-300">
            <X size={20} className="text-pink-400" />
            Select a journal item to highlight it here.
          </div>
        </div>
      )}
    </div>
  );
}
