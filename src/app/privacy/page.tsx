import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data protection information for Project Nosta under GDPR.",
  alternates: {
    canonical: "/privacy",
  },
};

function Block({ index, title, children }: { index: string; title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-3 border-t border-ink py-8 sm:grid-cols-12 sm:gap-8">
      <h2 className="flex gap-4 font-medium sm:col-span-4">
        <span className="tabular-nums text-ink/55">{index}</span>
        {title}
      </h2>
      <div className="max-w-2xl space-y-4 leading-relaxed sm:col-span-8">{children}</div>
    </section>
  );
}

export default function Privacy() {
  return (
    <PageShell eyebrow="Legal" title="Privacy">
      <p className="mb-12 max-w-2xl text-xl leading-snug tracking-tight sm:text-2xl">
        Short version: this site has no cookies, no analytics, no tracking and no sign-up forms. The countdown runs
        entirely in your browser.
      </p>

      <Block index="01" title="Who is responsible">
        <p>
          The controller under the General Data Protection Regulation (GDPR) is Luan Kenning (Yttervägen 46, 141 68 Stockholm, Sweden). Full contact details are
          in the <Link href="/impressum" className="underline underline-offset-4 hover:opacity-60">Impressum / Legal Notice</Link>.
          For privacy questions, email{" "}
          <a href="mailto:contact@luankenning.com" className="underline underline-offset-4 hover:opacity-60">
            contact@luankenning.com
          </a>
          .
        </p>
      </Block>

      <Block index="02" title="Hosting and server logs">
        <p>
          This website is hosted by{" "}
          <a
            href="https://yavqo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-60"
          >
            Yavqo Cloud
          </a>
          . When you visit, the server automatically records technical information your browser sends: your IP address,
          date and time of the request, the page requested, the referring page, and your browser and operating system.
        </p>
        <p>
          This is necessary to reliably deliver the site and maintain system security. The legal basis is our
          legitimate interest in providing a stable and secure website (Art. 6(1)(f) GDPR). Server logs are automatically
          deleted after 7 days.
        </p>
      </Block>

      <Block index="03" title="Cookies and tracking">
        <p>
          This site sets no cookies and uses no analytics, advertising or tracking tools. Nothing is stored on your
          device.
        </p>
      </Block>

      <Block index="04" title="Fonts">
        <p>
          The typefaces on this site are served from our own server. Your browser doesn&apos;t connect to Google or
          any other font provider.
        </p>
      </Block>

      <Block index="05" title="The countdown">
        <p>
          The countdown is calculated in your browser from your device&apos;s clock and time zone. This information is
          not sent to us.
        </p>
      </Block>

      <Block index="06" title="External links">
        <p>
          This site links to other websites, for example our sponsor{" "}
          <a href="https://yavqo.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-60">
            Yavqo
          </a>
          . No data is shared with them unless you click a link. Once you do, their own privacy policy applies.
        </p>
      </Block>

      <Block index="07" title="Your rights">
        <p>Under the GDPR you have the right to:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>access the personal data we hold about you (Art. 15)</li>
          <li>have it corrected (Art. 16) or deleted (Art. 17)</li>
          <li>restrict its processing (Art. 18)</li>
          <li>receive it in a portable format (Art. 20)</li>
          <li>object to processing based on legitimate interest (Art. 21)</li>
        </ul>
        <p>
          To exercise any of these rights, email us at the address above. You also have the right to lodge a complaint
          with a supervisory authority (Art. 77 GDPR), such as the Swedish Data Protection Authority
          (Integritetsskyddsmyndigheten — IMY, Box 8114, 104 20 Stockholm, imy@imy.se) or the authority in the EU
          Member State where you reside.
        </p>
      </Block>

      <Block index="08" title="Changes">
        <p>
          This policy will be updated if the site changes, for example if a newsletter is added. Last updated:{" "}
          <time dateTime="2026-11-01">1 November 2026</time>.
        </p>
      </Block>
    </PageShell>
  );
}
