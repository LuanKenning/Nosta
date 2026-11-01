import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="flex items-center justify-between text-sm">
      <Link href="/" className="flex items-center gap-2.5 font-medium transition-opacity hover:opacity-60">
        <Image
          src="/logo.png"
          alt="Project Nosta Logo"
          width={328}
          height={387}
          className="h-7 w-auto object-contain"
          priority
        />
        <span>Nosta</span>
      </Link>
      <nav className="flex items-center gap-6">
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
