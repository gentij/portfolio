import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type TagProps = {
  children: ReactNode
  active?: boolean
}

export function Tag({ children, active = false }: TagProps) {
  return (
    <span
      className={cn(
        'border px-2 py-1 font-label text-[10px] uppercase tracking-[0.2em]',
        active
          ? 'border-accent bg-accent text-background'
          : 'border-line text-muted',
      )}
    >
      {children}
    </span>
  )
}
