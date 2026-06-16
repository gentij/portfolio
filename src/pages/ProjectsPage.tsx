import { ArrowList } from '../components/ui/ArrowList'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Tag } from '../components/ui/Tag'
import { TerminalWindow } from '../components/ui/TerminalWindow'
import { site } from '../data/site'

export function ProjectsPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        label="project index"
        title="Projects pulled from the actual GitHub profile"
      />

      <div className="space-y-4">
        {site.projects.map((project) => (
          <TerminalWindow
            key={project.slug}
            command={`open ./${project.slug}`}
            title={project.eyebrow}
            className="min-w-0"
          >
            <div className="space-y-5">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="max-w-4xl">
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-foreground crt-glow">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-copy md:text-base">{project.summary}</p>
                </div>

                <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.2em]">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-line px-3 py-2 text-muted transition-colors hover:border-line-bright hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <p className="border-l border-line pl-4 text-sm leading-7 text-copy">{project.detail}</p>

              <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <ArrowList items={project.bullets} />

                <div className="flex flex-wrap gap-2 content-start">
                  {project.stack.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </TerminalWindow>
        ))}
      </div>
    </div>
  )
}
