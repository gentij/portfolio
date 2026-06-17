import { ArrowList } from '../components/ui/ArrowList'
import { ProjectMedia } from '../components/projects/ProjectMedia'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Tag } from '../components/ui/Tag'
import { site } from '../data/site'

export function ProjectsPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        label="project index"
        title="Projects"
      />

      <div className="space-y-10">
        {site.projects.map((project) => (
          <section
            key={project.slug}
            className="grid gap-6 border-t border-line pt-6 first:border-t-0 first:pt-0 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] xl:items-start"
          >
            <div className="order-2 xl:order-1">
              <ProjectMedia project={project} />
            </div>

            <div className="order-1 min-w-0 space-y-6 xl:order-2">
              <div className="space-y-3 max-w-4xl">
                <p className="font-label text-[10px] uppercase tracking-[0.24em] text-muted">
                  open ./{project.slug}
                </p>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-foreground crt-glow">
                  {project.name}
                </h3>
                <p className="text-sm leading-7 text-copy md:text-base">{project.summary}</p>
                <p className="border-l border-line pl-4 text-sm leading-7 text-dim">{project.detail}</p>
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

              <div className="space-y-5">
                <ArrowList items={project.bullets} />
                <div className="flex flex-wrap gap-2 content-start">
                  {project.stack.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
