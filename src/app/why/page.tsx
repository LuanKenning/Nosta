import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Why Project Nosta — Building the Backrooms in Real Life as a Gift",
  description:
    "Why Project Nosta exists: Luan Kenning is building the Backrooms in real life as a gift for his girlfriend, who always dreamed of stepping inside Level 0.",
  keywords: [
    "Why Project Nosta",
    "Project Nosta story",
    "Project Nosta gift",
    "Backrooms in real life",
    "real life Backrooms",
    "building the Backrooms",
    "Backrooms Level 0 real life",
    "Backrooms girlfriend gift",
    "Luan Kenning",
    "liminal space",
    "Backrooms movie",
  ],
  authors: [{ name: "Luan Kenning", url: "https://luankenning.com" }],
  creator: "Luan Kenning",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/why",
  },
  openGraph: {
    type: "article",
    url: "/why",
    siteName: "Project Nosta",
    title: "Why Project Nosta — A Real-Life Backrooms Gift",
    description:
      "She always wanted to step inside the Backrooms. So Luan Kenning is building Level 0 in real life — as a gift for her.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Project Nosta — A Real-Life Backrooms Gift",
    description:
      "She always wanted to be in the Backrooms. So he's building them in real life — as a gift.",
    creator: "@luankenning",
  },
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nosta.luankenning.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why Project Nosta — Building the Backrooms in Real Life as a Gift",
  description:
    "The story behind Project Nosta: Luan Kenning is building the Backrooms in real life as a gift for his girlfriend, who always wanted to step inside Level 0.",
  url: `${siteUrl}/why`,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteUrl}/why`,
  },
  author: {
    "@type": "Person",
    name: "Luan Kenning",
    url: "https://luankenning.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Project Nosta",
    url: siteUrl,
  },
  about: [
    {
      "@type": "Thing",
      name: "The Backrooms",
      description:
        "The endless yellow rooms from the internet — Level 0, a liminal space of carpet, wallpaper and fluorescent light.",
    },
    {
      "@type": "Thing",
      name: "Level 0",
    },
  ],
};

export default function WhyProjectNosta() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageShell eyebrow="The reason" title="Why Project Nosta">
        <div className="grid gap-4 sm:grid-cols-12 sm:gap-8">
          <p className="max-w-2xl text-2xl leading-snug tracking-tight sm:col-span-8 sm:text-3xl">
            Because someone I love always wanted to step inside the Backrooms —
            so I decided to build them for her, in real life.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-12 sm:gap-8">
          <article className="max-w-2xl space-y-5 text-lg leading-relaxed sm:col-span-8">
            <section aria-labelledby="wish">
              <h2
                id="wish"
                className="text-2xl font-medium tracking-tight sm:text-3xl"
              >
                She always wanted to be in the Backrooms
              </h2>
              <div className="mt-5 space-y-5">
                <p>
                  My girlfriend has always been fascinated by the Backrooms. The
                  endless yellow rooms, the humming fluorescent lights, the damp
                  carpet, the feeling of wandering somewhere familiar that
                  shouldn&apos;t exist. She&apos;d watch the videos, wander
                  through the photos and games, and say the same thing every
                  time: she wished she could actually be there — inside{" "}
                  <Link
                    href="/about"
                    className="underline underline-offset-4 hover:opacity-60"
                  >
                    Level 0
                  </Link>
                  , the original liminal space.
                </p>
              </div>
            </section>

            <section aria-labelledby="gift">
              <h2
                id="gift"
                className="pt-6 text-2xl font-medium tracking-tight sm:text-3xl"
              >
                A gift: the real-life Backrooms
              </h2>
              <div className="mt-5 space-y-5">
                <p>
                  So I thought: what if she could? Not on a screen, not in VR —
                  for real. Real walls you can touch, real carpet under your
                  feet, real lights humming above you. A physical place you can
                  walk into, look around, and get lost in.
                </p>
                <p>
                  That&apos;s what{" "}
                  <Link
                    href="/about"
                    className="underline underline-offset-4 hover:opacity-60"
                  >
                    Project Nosta
                  </Link>{" "}
                  is. It started as a gift for her — building the real-life
                  Backrooms so she can finally stand inside the place she&apos;s
                  always dreamed about.
                </p>
              </div>
            </section>

            <section aria-labelledby="everyone">
              <h2
                id="everyone"
                className="pt-6 text-2xl font-medium tracking-tight sm:text-3xl"
              >
                Built for her, shared with everyone
              </h2>
              <div className="mt-5 space-y-5">
                <p>
                  And if it&apos;s built well enough for her, then it&apos;s
                  built well enough for everyone. That&apos;s why the final look
                  will be revealed on{" "}
                  <span className="tabular-nums">
                    10 October 2028 at 13:00
                  </span>{" "}
                  — so she, and all of you, can see it for the first time
                  together. Follow the build in{" "}
                  <Link
                    href="/updates"
                    className="underline underline-offset-4 hover:opacity-60"
                  >
                    Updates
                  </Link>{" "}
                  or{" "}
                  <Link
                    href="/"
                    className="underline underline-offset-4 hover:opacity-60"
                  >
                    see the countdown →
                  </Link>
                </p>
              </div>
            </section>
          </article>
          <aside className="sm:col-span-4">
            <div className="border-t border-ink pt-4">
              <p className="text-xs uppercase tracking-[0.18em] text-ink/55">
                For her
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink/70">
                This whole project is a gift — so she can finally noclip out of
                reality, without leaving it.
              </p>
            </div>
          </aside>
        </div>
      </PageShell>
    </>
  );
}
