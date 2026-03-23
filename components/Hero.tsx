'use client'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-16 pt-32 pb-16 overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-dot-bg" />

      {/* Glow blobs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 700,
          height: 700,
          background: 'radial-gradient(circle, rgba(124,111,247,0.12) 0%, transparent 70%)',
          top: -100,
          right: -200,
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(0,245,196,0.08) 0%, transparent 70%)',
          bottom: 50,
          left: -100,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Eyebrow */}
        <div
          className="animate-fade-in-1 font-mono text-xs tracking-[0.2em] uppercase mb-6 flex items-center gap-3"
          style={{ color: 'var(--accent)' }}
        >
          <span
            className="block w-8 h-px"
            style={{ background: 'var(--accent)' }}
          />
          Full Stack Engineer
        </div>

        {/* Name */}
        <h1
          className="animate-fade-in-2 font-display font-extrabold leading-none tracking-tight mb-2"
          style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
        >
          Keyur
          <span
            className="block text-outline"
            style={{ letterSpacing: '-0.02em' }}
          >
            Sathwara.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-in-3 font-display font-normal mb-8 mt-4"
          style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            color: 'var(--muted)',
          }}
        >
          Building{' '}
          <span style={{ color: 'var(--accent2)' }}>scalable systems</span>{' '}
          &amp; exceptional interfaces
        </p>

        {/* Description */}
        <p
          className="animate-fade-in-4 text-[1.05rem] leading-relaxed mb-12 font-light max-w-xl"
          style={{ color: '#8a94b0' }}
        >
          I craft end-to-end digital products — from architecting backends that
          handle millions of requests to building UIs people actually enjoy using.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-5 flex gap-4 flex-wrap">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="clip-btn inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase px-8 py-[0.85rem] transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5"
            style={{ background: 'var(--accent)', color: '#050810' }}
          >
            View my work →
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 border font-mono text-xs tracking-widest uppercase px-8 py-[0.85rem] transition-all duration-200 hover:-translate-y-0.5"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--muted)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent2)'
              e.currentTarget.style.color = 'var(--accent2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--muted)'
            }}
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-16 flex items-center gap-3 font-mono text-[0.7rem] tracking-widest uppercase"
        style={{ color: 'var(--muted)' }}
      >
        <span className="scroll-line" />
        scroll down
      </div>
    </section>
  )
}
