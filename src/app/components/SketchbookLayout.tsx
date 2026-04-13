import { Outlet, Link } from "react-router-dom";
import { PenTool, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export function SketchbookLayout() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] dark:bg-[#121212] text-slate-800 dark:text-slate-300 font-body selection:bg-yellow-200 dark:selection:bg-yellow-900/30 flex flex-col relative overflow-hidden">
      {/* Light blue drafting grid */}
      <div className="fixed inset-0 bg-grid z-0 pointer-events-none" />
      
      {/* Top Bar - Header */}
      <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 dark:bg-[#121212]/90 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between relative">
          <Link to="/" className="flex items-center gap-3 group text-slate-800 hover:text-blue-600 hover:-translate-y-0.5 transition-transform">
            <Sparkles size={24} />
            <span className="font-hand font-bold text-xl hidden sm:block ">Back to Galaxy View</span>
          </Link>

          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            <PenTool size={20} strokeWidth={2.5} className="text-blue-600 dark:text-blue-400" />
            <span className="font-hand font-bold text-2xl tracking-wide block leading-tight text-slate-800 dark:text-slate-200">Cindy's Sketchbook</span>
          </div>

          <nav className="hidden sm:flex items-center gap-8 text-xl font-hand text-slate-600 dark:text-slate-400">
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-0.5 transition-transform">Projects</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-0.5 transition-transform">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10 w-full max-w-5xl mx-auto p-6 md:p-12">
        <Outlet />
      </main>

      {/* Footer */}
      <footer id="footer" className="border-t border-slate-200/80 dark:border-slate-800 bg-[#FDFBF7] dark:bg-[#121212] relative z-10 mt-12">
        <div className="max-w-5xl mx-auto p-6 md:p-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-hand text-2xl text-slate-800 dark:text-slate-200 mb-2 font-bold">
              Thanks for stopping by!
            </h3>
            <p className="font-note text-2xl text-slate-500 dark:text-slate-400">
              Connect with me. 
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-4">
              <a href="https://github.com/711niurouwan" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 hover:text-blue-600 hover:-translate-y-1 transition-all">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/xinyi-zhouu" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 hover:text-blue-600 hover:-translate-y-1 transition-all">
                <Linkedin size={24} />
              </a>
              <a href="mailto:xinyizhou.eng@gmail.com" className="p-2 text-slate-500 hover:text-blue-600 hover:-translate-y-1 transition-all">
                <Mail size={24} />
              </a>
            </div>
            <p className="font-note text-xl text-slate-500">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}