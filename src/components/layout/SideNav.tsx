import { NavLink } from 'react-router-dom'
import type { NavItem } from '../../data/navigation'
import { cn } from '../../lib/cn'

type SideNavProps = {
  navItems: NavItem[]
}

export function SideNav({ navItems }: SideNavProps) {
  return (
    <aside className="sticky top-6 hidden h-fit w-72 shrink-0 md:block">
      <div className="crt-panel px-4 py-5">
        <p className="font-label text-[10px] uppercase tracking-[0.28em] text-muted">
          system modules
        </p>

        <div className="mt-5 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                cn(
                  'block border px-3 py-3 transition-colors',
                  isActive
                    ? 'border-line-bright bg-accent-soft text-foreground'
                    : 'border-line text-muted hover:border-line-bright hover:text-foreground',
                )
              }
            >
              <p className="font-label text-[11px] uppercase tracking-[0.24em]">{item.label}</p>
              <p className="mt-2 text-xs leading-6 text-dim">{item.description}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </aside>
  )
}
