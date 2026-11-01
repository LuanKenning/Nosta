import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Sponsor from "@/components/Sponsor";

export const metadata: Metadata = {
  title: "About",
  description:
    "Project Nosta is Luan Kenning's project to build the Backrooms in real life, in partnership with the Backrooms movie. Final look revealed 10.10.2028, 13:00.",
  alternates: {
    canonical: "/about",
  },
};

const details: { name: string; text: string }[] = [
  {
    name: "Wallpaper",
    text: "Mono-yellow, faintly patterned, slightly stained. It has to look like it has been there for decades and that nobody chose it.",
  },
  {
    name: "Carpet",
    text: "Worn, beige-brown and damp-looking. The carpet is half of the smell and half of the sound of the place.",
  },
  {
    name: "Light",
    text: "Recessed fluorescent panels, too bright and never quite even. Some flicker. All of them hum.",
  },
  {
    name: "Sound",
    text: "The buzz of the lights and almost nothing else. Silence is what makes the hum unbearable.",
  },
  {
    name: "Layout",
    text: "Rooms and corridors that repeat without logic. No windows, no landmarks, no obvious way back.",
  },
  {
    name: "Scale",
    text: "Long sightlines and doorways that open onto more of the same, so the space feels far bigger than it is.",
  },
];

const faq: { q: string; a: string }[] = [
  {
    q: "Is this a game, a film set or VR?",
    a: "None of those. Project Nosta is a physical space: real walls, real carpet, real lights.",
  },
  {
    q: "Where will it be?",
    a: "The location hasn't been announced yet.",
  },
  {
    q: "What happens on 10.10.2028?",
    a: "At 13:00 the final look of the Backrooms will be revealed for the first time.",
  },
  {
    q: "Is it scary?",
    a: "The Backrooms were never about jump scares. They're about atmosphere: the feeling of being somewhere you shouldn't be, with no one else around.",
  },
  {
    q: "Is it connected to the Backrooms movie?",
    a: "Yes. Project Nosta is built in partnership with the Backrooms movie.",
  },
];

function Section({ index, title, children }: { index: string; title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-ink py-10 sm:grid-cols-12 sm:gap-8 sm:py-14">
      <div className="flex items-baseline gap-4 sm:col-span-4 sm:flex-col sm:gap-2">
        <span className="text-sm tabular-nums text-ink/55">{index}</span>
        <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">{title}</h2>
      </div>
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed sm:col-span-8">{children}</div>
    </section>
  );
}

