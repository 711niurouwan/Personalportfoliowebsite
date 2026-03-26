import { ArrowRight, ChevronRight, DraftingCompass, Pencil, Wrench, FileCode2, Paperclip, Lightbulb } from "lucide-react";
import notebookImg from "figma:asset/dfd2d67f9b06a19b8b8cb545916954b7e4f6d5dd.png";
import lightGearImg from "figma:asset/e5fe909cafee1d94a6fc1855f3c8369e29398259.png";
import { projectsData } from "../data/projects";

export function Projects() {
  // Only display the ones that actually have detailed sketches/content for the journal
  const displayedProjects = projectsData.filter(p => p.status !== "Idea" && p.status !== "Planning");

  return (
    <div className="space-y-32 pb-12">
      {/* HERO SECTION */}
      <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[60vh] py-12 relative">
        {/* Decorative handwritten note */}
        <div className="absolute top-0 right-12 font-note text-3xl text-blue-600 rotate-6 hidden lg:block opacity-80">
          Draft #1
        </div>

        <div className="lg:col-span-7 space-y-8 relative">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-200/50 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200 rounded-md font-note text-xl mb-6 shadow-sm border border-yellow-300/50 -rotate-1">
              <Pencil size={18} /> Jotting down ideas...
            </div>
            <h1 className="font-hand text-5xl md:text-7xl font-bold tracking-tight text-slate-800 dark:text-slate-100 mb-6 leading-tight">
              My Engineering <br/>
              <span className="text-blue-600 dark:text-blue-400 border-b-4 border-blue-600/30 pb-2">Sketchbook.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-body leading-relaxed">
              Documenting the architecture, the bugs, and the breakthroughs. I build scalable web systems and dive deep into technical problem-solving. Less screen, more paper.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 font-hand text-xl">
            <a href="#projects" className="bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900 px-6 py-3 rounded-md flex items-center gap-2 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all shadow-md hover:-translate-y-1 hover:shadow-lg">
              Flip Pages <ArrowRight size={20} />
            </a>
            <a href="#contact" className="bg-white dark:bg-[#1e1e1e] border-2 border-slate-300 dark:border-slate-700 px-6 py-3 rounded-md flex items-center gap-2 hover:border-slate-400 transition-all shadow-sm hover:-translate-y-1">
              Say Hello <DraftingCompass size={20} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 mt-4 border-t border-slate-300 dark:border-slate-700/50">
            <div className="flex flex-col gap-2">
              <span className="font-hand font-bold text-slate-500">Frontend</span>
              <span className="flex items-center gap-2 font-body text-sm text-slate-700 dark:text-slate-300"><FileCode2 size={16} className="text-blue-500"/> React/TS</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-hand font-bold text-slate-500">Backend</span>
              <span className="flex items-center gap-2 font-body text-sm text-slate-700 dark:text-slate-300"><Wrench size={16} className="text-blue-500"/> Go/Node</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div className="relative group rotate-2 hover:rotate-0 transition-transform duration-500 w-full max-w-sm">
            {/* Fake tape */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/60 dark:bg-white/10 backdrop-blur-sm border border-slate-200/50 shadow-sm -rotate-3 z-20" />
            
            <div className="bg-white dark:bg-[#1a1a1a] p-3 pb-8 rounded-sm shadow-xl border border-slate-200 dark:border-slate-800 relative z-10">
              <img 
                src={notebookImg} 
                alt="Stack of technical journals" 
                className="w-full aspect-[4/5] object-cover rounded-sm filter contrast-110 sepia-[.1] dark:sepia-0"
              />
              <div className="absolute bottom-2 left-0 right-0 text-center">
                 <span className="font-note text-2xl text-slate-600 dark:text-slate-400">Vol. VII - 2026</span>
              </div>
            </div>

            {/* Background decoration cards */}
            <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/20 shadow-md border border-blue-200 dark:border-blue-800/50 rounded-sm -z-10 translate-x-4 -translate-y-4 -rotate-3" />
            <div className="absolute inset-0 bg-yellow-50 dark:bg-yellow-900/10 shadow-md border border-yellow-200 dark:border-yellow-800/30 rounded-sm -z-20 -translate-x-4 translate-y-4 rotate-6" />
          </div>
        </div>
      </section>

      {/* PROJECTS / LOGS SECTION */}
      <section id="projects" className="space-y-12 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-slate-300 dark:border-slate-700/50 pb-6">
          <div>
            <h2 className="font-hand text-4xl font-bold flex items-center gap-3 text-slate-800 dark:text-slate-100">
              <Lightbulb size={32} className="text-yellow-500" /> Recent Sketches & Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 font-body max-w-xl text-lg">
              Chronological documentation of active builds, research notes, and architectural decisions.
            </p>
          </div>
          <div className="font-note text-2xl text-slate-500 flex items-center gap-2">
             <Paperclip size={20} /> {displayedProjects.length} files attached
          </div>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {displayedProjects.map((project, idx) => (
            <article id={project.id.toLowerCase().replace(/[^a-z0-9]+/g, '-')} key={project.id} className="relative group grid grid-cols-1 md:grid-cols-12 gap-8 bg-white dark:bg-[#1e1e1e] border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 scroll-mt-24">
              
              {/* Handwritten Note decoration */}
              {project.note && (
                <div className={`absolute ${project.notePos} font-note text-2xl text-red-500 dark:text-red-400 max-w-xs z-20 pointer-events-none hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  {project.note}
                </div>
              )}

              {/* Project Meta */}
              <div className="col-span-1 md:col-span-3 space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-hand text-sm font-bold border border-blue-200 dark:border-blue-800">
                  {project.type}
                </div>
                <div className="font-hand text-3xl font-bold text-slate-800 dark:text-white">
                  {project.date}
                </div>
                <div className="font-body text-sm text-slate-600 dark:text-slate-400">
                  <span className="font-bold">State:</span> {project.status}
                </div>
                <div className="font-body text-sm text-slate-600 dark:text-slate-400">
                  <span className="font-bold">Role:</span> {project.role}
                </div>
              </div>

              {/* Project Content */}
              <div className="col-span-1 md:col-span-9 flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1 space-y-6">
                  <h3 className="font-hand text-3xl font-bold text-slate-800 dark:text-slate-100">
                    {project.title}
                  </h3>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-body">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <span className="font-hand font-bold text-slate-500 flex items-center gap-2">
                       <Wrench size={16} /> Tools Used
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span key={tech} className="text-sm border border-slate-300 dark:border-slate-700 rounded-md px-3 py-1 font-body bg-slate-50 dark:bg-[#121212] text-slate-700 dark:text-slate-300 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a href="#" className="inline-flex items-center gap-2 font-hand text-xl text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mt-4 group/link transition-colors">
                    View Complete Log <ChevronRight size={20} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Project Image/Visualizer */}
                {project.image ? (
                  <div className="w-full md:w-64 shrink-0 relative rotate-2 group-hover:rotate-0 transition-transform duration-500">
                    {/* Tape */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-white/50 backdrop-blur-md border border-slate-200/50 shadow-sm rotate-2 z-20" />
                    
                    <div className="bg-white dark:bg-[#1a1a1a] p-2 rounded-sm shadow-md border border-slate-200 dark:border-slate-800">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className={`w-full h-auto aspect-square object-cover rounded-sm ${project.image === lightGearImg ? 'contrast-125 sepia-[.1]' : ''}`}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-full md:w-64 shrink-0 bg-slate-50 dark:bg-[#1a1a1a] border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl aspect-square flex flex-col items-center justify-center text-slate-400 p-4 text-center space-y-3 rotate-1">
                    <DraftingCompass size={32} />
                    <span className="font-hand text-xl">Sketch Pending...</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
      
      {/* QUICK SKETCH BANNER */}
      <section id="contact" className="bg-blue-600 dark:bg-blue-900 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-lg">
        {/* Abstract gear watermark */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url(${lightGearImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <h2 className="font-hand text-4xl font-bold">Let's build together.</h2>
            <p className="max-w-md text-blue-100 font-body text-lg">
              Always looking for complex systems to architect and build. Drop a line if you need engineering horsepower.
            </p>
          </div>
          <a href="mailto:hello@example.com" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-hand text-2xl font-bold hover:bg-yellow-100 hover:text-blue-800 transition-colors shadow-md hover:-translate-y-1 hover:shadow-xl flex items-center gap-3">
            Say Hello <Pencil size={24} />
          </a>
        </div>
        
        {/* Hand drawn arrow pointing to button */}
        <div className="absolute bottom-4 right-[15%] font-note text-3xl text-yellow-300 -rotate-12 hidden lg:block">
           Reach out!
        </div>
      </section>

    </div>
  );
}
