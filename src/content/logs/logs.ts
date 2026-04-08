// Add this at the top of logs.ts
import matter from "gray-matter";

export interface ProjectLog {
  slug: string;
  link: string;
  title: string;
  date: string;
  status: string;
  type: string;
  role: string;
  tech: string[];
  image?: string;
  note?: string;
  notePos?: string;
  excerpt?: string;
  description: string;
  body: string;
}

const logFiles = import.meta.glob("./*.md", { eager: true, query: "?raw" }) as Record<string, { default: string }>;

function normalizeTech(value: unknown): string[] {
  if (Array.isArray(value)) return value.map(String);
  if (typeof value === "string") return [value];
  return [];
}

function slugFromPath(path: string) {
  return path.split("/").pop()?.replace(/\.md$/, "") ?? "";
}

export const logs: ProjectLog[] = Object.entries(logFiles).map(([path, mod]) => {
  const slug = slugFromPath(path);
  const { data, content } = matter(mod.default);
  const frontmatter = data as Record<string, unknown>;

  const excerpt = typeof frontmatter.excerpt === "string" ? frontmatter.excerpt : undefined;
  const description =
    typeof frontmatter.description === "string"
      ? frontmatter.description
      : excerpt ??
        content
          .trim()
          .split(/\n\n+/)[0]
          .replace(/#/g, "")
          .trim();

  return {
    slug,
    link: `/journal/${slug}`,
    title: String(frontmatter.title ?? slug),
    date: String(frontmatter.date ?? ""),
    status: String(frontmatter.status ?? "Draft"),
    type: String(frontmatter.type ?? "Log"),
    role: String(frontmatter.role ?? ""),
    tech: normalizeTech(frontmatter.tech),
    image: typeof frontmatter.image === "string" ? frontmatter.image : undefined,
    note: typeof frontmatter.note === "string" ? frontmatter.note : undefined,
    notePos: typeof frontmatter.notePos === "string" ? frontmatter.notePos : undefined,
    excerpt,
    description,
    body: content,
  };
});

export function getPublishedLogs() {
  return logs.filter((log) => log.status !== "Idea" && log.status !== "Planning");
}

export const getLogBySlug = (slug: string) => { // Add ": string" here
  return logs.find((p) => p.slug === slug); // Add ": any" here
};