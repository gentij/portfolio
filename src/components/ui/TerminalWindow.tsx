import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type TerminalWindowProps = {
  title?: string
  command?: string
  children: ReactNode
  className?: string
  headerAside?: ReactNode
}

export function TerminalWindow({
  title,
  command,
  children,
  className,
  headerAside,
}: TerminalWindowProps) {
  return (
    <section className={cn('crt-panel overflow-hidden', className)}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-3 md:px-5">
        <div className="min-w-0">
          {command ? (
            <p className="font-display text-sm text-accent crt-glow">
              gentrit@system:~$ <span className="text-foreground">{command}</span>
            </p>
          ) : null}

          {title ? (
            <p className="font-label text-[10px] uppercase tracking-[0.28em] text-muted">
              {title}
            </p>
          ) : null}
        </div>

        {headerAside ? (
          headerAside
        ) : (
          <div className="flex items-center gap-2 text-line-bright" aria-hidden="true">
            <span className="h-2.5 w-2.5 border border-current" />
            <span className="h-2.5 w-2.5 border border-current" />
            <span className="h-2.5 w-2.5 bg-current" />
          </div>
        )}
      </div>

      <div className="px-4 py-5 md:px-5 md:py-6">{children}</div>
    </section>
  )
}