export default function About() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-7xl flex-col px-6 py-6 sm:px-10 sm:py-8">
      <SiteHeader />

      <div className="pt-20 pb-16 sm:pt-32 sm:pb-24">
        <p className="mb-6 text-sm text-ink/55">About</p>
        <h1 className="text-[14vw] leading-[0.9] font-medium tracking-[-0.04em] sm:text-[9vw] xl:text-[8.5rem]">
          Project Nosta
        </h1>
        <p className="mt-10 max-w-3xl text-2xl leading-snug tracking-tight sm:text-3xl">
          Luan Kenning is building the Backrooms in real life: the endless yellow rooms from the internet, as a
          physical place you can walk into. Made in partnership with the Backrooms movie.
        </p>
      </div>

      <Section index="01" title="The project">
        <p>
          Project Nosta takes the Backrooms off the screen and into the real world. It isn&apos;t a themed photo
          corner or a room with yellow paint. It&apos;s a full build of the space as people imagine it, with the
          carpet, the light, the hum and the feeling that it goes on forever.
        </p>
        <p>
          Project Nosta is made in partnership with the Backrooms movie.
        </p>
        <p>
          The Backrooms have been seen millions of times as images, videos and games. Almost nobody has stood inside
          them. That&apos;s the point of Nosta.
        </p>
      </Section>

      <Section index="02" title="What are the Backrooms?">
        <p>
          The Backrooms started in May 2019 as a single photo posted to 4chan&apos;s paranormal board: an empty,
          yellow, carpeted office space lit by fluorescent tubes. Someone replied with a caption describing a place
          you end up in if you &ldquo;noclip out of reality&rdquo;, with the stench of old moist carpet, the madness
          of mono-yellow, the endless background noise of fluorescent lights and roughly six hundred million square
          miles of randomly segmented empty rooms.
        </p>
        <p>
          It spread fast. Online communities wrote whole wikis of &ldquo;levels&rdquo;, the original space became
          known as Level 0, and in 2022 Kane Pixels&apos; found-footage series on YouTube brought it to a huge new
          audience. Today it&apos;s one of the best-known examples of a <em>liminal space</em>: a place that feels
          in between, familiar and wrong at the same time.
        </p>
      </Section>

      <Section index="03" title="Why build it">
        <p>
          On a screen the Backrooms are a picture. In person they become something else. You hear the lights before
          you see them, the carpet gives slightly underfoot, the air smells faintly stale and the next doorway looks
          exactly like the last one.
        </p>
        <p>
          A photo can&apos;t give you that. Getting it right means thinking about the senses a screen leaves out:
          sound, smell, temperature, distance and the quiet unease of being alone in a place that doesn&apos;t make
          sense.
        </p>
      </Section>

      <Section index="04" title="The details">
        <p>Level 0 is simple to describe and very hard to get right. These are the details that make it work:</p>
        <dl className="grid gap-x-8 gap-y-6 pt-2 sm:grid-cols-2">
          {details.map((d) => (
            <div key={d.name} className="border-t border-ink/15 pt-4">
              <dt className="text-sm font-medium uppercase tracking-[0.14em]">{d.name}</dt>
              <dd className="mt-2 text-base leading-relaxed text-ink/70">{d.text}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section index="05" title="The team & management">
        <p>
          Project Nosta is conceived and built by <strong className="font-medium">Luan Kenning</strong>, in partnership with{" "}
          <strong className="font-medium">the Backrooms movie</strong> and sponsored by{" "}
          <a href="https://yavqo.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-60">
            Yavqo
          </a>
          .
        </p>

        <dl className="grid gap-x-8 gap-y-4 pt-2 sm:grid-cols-2">
          <div className="border-t border-ink/15 pt-3">
            <dt className="text-xs uppercase tracking-[0.14em] text-ink/55">Creator & Project Lead</dt>
            <dd className="mt-1 text-base font-medium">Luan Kenning</dd>
          </div>
          <div className="border-t border-ink/15 pt-3">
            <dt className="text-xs uppercase tracking-[0.14em] text-ink/55">General Management</dt>
            <dd className="mt-1 text-base font-medium">
              Elaine Moreau{" "}
              <a href="mailto:elainemoreau@yavqo.com" className="text-xs text-ink/55 hover:text-ink transition-colors font-normal block sm:inline">
                elainemoreau@yavqo.com
              </a>
            </dd>
          </div>
          <div className="border-t border-ink/15 pt-3">
            <dt className="text-xs uppercase tracking-[0.14em] text-ink/55">Camera & Photography</dt>
            <dd className="mt-1 text-base font-medium">
              Simon Webb{" "}
              <a href="mailto:simonwebb@yavqo.com" className="text-xs text-ink/55 hover:text-ink transition-colors font-normal block sm:inline">
                simonwebb@yavqo.com
              </a>
            </dd>
          </div>
          <div className="border-t border-ink/15 pt-3">
            <dt className="text-xs uppercase tracking-[0.14em] text-ink/55">Social Media</dt>
            <dd className="mt-1 text-base font-medium">
              Thomas Whitmore{" "}
              <a href="mailto:thomaswhitmore@yavqo.com" className="text-xs text-ink/55 hover:text-ink transition-colors font-normal block sm:inline">
                thomaswhitmore@yavqo.com
              </a>
            </dd>
          </div>
        </dl>

        <p className="pt-2 text-base text-ink/80">
          For general inquiries, email{" "}
          <a href="mailto:contact@luankenning.com" className="underline underline-offset-4 hover:opacity-60">
            contact@luankenning.com
          </a>
          . For management and representation, contact Elaine Moreau at{" "}
          <a href="mailto:elainemoreau@yavqo.com" className="underline underline-offset-4 hover:opacity-60">
            elainemoreau@yavqo.com
          </a>
          . For business inquiries, reach out to{" "}
          <a href="mailto:luan@yavqo.com" className="underline underline-offset-4 hover:opacity-60">
            luan@yavqo.com
          </a>
          .
        </p>
      </Section>

      <Section index="06" title="The reveal">
        <p>
          On <span className="tabular-nums">10 October 2028 at 13:00</span>, the final look of the Backrooms will be
          revealed for the first time.
        </p>
        <p>
          <Link href="/" className="underline underline-offset-4 hover:opacity-60">
            See the countdown →
          </Link>
        </p>
      </Section>

      <Section index="07" title="Questions">
        <dl className="space-y-8">
          {faq.map((item) => (
            <div key={item.q}>
              <dt className="font-medium">{item.q}</dt>
              <dd className="mt-2 text-ink/70">{item.a}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <footer className="mt-auto flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-ink pt-6 text-sm text-ink/55">
        <Sponsor />
        <div className="flex items-center gap-6">
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/impressum" className="transition-opacity hover:opacity-60">
              Impressum
            </Link>
            <Link href="/privacy" className="transition-opacity hover:opacity-60">
              Privacy
            </Link>
          </nav>
          <span>© 2026 Luan Kenning</span>
        </div>
      </footer>
    </main>
  );
}
