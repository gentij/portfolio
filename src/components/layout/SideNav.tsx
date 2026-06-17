import { NavLink } from 'react-router-dom'
import type { NavItem } from '../../data/navigation'
import { site } from '../../data/site'
import { cn } from '../../lib/cn'

type SideNavProps = {
  navItems: NavItem[]
}

export function SideNav({ navItems }: SideNavProps) {
  return (
    <div className="relative hidden w-72 shrink-0 md:block">
      <aside
        className="fixed z-20 h-[calc(100vh-var(--crt-shell-header-height)-2rem)] w-72"
        style={{
          top: 'calc(var(--crt-shell-header-height) + 1rem)',
          left: 'max(1.5rem, calc((100vw - var(--crt-container-max)) / 2 + 1.5rem))',
        }}
      >
        <div className="crt-panel flex h-full flex-col px-4 py-5">
          <div>
            <p className="font-label text-[10px] uppercase tracking-[0.28em] text-muted">
              system modules
            </p>
            <div className="mt-4 border-l border-line pl-3">
              <p className="font-display text-xl text-accent crt-glow">{site.person.name}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-dim">{site.person.role}</p>
            </div>
          </div>

          <div className="mt-5 flex-1 space-y-2 overflow-y-auto pr-1">
            {navItems.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'flex items-center justify-between border px-3 py-3 transition-colors',
                    isActive
                      ? 'border-line-bright bg-accent text-background crt-glow'
                      : 'border-line text-muted hover:border-line-bright hover:text-foreground',
                  )
                }
              >
                <span className="font-label text-[11px] uppercase tracking-[0.24em]">{item.label}</span>
                <span className="text-[10px] uppercase tracking-[0.22em] opacity-70">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </NavLink>
            ))}
          </div>

          <div className="mt-5 space-y-3 border-t border-line pt-4">
            <div className="flex flex-wrap gap-2">
              <a
                href={site.person.resume}
                download
                className="inline-flex border border-line px-3 py-2 font-label text-[10px] uppercase tracking-[0.22em] text-muted transition-colors hover:border-line-bright hover:text-foreground"
              >
                dl resume
              </a>
              <a
                href={site.person.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex border border-line px-3 py-2 font-label text-[10px] uppercase tracking-[0.22em] text-muted transition-colors hover:border-line-bright hover:text-foreground"
              >
                github
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
