import Countdown from "@/components/Countdown";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-7xl flex-col justify-between px-6 py-6 sm:px-10 sm:py-8">
      <SiteHeader />

      <section className="py-16">
        <h1 className="mb-8 max-w-md text-sm text-ink/55">
          The final look of the Backrooms will be revealed on Tuesday, 10 October 2028, 13:00.
        </h1>
        <Countdown />
      </section>

      <SiteFooter />
    </main>
  );
}
