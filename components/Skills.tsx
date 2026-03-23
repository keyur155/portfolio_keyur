'use client'

import { useState } from 'react'

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    title: 'UI & Interfaces',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'GraphQL'],
  },
  {
    id: 'backend',
    label: 'Backend',
    title: 'APIs & Services',
    tags: ['Node.js', 'Python', 'Go', 'FastAPI', 'REST', 'gRPC'],
  },
  {
    id: 'data',
    label: 'Data',
    title: 'Databases & Storage',
    tags: ['PostgreSQL', 'Redis', 'MongoDB', 'Prisma', 'Elasticsearch'],
  },
  {
    id: 'infra',
    label: 'Infra',
    title: 'Cloud & DevOps',
    tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Vercel'],
  },
]

export default function Skills() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section
      id="skills"
      className="relative z-10 px-16 py-24"
      style={{ background: 'var(--bg)' }}
    >
      <div
        className="font-mono text-[0.7rem] tracking-[0.25em] uppercase mb-3 flex items-center gap-3"
        style={{ color: 'var(--accent)' }}
      >
        02 — Tech Stack
        <span className="flex-1 max-w-[80px] h-px" style={{ background: 'var(--border)' }} />
      </div>
      <h2
        className="font-display font-extrabold leading-tight tracking-tight mb-12"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
      >
        Tools of the trade
      </h2>

      <div
        className="max-w-5xl"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1px',
          background: 'var(--border)',
          border: '1px solid var(--border)',
        }}
      >
        {skillCategories.map(({ id, label, title, tags }) => (
          <div
            key={id}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            className="p-8 transition-colors duration-200 cursor-default"
            style={{ background: hovered === id ? 'var(--bg3)' : 'var(--bg)' }}
          >
            {/* Category label */}
            <div
              className="font-mono text-[0.7rem] tracking-[0.15em] mb-4 flex items-center gap-2"
              style={{ color: 'var(--accent)' }}
            >
              <span
                className="block w-1.5 h-1.5 rotate-45"
                style={{ background: 'var(--accent)' }}
              />
              {label}
            </div>

            <h3 className="font-display font-bold text-lg mb-5">{title}</h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[0.68rem] tracking-wide border px-3 py-1 transition-all duration-200 cursor-default"
                  style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent2)'
                    e.currentTarget.style.color = 'var(--accent2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--muted)'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
