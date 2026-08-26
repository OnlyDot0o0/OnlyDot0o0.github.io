import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { Card } from "./Card";
import { Tag } from "./Tag";
import { GithubIcon } from "./icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
            {project.category}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-foreground">
            {project.name}
          </h3>
          <p className="mt-1 text-xs text-muted-2">{project.period}</p>
        </div>
      </div>

      <p className="mt-3 font-medium text-foreground/90">{project.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-5 grid grid-cols-1 gap-4 border-t border-border pt-5 sm:grid-cols-2">
        <div>
          <p className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-2">
            Problem
          </p>
          <p className="text-sm leading-relaxed text-muted">{project.problem}</p>
        </div>
        <div>
          <p className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-2">
            My contribution
          </p>
          <p className="text-sm leading-relaxed text-muted">
            {project.contribution}
          </p>
        </div>
      </div>

      {project.metrics && (
        <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-5">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <p className="text-lg font-semibold text-accent sm:text-xl">
                {m.value}
              </p>
              <p className="mt-0.5 text-xs leading-snug text-muted-2">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      {(project.githubUrl || project.demoUrl) && (
        <div className="mt-6 flex gap-3 border-t border-border pt-5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" />
              Code
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              <ExternalLink className="h-4 w-4" strokeWidth={1.75} />
              Live
            </a>
          )}
        </div>
      )}
    </Card>
  );
}
