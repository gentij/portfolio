import type { ReactNode } from 'react'

type SectionHeadingProps = {
  label: string
  title: string
  description?: string
  aside?: ReactNode
}

export function SectionHeading({
  label,
  title,
  description,
  aside,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <p className="font-label text-[11px] uppercase tracking-[0.28em] text-muted">
          {label}
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-[-0.04em] text-accent crt-glow md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-sm leading-7 text-copy md:text-base">{description}</p>
        ) : null}
      </div>

      {aside ? <div className="shrink-0">{aside}</div> : null}
    </div>
  )
}
