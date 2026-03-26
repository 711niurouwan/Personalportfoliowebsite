import { useState, useMemo } from "react";
import { Link } from "react-router";
import { ButterflyCursor } from "../components/ButterflyCursor";
import { projectsData } from "../data/projects";
import { Rocket, X, Star, Wand2 } from "lucide-react";

export function GalaxyHome() {
  const [activeStarId, setActiveStarId] = useState<string | null>(null);
  const [butterflyActive, setButterflyActive] = useState(true);

  const activeStar = projectsData.find(p => p.id === activeStarId);

  // Generate static background stars
  const bgStars = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="relative w-screen h-screen bg-[#050510] overflow-hidden font-body text-white selection:bg-purple-900/50">
      <ButterflyCursor active={butterflyActive} />

      {/* Deep Space Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#050510] to-[#020205] z-0 pointer-events-none" />

      {/* Background twinkles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {bgStars.map(star => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Header/Nav overlay */}
      <header className="absolute top-0 left-0 w-full p-6 z-20 flex justify-between items-center">
        <div>
          <h1 className="font-hand text-2xl md:text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
            Cosmic Knowledge
          </h1>
          <p className="font-note text-slate-400 text-lg md:text-xl">Explore Cindy's Documentation</p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setButterflyActive(!butterflyActive)}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm text-sm"
          >
            <Wand2 size={16} className={butterflyActive ? "text-pink-400" : "text-slate-500"} />
            <span className="hidden sm:inline">Magic Cursor</span>
          </button>
          <Link to="/journal" className="px-5 py-2 bg-purple-600/20 text-purple-200 border border-purple-500/30 rounded-full font-bold hover:bg-purple-600/40 hover:scale-105 transition-all backdrop-blur-sm shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            View Sketchbook
          </Link>
        </div>
      </header>

      {/* Interactive Galaxy Map */}
      <div className="absolute inset-0 z-10" onClick={() => setActiveStarId(null)}>
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            style={{ left: `${project.x}%`, top: `${project.y}%` }}
            onClick={(e) => {
              e.stopPropagation();
              setActiveStarId(project.id);
            }}
          >
            {/* The Star */}
            <div className={`relative flex items-center justify-center transition-all duration-500 ${activeStarId === project.id ? 'scale-150' : 'group-hover:scale-125'}`}>
              <div className={`absolute inset-0 rounded-full ${project.color} blur-md opacity-60 group-hover:opacity-100 transition-opacity ${activeStarId === project.id ? 'opacity-100 blur-xl scale-150 animate-pulse' : ''}`} />
              <div className={`w-${project.size} h-${project.size} rounded-full bg-white relative z-10 shadow-[0_0_10px_rgba(255,255,255,1)]`} style={{ width: project.size * 4, height: project.size * 4 }} />
              
              {/* Star Label */}
              <span className={`absolute top-full mt-3 font-hand text-sm whitespace-nowrap transition-all duration-300 ${activeStarId === project.id ? 'text-white opacity-100' : 'text-slate-400 opacity-0 group-hover:opacity-100'}`}>
                {project.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Star Detail Modal/Card */}
      <div className={`absolute bottom-8 right-8 z-30 w-[90%] sm:w-[400px] transition-all duration-500 transform ${activeStar ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        {activeStar && (
          <div className="bg-[#0f0f1a]/80 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <button 
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              onClick={() => setActiveStarId(null)}
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-2 text-purple-400 text-sm font-bold mb-2">
              <Star size={16} /> {activeStar.type}
            </div>
            <h2 className="font-hand text-3xl font-bold text-white mb-2">{activeStar.title}</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">{activeStar.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {activeStar.tech.slice(0, 3).map(tech => (
                <span key={tech} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-slate-300">
                  {tech}
                </span>
              ))}
              {activeStar.tech.length > 3 && (
                <span className="text-xs px-2 py-1 text-slate-500">+{activeStar.tech.length - 3}</span>
              )}
            </div>

            <Link 
              to={activeStar.link}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-white flex items-center justify-center gap-2 hover:from-purple-500 hover:to-pink-500 transition-all hover:scale-[1.02] shadow-lg"
            >
              <Rocket size={18} /> Dive into Log
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
