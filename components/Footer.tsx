'use client'
export default function Footer() {
  return (
    <footer
      className="relative z-10 flex justify-between items-center px-16 py-8"
      style={{
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <p
        className="font-mono text-[0.7rem] tracking-wide flex items-center"
        style={{ color: 'var(--muted)' }}
      >
        <span
          className="inline-block w-1.5 h-1.5 rounded-full mr-2 dot-pulse"
          style={{ background: 'var(--accent)' }}
        />
        Keyur — Full Stack Engineer &copy; {new Date().getFullYear()}
      </p>
      <p
        className="font-mono text-[0.7rem] tracking-wide"
        style={{ color: 'var(--muted)' }}
      >
        Designed &amp; built with precision
      </p>
    </footer>
  )
}
