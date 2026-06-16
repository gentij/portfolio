import { Outlet } from 'react-router-dom'
import { primaryNavItems } from '../../data/navigation'
import { StatusFooter } from './StatusFooter'
import { SideNav } from './SideNav'
import { TopBar } from './TopBar'

export function AppShell() {
  return (
    <div className="crt-shell min-h-screen bg-background text-foreground">
      <div className="crt-flicker" aria-hidden="true" />

      <div className="relative z-10 min-h-screen">
        <TopBar navItems={primaryNavItems} />

        <div className="mx-auto flex w-full max-w-[var(--crt-container-max)] gap-6 px-4 pb-8 pt-4 md:px-6 md:pb-10 md:pt-6">
          <SideNav navItems={primaryNavItems} />

          <div className="min-w-0 flex-1">
            <Outlet />
            <StatusFooter />
          </div>
        </div>
      </div>
    </div>
  )
}
