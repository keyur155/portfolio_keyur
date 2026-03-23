export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 relative">
      
      <p className="text-accent font-mono text-xs tracking-widest mb-6 uppercase">
        Full Stack Engineer
      </p>

      <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-tight">
        Alex
        <span className="block text-transparent stroke-white/20">
          Chen.
        </span>
      </h1>

      <p className="mt-6 text-muted text-lg max-w-xl">
        Building <span className="text-accent2">scalable systems</span> & exceptional interfaces
      </p>

      <p className="mt-4 text-muted max-w-xl">
        I craft end-to-end digital products — from backend to UI.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="bg-accent text-black px-6 py-3 font-mono uppercase text-xs">
          View Work →
        </button>

        <button className="border border-gray-700 px-6 py-3 text-muted hover:text-accent2">
          Contact
        </button>
      </div>
    </section>
  );
}