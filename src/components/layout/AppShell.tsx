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

        <div className="mx-auto flex w-full max-w-[var(--crt-container-max)] gap-6 px-4 pb-0 pt-[calc(var(--crt-shell-header-height-mobile)+1rem)] md:px-6 md:pt-[calc(var(--crt-shell-header-height)+1rem)]">
          <SideNav navItems={primaryNavItems} />

          <div className="min-w-0 flex-1 md:flex md:min-h-[calc(100vh-var(--crt-shell-header-height)-2rem)] md:flex-col">
            <div className="min-h-0 flex-1">
              <Outlet />
            </div>
            <StatusFooter />
          </div>
        </div>
      </div>
    </div>
  )
}
