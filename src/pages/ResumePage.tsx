import { ArrowList } from '../components/ui/ArrowList'
import { CommandLine } from '../components/ui/CommandLine'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Tag } from '../components/ui/Tag'
import { TerminalCard } from '../components/ui/TerminalCard'
import { TerminalWindow } from '../components/ui/TerminalWindow'
import { site } from '../data/site'

export function ResumePage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        label="resume dossier"
        title="Experience, stack, and education in one fast route"
        aside={
          <a
            href={site.person.resume}
            download
            className="inline-flex border border-line px-3 py-2 font-label text-[11px] uppercase tracking-[0.24em] text-muted transition-colors hover:border-line-bright hover:text-foreground"
          >
            download pdf
          </a>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <TerminalWindow command="cat resume.md">
          <div className="space-y-5">
            <div className="border-l border-line pl-4 text-sm leading-7 text-copy md:text-base">
              {site.person.resumeIntro}
            </div>

            <ArrowList items={site.person.focus} />

            <CommandLine trailing={<span className="crt-cursor" aria-hidden="true" />} />
          </div>
        </TerminalWindow>

        <TerminalCard
          eyebrow="quick facts"
          title="At a glance"
          footer={
            <div className="space-y-4">
              <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-[11px] uppercase tracking-[0.2em]">
                <span className="text-muted">role</span>
                <span className="text-foreground">{site.person.role}</span>
                <span className="text-muted">years</span>
                <span className="text-foreground">{site.person.yearsExperience}</span>
                <span className="text-muted">base</span>
                <span className="text-foreground">{site.person.location}</span>
                <span className="text-muted">email</span>
                <span className="text-foreground">{site.person.email}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Tag active>experience</Tag>
                <Tag>skills</Tag>
                <Tag>education</Tag>
                <Tag>resume</Tag>
              </div>
            </div>
          }
        />
      </div>

      <TerminalWindow command="sed -n 'work_history' resume.md" title="work history">
        <div className="space-y-4">
          {site.experience.map((role) => (
            <TerminalCard
              key={role.company}
              eyebrow={`${role.company} // ${role.location}`}
              title={`${role.role} | ${role.period}`}
              className="bg-transparent"
            >
              <ArrowList items={role.bullets} />
            </TerminalCard>
          ))}
        </div>
      </TerminalWindow>

      <div className="grid gap-4 xl:grid-cols-4">
        {site.skillGroups.map((group) => (
          <TerminalCard key={group.title} eyebrow="skill set" title={group.title}>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </TerminalCard>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <TerminalCard
          eyebrow="education"
          title={site.education.school}
          description={`${site.education.degree} | ${site.education.location}`}
          footer={
            <p className="text-xs uppercase tracking-[0.18em] text-dim">{site.education.period}</p>
          }
        />

        <TerminalCard eyebrow="current direction" title="What I want this portfolio to signal">
          <ArrowList
            items={[
              'Production experience across frontend, backend, realtime systems, and product-oriented platform work.',
              'A track record of building useful software in both client-facing and internal operational contexts.',
              'Range across TypeScript product engineering and lower-level Rust application work.',
            ]}
          />
        </TerminalCard>
      </div>
    </div>
  )
}
