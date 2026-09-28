import { Link } from 'react-router-dom'
import { ArrowList } from '../components/ui/ArrowList'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Tag } from '../components/ui/Tag'
import { TerminalCard } from '../components/ui/TerminalCard'
import { TerminalWindow } from '../components/ui/TerminalWindow'
import { site } from '../data/site'

const featuredProjects = site.projects.slice(0, 3)

export function HomePage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 border-b border-line pb-8 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] xl:items-start">
        <div>
          <p className="font-label text-[11px] uppercase tracking-[0.28em] text-muted">
            full stack engineer / product delivery
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold uppercase leading-[0.98] tracking-[-0.05em] text-accent md:text-6xl">
            Reliable products, automation platforms, and AI-enabled workflows.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-copy md:text-lg">
            {site.person.intro}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={site.person.resume}
              download
              className="inline-flex border border-accent bg-accent px-4 py-3 font-label text-[11px] uppercase tracking-[0.22em] text-background transition-colors hover:bg-foreground"
            >
              download resume
            </a>
            <a
              href={`mailto:${site.person.email}`}
              className="inline-flex border border-line px-4 py-3 font-label text-[11px] uppercase tracking-[0.22em] text-muted transition-colors hover:border-line-bright hover:text-foreground"
            >
              email me
            </a>
            <a
              href={site.person.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex border border-line px-4 py-3 font-label text-[11px] uppercase tracking-[0.22em] text-muted transition-colors hover:border-line-bright hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <Tag active>{site.person.yearsExperience}</Tag>
            <Tag>automation</Tag>
            <Tag>AI-enabled workflows</Tag>
            <Tag>TypeScript + Rust</Tag>
          </div>
        </div>

        <TerminalWindow command="whoami" title="ownership profile" className="min-w-0">
          <div className="space-y-5">
            <div className="border-l border-line pl-4">
              <p className="font-label text-[10px] uppercase tracking-[0.24em] text-muted">what I own</p>
              <p className="mt-3 text-sm leading-7 text-copy">
                Product work from early requirements and system design through implementation, integration, review, and production delivery.
              </p>
            </div>
            <ArrowList items={site.person.focus} />
            <div className="grid gap-3 border-t border-line pt-4 text-[11px] uppercase tracking-[0.2em] text-dim sm:grid-cols-2">
              <div>
                <p className="text-muted">role</p>
                <p className="mt-2 text-foreground">{site.person.role}</p>
              </div>
              <div>
                <p className="text-muted">location</p>
                <p className="mt-2 text-foreground">{site.person.location}</p>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </section>

      <section className="space-y-5">
        <SectionHeading
          label="experience"
          title="Ownership that ships"
          description="A compact view of the responsibilities, systems, and team contribution behind the work."
          aside={
            <Link
              to="/resume"
              className="inline-flex border border-line px-3 py-2 font-label text-[11px] uppercase tracking-[0.24em] text-muted transition-colors hover:border-line-bright hover:text-foreground"
            >
              view full experience
            </Link>
          }
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {site.experience.map((role) => (
            <TerminalCard
              key={role.company}
              eyebrow={`${role.company} // ${role.location}`}
              title={role.role}
              description={role.period}
              descriptionClassName="flex-none"
            >
              <ArrowList items={role.bullets.slice(0, 2)} />
            </TerminalCard>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeading
          label="selected engineering work"
          title="Technical proof"
          description="A few independent systems that show range across automation, AI-enabled tooling, integrations, and lower-level product work."
          aside={
            <Link
              to="/projects"
              className="inline-flex border border-line px-3 py-2 font-label text-[11px] uppercase tracking-[0.24em] text-muted transition-colors hover:border-line-bright hover:text-foreground"
            >
              view selected work
            </Link>
          }
        />

        <div className="grid gap-4 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <TerminalCard key={project.slug} eyebrow={project.eyebrow} title={project.name} description={project.summary}>
              <p className="text-sm leading-7 text-dim">{project.detail}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.links.slice(0, 2).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-line px-3 py-2 font-label text-[10px] uppercase tracking-[0.2em] text-muted transition-colors hover:border-line-bright hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </TerminalCard>
          ))}
        </div>
      </section>

      <section className="crt-panel grid gap-6 px-5 py-6 md:grid-cols-[1fr_auto] md:items-center md:px-7 md:py-8">
        <div>
          <p className="font-label text-[10px] uppercase tracking-[0.28em] text-muted">next step</p>
          <h2 className="mt-3 font-display text-2xl uppercase tracking-[-0.03em] text-foreground md:text-3xl">
            Let&apos;s talk about the work.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-copy">
            Open to product engineering roles where ownership, automation, integrations, and practical systems work matter.
          </p>
        </div>
        <a
          href={`mailto:${site.person.email}`}
          className="inline-flex justify-center border border-accent bg-accent px-4 py-3 font-label text-[11px] uppercase tracking-[0.22em] text-background transition-colors hover:bg-foreground"
        >
          {site.person.email}
        </a>
      </section>
    </div>
  )
}
