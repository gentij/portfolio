import type { ReactNode } from 'react'

type CommandLineProps = {
  prompt?: string
  command?: string
  trailing?: ReactNode
}

export function CommandLine({
  prompt = 'gentrit@system:~$',
  command,
  trailing,
}: CommandLineProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 font-display text-sm text-accent crt-glow">
      <span>{prompt}</span>
      {command ? <span className="text-foreground">{command}</span> : null}
      {trailing}
    </div>
  )
}
