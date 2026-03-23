export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-6 md:px-16 py-4 bg-black/70 backdrop-blur border-b border-white/10 z-50">
      <a href="#" className="text-accent font-mono text-sm">ac.dev</a>
      <div className="flex gap-6 text-xs font-mono text-muted uppercase">
        <a href="#about">about</a>
        <a href="#skills">stack</a>
        <a href="#projects">work</a>
        <a href="#contact">contact</a>
      </div>
    </nav>
  );
}