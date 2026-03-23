'use client'

import { useState } from 'react'

const projects = [
  {
    num: '01',
    title: 'NovaPay — Payment Infrastructure',
    desc: 'Built the core transaction engine and developer API for a fintech startup processing $40M+ monthly. Architected for 99.99% uptime with real-time fraud detection.',
    tags: ['Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'Redis'],
    href: '#',
  },
  {
    num: '02',
    title: 'Orbit — Team Collaboration Tool',
    desc: 'Full-stack SaaS app with real-time presence, document collaboration, and AI-powered task automation. 8,000+ active users at launch.',
    tags: ['Next.js', 'WebSockets', 'Supabase', 'OpenAI'],
    href: '#',
  },
  {
    num: '03',
    title: 'FluxQL — Open Source GraphQL Layer',
    desc: 'A schema-first GraphQL middleware that auto-generates resolvers from Prisma schemas. 2,400+ GitHub stars, used in production at 50+ companies.',
    tags: ['TypeScript', 'GraphQL', 'Prisma', 'OSS'],
    href: '#',
  },
  {
    num: '04',
    title: 'Sentry Dashboard — Internal Analytics',
    desc: 'Rebuilt the analytics dashboard for a 300-person org, reducing load times from 8s to 400ms through smart data pipelines and incremental rendering.',
    tags: ['React', 'Go', 'ClickHouse', 'Kubernetes'],
    href: '#',
  },
]

export default function Projects() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section
      id="projects"
      className="relative z-10 px-16 py-24"
      style={{
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        className="font-mono text-[0.7rem] tracking-[0.25em] uppercase mb-3 flex items-center gap-3"
        style={{ color: 'var(--accent)' }}
      >
        03 — Work
        <span className="flex-1 max-w-[80px] h-px" style={{ background: 'var(--border)' }} />
      </div>
      <h2
        className="font-display font-extrabold leading-tight tracking-tight mb-12"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
      >
        Selected projects
      </h2>

      <div className="max-w-5xl">
        {projects.map((project) => (
          <div
            key={project.num}
            onMouseEnter={() => setHovered(project.num)}
            onMouseLeave={() => setHovered(null)}
            className="grid items-center gap-12 py-10 border-b cursor-default"
            style={{
              gridTemplateColumns: '1fr 2fr auto',
              borderColor: 'var(--border)',
            }}
          >
            {/* Number */}
            <span
              className="font-display font-extrabold leading-none transition-colors duration-300"
              style={{
                fontSize: '3.5rem',
                letterSpacing: '-0.05em',
                color: hovered === project.num ? 'var(--accent)' : 'rgba(255,255,255,0.04)',
              }}
            >
              {project.num}
            </span>

            {/* Info */}
            <div>
              <h3
                className="font-display font-bold text-2xl mb-2 transition-colors duration-200"
                style={{ color: hovered === project.num ? 'var(--accent)' : 'var(--text)' }}
              >
                {project.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-4 max-w-lg font-light"
                style={{ color: 'var(--muted)' }}
              >
                {project.desc}
              </p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.65rem] tracking-wide border px-2.5 py-1"
                    style={{
                      borderColor: 'rgba(124,111,247,0.3)',
                      color: 'var(--accent2)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow link */}
            <a
              href={project.href}
              className="w-12 h-12 border flex items-center justify-center text-xl transition-all duration-200"
              style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.color = 'var(--accent)'
                e.currentTarget.style.background = 'rgba(0,245,196,0.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--muted)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
