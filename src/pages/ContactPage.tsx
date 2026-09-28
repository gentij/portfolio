import { SectionHeading } from '../components/ui/SectionHeading'
import { TerminalCard } from '../components/ui/TerminalCard'
import { site } from '../data/site'

export function ContactPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        label="contact pathways"
        title="Let&apos;s talk about the work"
        description="For product engineering roles, collaboration, or a conversation about systems work, email is the fastest route."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {site.contactLinks.map((link) => (
          <TerminalCard
            key={link.title}
            eyebrow="contact node"
            title={link.title}
            description={link.description}
          >
            <p className="font-body text-sm leading-6 text-foreground">{link.label}</p>

            <div className="mt-4 pt-1">
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                download={link.href.endsWith('.pdf') || undefined}
                className="inline-flex border border-line px-3 py-2 font-label text-[11px] uppercase tracking-[0.24em] text-muted transition-colors hover:border-line-bright hover:text-foreground"
              >
                {link.actionLabel}
              </a>
            </div>
          </TerminalCard>
        ))}
      </div>

      <TerminalCard
        eyebrow="location"
        title={site.person.location}
        description="Based in Prishtina, Kosovo. Open to roles and collaborations where product ownership, automation, integrations, and practical systems work matter."
      />
    </div>
  )
}
