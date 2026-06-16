import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type TerminalCardProps = {
  eyebrow?: string
  title?: string
  description?: string
  footer?: ReactNode
  children?: ReactNode
  className?: string
}

export function TerminalCard({
  eyebrow,
  title,
  description,
  footer,
  children,
  className,
}: TerminalCardProps) {
  return (
    <article className={cn('flex h-full flex-col border border-line bg-panel px-4 py-4', className)}>
      {eyebrow ? (
        <p className="font-label text-[10px] uppercase tracking-[0.24em] text-muted">
          {eyebrow}
        </p>
      ) : null}

      {title ? (
        <h3 className="mt-3 font-display text-lg font-semibold tracking-[-0.03em] text-foreground">
          {title}
        </h3>
      ) : null}

      {description ? <p className="mt-3 flex-1 text-sm leading-7 text-copy">{description}</p> : null}

      {children ? <div className="mt-4">{children}</div> : null}
      {footer ? <div className="mt-4 pt-1">{footer}</div> : null}
    </article>
  )
}
