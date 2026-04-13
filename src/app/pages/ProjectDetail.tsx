import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Wrench, FileCode2, Sparkles } from "lucide-react";
import { getLogBySlug } from "../../content/logs/logs";
import remarkBreaks from 'remark-breaks';

const markdownComponents = {
  h2: ({ children }: any) => (
    <div className="flex items-center gap-3 mt-10 mb-4">
      <div className="w-3 h-3 rounded-full bg-blue-500 shrink-0" />
      <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 font-hand">
        {children}
      </h2>
    </div>
  ),
  a: ({ node, ...props }: any) => (
    <a {...props} className="text-blue-600 dark:text-blue-300 underline decoration-dotted hover:text-blue-800 dark:hover:text-blue-100" />
  ),
  ol: ({ children }: any) => (
    <ol className="list-decimal ml-10 space-y-1 text-slate-600 dark:text-slate-400">
      {children}
    </ol>
  ),
  li: ({ children }: any) => (
    <li className="leading-relaxed">
      {children}
    </li>
  ),
  img: ({ src, alt }: any) => (
    <div className="my-4">
      <img
        src={src}
        alt={alt}
        className="rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm max-w-full"
      />
      {alt && (
        <p className="text-xs text-slate-400 mt-1 italic">{alt}</p>
      )}
    </div>
  ),
  hr: () => (
    <div className="ml-6 my-6 border-t border-dashed border-slate-200 dark:border-slate-700" />
  ),
  code: ({ node, inline, className, children, ...props }: any) => {
    if (inline) {
      return (
        <code className="rounded bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 text-sm font-mono" {...props}>
          {children}
        </code>
      );
    }

    return (
      <pre className="overflow-x-auto rounded-3xl bg-[#0f172a] p-4 text-sm text-slate-100">
        <code className={className} {...props}>
          {children}
        </code>
      </pre>
    );
  },
  blockquote: ({ node, ...props }: any) => (
    <blockquote className="border-l-4 border-blue-600 pl-5 italic text-slate-600 dark:text-slate-300" {...props} />
  ),
  table: ({ node, ...props }: any) => (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left border-collapse" {...props} />
    </div>
  ),
  th: ({ node, ...props }: any) => (
    <th className="border-b border-slate-200 dark:border-slate-700 px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200" {...props} />
  ),
  td: ({ node, ...props }: any) => (
    <td className="border-b border-slate-200 dark:border-slate-700 px-4 py-3 text-sm text-slate-600 dark:text-slate-300" {...props} />
  ),
};

export function ProjectDetail() {
  const { projectId } = useParams();
  const project = getLogBySlug(projectId!);

  if (!project) {
    return (
      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center space-y-6 px-6">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#141414] p-10 shadow-xl">
          <Sparkles size={48} className="mx-auto text-blue-600 dark:text-blue-400" />
          <h1 className="text-4xl font-hand font-bold text-slate-900 dark:text-slate-100">Log Not Found</h1>
          <p className="max-w-xl text-slate-600 dark:text-slate-400 mt-4">The page you’re looking for doesn’t exist yet, or the link is broken. Return to the journal list to explore other sketches.</p>
          <Link to="/journal" className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-blue-600 transition-all">
            <ArrowLeft size={18} /> Back to Journal
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-200">
            {project.type}
          </span>
          <h1 className="text-5xl font-hand font-bold text-slate-900 dark:text-slate-100">{project.title}</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">{project.description}</p>
        </div>

        <Link to="/journal" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-300 font-hand text-lg hover:text-blue-800 dark:hover:text-blue-100 transition-colors">
          <ArrowLeft size={20} /> Back to Journal
        </Link>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.45fr_1fr]">
        <div className="space-y-8">
          <div className="grid gap-6 md:grid-cols-1">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#141414] p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">Role</p>
              <p className="mt-4 text-lg font-bold text-slate-900 dark:text-slate-100">{project.role}</p>
            </div>
          </div>

          {/* --- FIXED SECTION START --- */}
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#141414] p-8 shadow-sm">
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
              <Wrench size={20} className="text-blue-600" />
              <span className="font-hand text-xl">Tools & technologies</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {project.tech?.map((tech: string) => (
                <span key={tech} className="rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#0f172a] px-4 py-2 text-sm text-slate-700 dark:text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {/* --- FIXED SECTION END --- */}

          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#141414] p-8 shadow-sm">
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
              <FileCode2 size={20} className="text-blue-600" />
              <span className="font-hand text-xl">Project Log</span>
            </div>
            <div className="mt-6 prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 whitespace-pre-line">
              <ReactMarkdown components={markdownComponents} remarkPlugins={[remarkGfm, remarkBreaks]}>
                {(project as any).body || project.description}
                </ReactMarkdown>
                </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-[#f8fafc] dark:bg-[#111827] overflow-hidden shadow-lg">
            {project.image ? (
              <img src={project.image} alt={project.title} className="w-full object-cover aspect-[4/3]" />
            ) : (
              <div className="flex h-full min-h-[320px] items-center justify-center bg-slate-100 dark:bg-[#0f172a] text-slate-500 dark:text-slate-400 p-10">
                <span className="font-hand text-2xl">Visualization coming soon</span>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}