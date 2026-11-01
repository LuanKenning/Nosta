import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="flex items-baseline justify-between text-sm">
      <Link href="/" className="font-medium transition-opacity hover:opacity-60">
        Nosta
      </Link>
      <nav className="flex items-baseline gap-6">
        <span className="hidden tabular-nums text-ink/55 md:inline">10.10.2028 — 13:00</span>
        <Link href="/updates" className="transition-opacity hover:opacity-60">
          Updates
        </Link>
        <Link href="/about" className="transition-opacity hover:opacity-60">
          About
        </Link>
      </nav>
    </header>
  );
}
