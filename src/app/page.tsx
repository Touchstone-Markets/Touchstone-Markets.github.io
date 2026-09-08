import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <header className="flex items-center justify-between px-6 py-5 md:px-10">
        <div className="flex items-center gap-3">
          <Image
            src="/brand/logo.png"
            alt="Touchstone Markets"
            width={32}
            height={32}
            priority
            className="rounded-md"
          />
          <span className="font-mono text-sm tracking-widest uppercase">
            Touchstone
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#thesis" className="hover:text-white transition">
            Thesis
          </a>
          <a href="#markets" className="hover:text-white transition">
            Markets
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>
      </header>

      <section className="flex-1 flex items-center px-6 md:px-10">
        <div className="max-w-4xl">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-[color:var(--accent)] mb-6">
            Coming soon
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
            A new venue for
            <br />
            principled price discovery.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl">
            Touchstone Markets is building infrastructure for markets that
            reward good judgment — clear rules, honest liquidity, and pricing
            you can audit end to end.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:hello@touchstone.markets"
              className="inline-flex items-center rounded-md bg-[color:var(--accent)] px-5 py-3 text-sm font-medium text-white hover:opacity-90 transition"
            >
              Get in touch
            </a>
            <a
              href="https://github.com/Touchstone-Markets"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md border border-white/15 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/5 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-10 py-6 border-t border-white/10 text-xs text-white/40 flex justify-between">
        <span>© {new Date().getFullYear()} Touchstone Markets</span>
        <span className="font-mono">v0.1</span>
      </footer>
    </main>
  );
}
