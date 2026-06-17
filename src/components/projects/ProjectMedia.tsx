import type { ReactNode } from 'react'
import { MediaViewport } from '../ui/MediaViewport'
import { site } from '../../data/site'

type Project = (typeof site.projects)[number]

type ProjectMediaProps = {
  project: Project
  autoplay?: boolean
}

function ProjectVisualFrame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="min-w-0 space-y-3">
      <p className="font-label text-[10px] uppercase tracking-[0.26em] text-muted">{label}</p>
      <div className="overflow-hidden border border-line-bright bg-panel-strong">{children}</div>
    </div>
  )
}

function StemSplitterVisual() {
  return (
    <div className="grid gap-4 p-5 md:p-6">
      <div className="space-y-2">
        <p className="font-label text-[10px] uppercase tracking-[0.24em] text-muted">engine snapshot</p>
        <p className="font-display text-lg text-foreground md:text-xl">stem-splitter-core</p>
        <p className="max-w-xl text-sm leading-6 text-copy">
          Rust crate and CLI for local stem separation using ONNX Runtime.
        </p>
      </div>

      <div className="border border-line">
        <div className="grid gap-0 text-[11px] uppercase tracking-[0.18em] md:grid-cols-3">
          <div className="border-b border-line px-4 py-3 md:border-b-0 md:border-r">
            <p className="text-muted">surface</p>
            <p className="mt-2 text-foreground">crate + cli</p>
          </div>
          <div className="border-b border-line px-4 py-3 md:border-b-0 md:border-r">
            <p className="text-muted">runtime</p>
            <p className="mt-2 text-foreground">onnx runtime</p>
          </div>
          <div className="px-4 py-3">
            <p className="text-muted">acceleration</p>
            <p className="mt-2 text-foreground">coreml / cuda</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 font-label text-[10px] uppercase tracking-[0.2em] text-muted">
        <span className="border border-line px-3 py-2">rust</span>
        <span className="border border-line px-3 py-2">audio processing</span>
        <span className="border border-line px-3 py-2">local inference</span>
      </div>
    </div>
  )
}

function GoogleWorkspaceVisual() {
  return (
    <div className="grid gap-4 p-5 md:p-6">
      <div className="space-y-2">
        <p className="font-label text-[10px] uppercase tracking-[0.24em] text-muted">system flow</p>
        <p className="font-display text-lg text-foreground md:text-xl">workspace event relay</p>
        <p className="max-w-xl text-sm leading-6 text-copy">
          Backend service for collecting Google Workspace activity and forwarding it downstream.
        </p>
      </div>

      <div className="border border-line p-4 md:p-5">
        <div className="grid gap-3 md:grid-cols-[auto_1fr] md:items-start">
          <p className="font-label text-[10px] uppercase tracking-[0.22em] text-muted">path</p>
          <div className="space-y-3">
            <p className="font-display text-sm text-foreground md:text-base">
              source -&gt; queue -&gt; processor -&gt; webhook
            </p>
            <p className="text-sm leading-6 text-copy">
              Handles registration, scheduled pulls, retries, and downstream delivery in one service.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 font-label text-[10px] uppercase tracking-[0.2em] text-muted">
        <span className="border border-line px-3 py-2">fastify</span>
        <span className="border border-line px-3 py-2">bullmq</span>
        <span className="border border-line px-3 py-2">google admin sdk</span>
      </div>
    </div>
  )
}

export function ProjectMedia({ project, autoplay = false }: ProjectMediaProps) {
  switch (project.slug) {
    case 'lunie':
      return (
        <MediaViewport label="video preview">
          <video
            className="h-full w-full object-cover"
            src="/media/lunie-demo-2.mp4"
            poster="/media/lunie.png"
            autoPlay={autoplay}
            muted={autoplay}
            loop={autoplay}
            playsInline
            controls={!autoplay}
            preload="metadata"
          />
        </MediaViewport>
      )
    case 'stemmer':
      return (
        <MediaViewport label="video preview">
          <video
            className="h-full w-full object-cover"
            src="/media/stemmer-demo-retro.mp4"
            poster="/media/stemmer-mint-green.png"
            autoPlay={autoplay}
            muted={autoplay}
            loop={autoplay}
            playsInline
            controls={!autoplay}
            preload="metadata"
          />
        </MediaViewport>
      )
    case 'stem-splitter-core':
      return (
        <ProjectVisualFrame label="engine snapshot">
          <StemSplitterVisual />
        </ProjectVisualFrame>
      )
    case 'google-workspace-event-integration':
      return (
        <ProjectVisualFrame label="system flow">
          <GoogleWorkspaceVisual />
        </ProjectVisualFrame>
      )
    default:
      return null
  }
}
