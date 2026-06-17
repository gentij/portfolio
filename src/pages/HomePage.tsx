import { Link } from 'react-router-dom'
import { ArrowList } from '../components/ui/ArrowList'
import { CommandLine } from '../components/ui/CommandLine'
import { ProjectMedia } from '../components/projects/ProjectMedia'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Tag } from '../components/ui/Tag'
import { TerminalWindow } from '../components/ui/TerminalWindow'
import { site } from '../data/site'

const featuredProjects = site.projects.slice(0, 3)
const homeFeaturedProject = site.projects[0]

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

      <div className="grid gap-6 xl:grid-cols-[0.86fr_1.14fr] xl:items-start">
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

            <div className="grid gap-3 border-t border-line pt-4 text-[11px] uppercase tracking-[0.2em] text-dim sm:grid-cols-3">
              <div>
                <p className="text-muted">role</p>
                <p className="mt-2 text-foreground">{site.person.role}</p>
              </div>
              <div>
                <p className="text-muted">location</p>
                <p className="mt-2 text-foreground">{site.person.location}</p>
              </div>
              <div>
                <p className="text-muted">focus</p>
                <p className="mt-2 text-foreground">frontend backend desktop</p>
              </div>
            </div>

            <CommandLine trailing={<span className="crt-cursor" aria-hidden="true" />} />
          </div>
        </TerminalWindow>

        <ProjectMedia project={homeFeaturedProject} autoplay />
      </div>

      <TerminalWindow command="ls -la ./featured_projects">
        <div className="space-y-4">
          {featuredProjects.map((project) => (
            <div
              key={project.slug}
              className="grid gap-4 border-b border-line pb-4 last:border-b-0 last:pb-0 md:grid-cols-[minmax(0,1fr)_auto] md:items-start"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-xl text-foreground crt-glow">{project.name}</h3>
                  <span className="font-label text-[10px] uppercase tracking-[0.22em] text-muted">
                    {project.eyebrow}
                  </span>
                </div>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-copy">{project.summary}</p>
              </div>

              <div className="flex flex-wrap gap-2 md:justify-end">
                {project.links.slice(0, 2).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-line px-3 py-2 font-label text-[10px] uppercase tracking-[0.22em] text-muted transition-colors hover:border-line-bright hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </TerminalWindow>

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
        <TerminalWindow title="current focus">
          <ArrowList items={site.person.currently} />
        </TerminalWindow>

        <div className="space-y-3">
          <p className="font-label text-[10px] uppercase tracking-[0.26em] text-muted">experience snapshot</p>
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
        </div>
      </div>
    </div>
  )
}
