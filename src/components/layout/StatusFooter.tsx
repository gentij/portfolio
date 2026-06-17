import { Link, useLocation } from 'react-router-dom'
import { site } from '../../data/site'

export function StatusFooter() {
  const location = useLocation()

  return (
    <footer className="crt-panel mt-6 mb-4 px-4 py-3 md:mt-6 md:mb-4 md:px-5">
      <div className="flex flex-col gap-3 text-[11px] uppercase tracking-[0.22em] text-dim md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span>cwd: {location.pathname}</span>
          <span>mode: routed shell</span>
          <span>theme: crt unified</span>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link className="text-muted transition-colors hover:text-foreground" to="/projects">
            ./PROJECTS
          </Link>
          <Link className="text-muted transition-colors hover:text-foreground" to="/resume">
            ./RESUME
          </Link>
          <a
            className="text-muted transition-colors hover:text-foreground"
            href={site.person.resume}
            download
          >
            DL_RESUME
          </a>
        </div>
      </div>
    </footer>
  )
}
