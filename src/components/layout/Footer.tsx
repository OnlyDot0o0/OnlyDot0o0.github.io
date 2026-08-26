import { Mail } from "lucide-react";
import { site } from "@/data/site";
import { navLinks } from "@/data/nav";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
        <div>
          <a href="#top" className="font-mono text-sm text-foreground">
            <span className="text-accent">&gt;</span> {site.shortName}
            <span className="text-accent">_</span>
          </a>
          <p className="mt-2 max-w-xs text-sm text-muted">{site.role}</p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:items-end">
          <div className="flex items-center gap-3">
            <a
              href={site.social.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={site.social.email}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
            >
              <Mail className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs text-muted-2 sm:justify-end">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-muted">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>

      <Container className="mt-8 border-t border-border pt-6">
        <p className="text-center text-xs text-muted-2 font-mono">
          © {year} {site.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}
