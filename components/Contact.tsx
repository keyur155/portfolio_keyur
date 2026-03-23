'use client'

import { useState } from 'react'

const contactLinks = [
  {
    label: 'keyur@dev.com',
    href: 'mailto:keyur.itconsultancy@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'github.com/keyu155',
    href: 'https://github.com/keyur155',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
      </svg>
    ),
  },
  {
    label: 'linkedin.com/in/keyur-sathwara',
    href: 'https://www.linkedin.com/in/keyur-sathwara-094203218/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section
      id="contact"
      className="relative z-10 px-16 py-24"
      style={{ background: 'var(--bg)' }}
    >
      <div
        className="max-w-5xl grid gap-24"
        style={{ gridTemplateColumns: '1fr 1fr' }}
      >
        {/* Left */}
        <div>
          <div
            className="font-mono text-[0.7rem] tracking-[0.25em] uppercase mb-3 flex items-center gap-3"
            style={{ color: 'var(--accent)' }}
          >
            04 — Contact
            <span className="flex-1 max-w-[80px] h-px" style={{ background: 'var(--border)' }} />
          </div>
          <h2
            className="font-display font-extrabold leading-tight tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Let&apos;s build
            <br />
            <span className="text-outline">something</span>
            <br />
            great.
          </h2>
          <p
            className="text-base leading-relaxed mb-8 font-light"
            style={{ color: '#8a94b0' }}
          >
            Open to full-time roles, freelance contracts, and interesting
            open-source collaboration. If you have something in mind — reach out.
          </p>

          <div className="flex flex-col gap-3">
            {contactLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 border font-mono text-sm tracking-wide px-5 py-4 transition-all duration-200"
                style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.color = 'var(--accent)'
                  e.currentTarget.style.background = 'rgba(0,245,196,0.04)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--muted)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                <span style={{ opacity: 0.6 }}>{icon}</span>
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label
              className="font-mono text-[0.65rem] tracking-[0.15em] uppercase"
              style={{ color: 'var(--muted)' }}
            >
              Name
            </label>
            <input
              type="text"
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border px-4 py-3 text-sm outline-none transition-colors duration-200 font-body"
              style={{
                background: 'var(--bg3)',
                borderColor: 'var(--border)',
                color: 'var(--text)',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent2)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              className="font-mono text-[0.65rem] tracking-[0.15em] uppercase"
              style={{ color: 'var(--muted)' }}
            >
              Email
            </label>
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border px-4 py-3 text-sm outline-none transition-colors duration-200 font-body"
              style={{
                background: 'var(--bg3)',
                borderColor: 'var(--border)',
                color: 'var(--text)',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent2)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label
              className="font-mono text-[0.65rem] tracking-[0.15em] uppercase"
              style={{ color: 'var(--muted)' }}
            >
              Message
            </label>
            <textarea
              required
              rows={5}
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="border px-4 py-3 text-sm outline-none transition-colors duration-200 font-body resize-none"
              style={{
                background: 'var(--bg3)',
                borderColor: 'var(--border)',
                color: 'var(--text)',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent2)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
            />
          </div>

          <button
            type="submit"
            className="clip-btn self-start font-mono text-xs font-bold tracking-widest uppercase px-8 py-[0.85rem] transition-all duration-200 hover:opacity-85"
            style={{
              background: submitted ? 'var(--accent2)' : 'var(--accent)',
              color: '#050810',
            }}
          >
            {submitted ? 'Message sent ✓' : 'Send message →'}
          </button>
        </form>
      </div>
    </section>
  )
}
