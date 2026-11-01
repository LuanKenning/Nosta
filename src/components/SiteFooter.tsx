import Link from "next/link";
import Sponsor from "@/components/Sponsor";

export default function SiteFooter() {
  return (
    <footer className="mt-auto flex flex-wrap items-center justify-between gap-x-8 gap-y-3 pt-6 text-sm text-ink/55">
      <Sponsor />
      <div className="flex items-center gap-6">
        <span>Local time</span>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="/impressum" className="transition-opacity hover:opacity-60">
            Impressum
          </Link>
          <Link href="/privacy" className="transition-opacity hover:opacity-60">
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
