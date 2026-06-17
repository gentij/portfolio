import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type MediaViewportProps = {
  label?: string
  className?: string
  children: ReactNode
  aspectClassName?: string
}

export function MediaViewport({
  label,
  className,
  children,
  aspectClassName = 'aspect-video',
}: MediaViewportProps) {
  return (
    <div className={cn('space-y-3', className)}>
      {label ? (
        <p className="font-label text-[10px] uppercase tracking-[0.26em] text-muted">{label}</p>
      ) : null}

      <div className={cn('crt-media border border-line-bright bg-panel-strong', aspectClassName)}>
        {children}
      </div>
    </div>
  )
}
