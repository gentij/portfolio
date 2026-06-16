import { cn } from '../../lib/cn'

type ArrowListProps = {
  items: readonly string[]
  className?: string
  itemClassName?: string
  textClassName?: string
}

export function ArrowList({
  items,
  className,
  itemClassName,
  textClassName,
}: ArrowListProps) {
  return (
    <ul className={cn('space-y-3', className)}>
      {items.map((item) => (
        <li key={item} className={cn('grid grid-cols-[auto_1fr] items-start gap-x-3', itemClassName)}>
          <span className="pt-0.5 text-accent">-&gt;</span>
          <span className={cn('text-sm leading-7 text-copy', textClassName)}>{item}</span>
        </li>
      ))}
    </ul>
  )
}
