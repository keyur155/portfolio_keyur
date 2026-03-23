'use client'
const stats = [
  { num: '3+', label: 'Years exp.' },
  { num: '10+', label: 'Projects' },
  { num: '5', label: 'Open source' },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 px-16 py-24"
      style={{
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="grid gap-24 max-w-5xl" style={{ gridTemplateColumns: '1fr 1.4fr' }}>
        {/* Photo */}
        <div className="relative">
          {/* Corner accents */}
          <div
            className="absolute -top-2 -left-2 w-6 h-6"
            style={{
              borderTop: '2px solid var(--accent2)',
              borderLeft: '2px solid var(--accent2)',
            }}
          />
          <div
            className="absolute -bottom-2 -right-2 w-6 h-6"
            style={{
              borderBottom: '2px solid var(--accent3)',
              borderRight: '2px solid var(--accent3)',
            }}
          />
          <div
            className="w-full flex items-center justify-center relative overflow-hidden border"
            style={{
              aspectRatio: '4/5',
              background: 'var(--bg3)',
              borderColor: 'var(--border)',
            }}
          >
            {/* Replace with <Image src="/photo.jpg" fill alt="Alex Chen" className="object-cover" /> */}
            <span
              className="font-display font-extrabold"
              style={{ fontSize: '6rem', color: 'rgba(255,255,255,0.05)', letterSpacing: '-0.05em' }}
            >
              AC
            </span>
            <div
              className="absolute bottom-0 right-0 font-mono text-[0.65rem] font-bold tracking-widest uppercase px-5 py-2 clip-btn-sm"
              style={{ background: 'var(--accent)', color: '#050810' }}
            >
              Available for hire
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <div
            className="font-mono text-[0.7rem] tracking-[0.25em] uppercase mb-3 flex items-center gap-3"
            style={{ color: 'var(--accent)' }}
          >
            01 — About
            <span
              className="flex-1 max-w-[80px] h-px"
              style={{ background: 'var(--border)' }}
            />
          </div>
          <h2
            className="font-display font-extrabold leading-tight tracking-tight mb-8"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Turning complex problems
            <br />
            into clean solutions
          </h2>

          <p className="text-[1.05rem] leading-relaxed mb-6 font-light" style={{ color: '#8a94b0' }}>
            Hey, I&apos;m Keyur — a full stack engineer with 3+ years building products
            across fintech, SaaS, and consumer apps. I believe great software lives
            at the intersection of solid engineering and thoughtful design.
          </p>
          <p className="text-[1.05rem] leading-relaxed mb-10 font-light" style={{ color: '#8a94b0' }}>
            My approach: understand the problem deeply, architect for the long-term,
            and ship iteratively. I care as much about the experience of the code as
            the experience of the product.
          </p>

          {/* Stats */}
          <div
            className="grid"
            style={{
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              background: 'var(--border)',
              border: '1px solid var(--border)',
            }}
          >
            {stats.map(({ num, label }) => (
              <div
                key={label}
                className="text-center py-6 px-4"
                style={{ background: 'var(--bg2)' }}
              >
                <span
                  className="block font-display font-extrabold leading-none mb-1"
                  style={{ fontSize: '2.2rem', color: 'var(--accent)' }}
                >
                  {num}
                </span>
                <span
                  className="font-mono text-[0.65rem] tracking-widest uppercase"
                  style={{ color: 'var(--muted)' }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
