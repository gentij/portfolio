import { Link } from 'react-router-dom'
import { ArrowList } from '../components/ui/ArrowList'
import { CommandLine } from '../components/ui/CommandLine'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Tag } from '../components/ui/Tag'
import { TerminalCard } from '../components/ui/TerminalCard'
import { TerminalWindow } from '../components/ui/TerminalWindow'
import { site } from '../data/site'

const featuredProjects = site.projects.slice(0, 3)

export function HomePage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        label="entrypoint"
        title="Full stack engineering across products, platforms, and tools"
        description={site.person.summary}
        aside={
          <div className="flex flex-wrap gap-2">
            <Link
              to="/projects"
              className="inline-flex border border-line px-3 py-2 font-label text-[11px] uppercase tracking-[0.24em] text-muted transition-colors hover:border-line-bright hover:text-foreground"
            >
              open ./PROJECTS
            </Link>
            <a
              href={site.person.resume}
              download
              className="inline-flex border border-line px-3 py-2 font-label text-[11px] uppercase tracking-[0.24em] text-muted transition-colors hover:border-line-bright hover:text-foreground"
            >
              dl ./RESUME.pdf
            </a>
          </div>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <TerminalWindow command="whoami" className="min-w-0">
          <div className="space-y-5">
            <div className="border-l border-line pl-4">
              <p className="max-w-3xl text-base leading-7 text-copy md:text-lg">
                {site.person.intro}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Tag active>{site.person.yearsExperience}</Tag>
              <Tag>React</Tag>
              <Tag>TypeScript</Tag>
              <Tag>Rust</Tag>
              <Tag>Go</Tag>
            </div>

            <CommandLine trailing={<span className="crt-cursor" aria-hidden="true" />} />
          </div>
        </TerminalWindow>

        <TerminalWindow title="system profile">
          <div className="space-y-4 text-sm leading-7 text-copy">
            <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-[11px] uppercase tracking-[0.2em]">
              <span className="text-muted">role</span>
              <span className="text-foreground">{site.person.role}</span>
              <span className="text-muted">location</span>
              <span className="text-foreground">{site.person.location}</span>
              <span className="text-muted">focus</span>
              <span className="text-foreground">Frontend, backend, realtime, integrations, desktop</span>
              <span className="text-muted">contact</span>
              <a className="text-foreground hover:text-accent" href={`mailto:${site.person.email}`}>
                {site.person.email}
              </a>
            </div>
          </div>
        </TerminalWindow>
      </div>

      <TerminalWindow command="ls -la ./featured_projects">
        <div className="grid gap-4 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <TerminalCard
              key={project.slug}
              eyebrow={project.eyebrow}
              title={project.name}
              description={project.summary}
              footer={
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((stack) => (
                      <Tag key={stack}>{stack}</Tag>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 text-[11px] uppercase tracking-[0.2em]">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </TerminalWindow>

      <div className="grid gap-4 lg:grid-cols-2">
        <TerminalCard eyebrow="current focus" title="What I am building right now">
          <ArrowList items={site.person.currently} />
        </TerminalCard>

        <TerminalCard eyebrow="experience snapshot" title="Where the work comes from">
          <ul className="space-y-3 text-sm leading-7 text-copy">
            {site.experience.map((role) => (
              <li key={role.company} className="flex items-start justify-between gap-4 border-b border-line pb-3 last:border-b-0 last:pb-0">
                <div>
                  <p className="text-foreground">{role.company}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">{role.role}</p>
                </div>
                <span className="shrink-0 text-xs uppercase tracking-[0.18em] text-dim">{role.period}</span>
              </li>
            ))}
          </ul>
        </TerminalCard>
      </div>
    </div>
  )
}
