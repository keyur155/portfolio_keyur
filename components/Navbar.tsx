'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'about', href: '#about' },
  { label: 'stack', href: '#skills' },
  { label: 'work', href: '#projects' },
  { label: 'contact', href: '#contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    target?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-16 py-5 border-b"
      style={{
        background: 'rgba(5,8,16,0.8)',
        backdropFilter: 'blur(20px)',
        borderColor: 'var(--border)',
      }}
    >
      <Link
        href="#hero"
        onClick={(e) => handleScroll(e, '#hero')}
        className="font-mono text-[0.85rem] tracking-widest transition-opacity hover:opacity-70"
        style={{ color: 'var(--accent)' }}
      >
        ac.dev
      </Link>

      <ul className="flex gap-10 list-none">
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              onClick={(e) => handleScroll(e, href)}
              className="font-mono text-[0.75rem] tracking-widest uppercase transition-colors duration-200"
              style={{
                color: active === href.slice(1) ? 'var(--accent)' : 'var(--muted)',
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
