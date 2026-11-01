import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-7xl flex-col justify-between px-6 py-6 sm:px-10 sm:py-8">
      <SiteHeader />

      <section className="py-20 sm:py-32">
        <p className="mb-6 text-sm tabular-nums text-ink/55">404 — Level Null</p>
        <h1 className="text-[12vw] leading-[0.9] font-medium tracking-[-0.04em] sm:text-[8vw] xl:text-[7rem]">
          You noclipped.
        </h1>
        <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/70">
          This room doesn&apos;t exist in our floor plan. You&apos;ve wandered into an uncharted segment.
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className="inline-block border-b border-ink pb-0.5 text-sm font-medium transition-opacity hover:opacity-60"
          >
            ← Return to the countdown
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
