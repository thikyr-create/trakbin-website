import Link from "next/link";

export default function NotFound() {
  return (
    <main className="hero-gradient dot-grid-light flex min-h-svh flex-col items-center justify-center px-4 text-center text-white">
      <p className="eyebrow text-brand-300">404</p>
      <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-6xl">This route does not exist.</h1>
      <p className="mt-5 max-w-xl text-mint-100/75">The page you are looking for was moved or never existed. The network is still running.</p>
      <Link href="/"
        className="mt-9 rounded-full bg-brand-500 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[.2em] text-forest-950 transition hover:bg-brand-400">
        Back to Trakbin
      </Link>
    </main>
  );
}