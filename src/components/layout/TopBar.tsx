import { NavLink } from 'react-router-dom'
import type { NavItem } from '../../data/navigation'
import { site } from '../../data/site'
import { cn } from '../../lib/cn'

type TopBarProps = {
  navItems: NavItem[]
}

export function TopBar({ navItems }: TopBarProps) {
  return (
    <header className="border-b border-line bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[var(--crt-container-max)] flex-col gap-4 px-4 py-4 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-label text-[10px] uppercase tracking-[0.3em] text-muted">
              authenticated session
            </p>
            <div className="mt-2 flex items-end gap-3">
              <span className="font-display text-2xl font-bold uppercase tracking-[-0.06em] text-accent crt-glow md:text-4xl">
                gentrit@root:~
              </span>
              <span className="mb-1 hidden border border-line px-2 py-1 font-label text-[10px] uppercase tracking-[0.24em] text-dim md:inline-flex">
                {site.person.role}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 md:justify-end">
            <span className="border border-line px-2 py-1 font-label text-[10px] uppercase tracking-[0.24em] text-dim">
              location: {site.person.location}
            </span>
            <span className="border border-line px-2 py-1 font-label text-[10px] uppercase tracking-[0.24em] text-dim">
              resume.pdf: ready
            </span>
          </div>
        </div>

        <nav className="flex gap-2 overflow-x-auto pb-1 md:hidden" aria-label="Primary mobile">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                cn(
                  'shrink-0 border px-3 py-2 font-label text-[10px] uppercase tracking-[0.24em] transition-colors',
                  isActive
                    ? 'border-accent bg-accent text-background crt-glow'
                    : 'border-line text-muted',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
