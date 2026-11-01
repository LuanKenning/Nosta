import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Impressum / Legal Notice",
  description: "Official Impressum, legal notice, and operator information for Project Nosta.",
  alternates: {
    canonical: "/impressum",
  },
};

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-3 border-t border-ink py-8 sm:grid-cols-12 sm:gap-8">
      <h2 className="font-medium sm:col-span-4">{title}</h2>
      <div className="max-w-2xl space-y-4 leading-relaxed sm:col-span-8">{children}</div>
    </section>
  );
}

export default function Impressum() {
  return (
    <PageShell eyebrow="Legal" title="Impressum">
      <div>
        <Block title="Service Provider & Operator">
          <p>
            Luan Kenning
            <br />
            Yttervägen 46
            <br />
            141 68 Stockholm
            <br />
            Sweden
          </p>
        </Block>

        <Block title="Management & Production">
          <ul className="space-y-3">
            <li>
              <span className="text-xs uppercase tracking-wider text-ink/55 block">General Management</span>
              <span className="font-medium">Elaine Moreau</span>{" "}
              (
              <a href="mailto:elainemoreau@yavqo.com" className="underline underline-offset-4 hover:opacity-60">
                elainemoreau@yavqo.com
              </a>
              )
            </li>
            <li>
              <span className="text-xs uppercase tracking-wider text-ink/55 block">Camera & Photography</span>
              <span className="font-medium">Simon Webb</span>{" "}
              (
              <a href="mailto:simonwebb@yavqo.com" className="underline underline-offset-4 hover:opacity-60">
                simonwebb@yavqo.com
              </a>
              )
            </li>
            <li>
              <span className="text-xs uppercase tracking-wider text-ink/55 block">Social Media</span>
              <span className="font-medium">Thomas Whitmore</span>{" "}
              (
              <a href="mailto:thomaswhitmore@yavqo.com" className="underline underline-offset-4 hover:opacity-60">
                thomaswhitmore@yavqo.com
              </a>
              )
            </li>
          </ul>
        </Block>

        <Block title="Contact">
          <p>
            General Contact:{" "}
            <a href="mailto:contact@luankenning.com" className="underline underline-offset-4 hover:opacity-60">
              contact@luankenning.com
            </a>
            <br />
            Management:{" "}
            <a href="mailto:elainemoreau@yavqo.com" className="underline underline-offset-4 hover:opacity-60">
              elainemoreau@yavqo.com
            </a>
            <br />
            Business Inquiries:{" "}
            <a href="mailto:luan@yavqo.com" className="underline underline-offset-4 hover:opacity-60">
              luan@yavqo.com
            </a>
          </p>
        </Block>

        <Block title="Responsible for Content">
          <p>
            Luan Kenning
            <br />
            Yttervägen 46, 141 68 Stockholm, Sweden
          </p>
        </Block>

        <Block title="Information according to EU Regulations">
          <p>
            Information provided pursuant to Directive 2000/31/EC of the European Parliament and of the Council
            (e-Commerce Directive) and the Swedish Electronic Commerce Act (Lag 2002:562 om elektronisk handel).
            For visitors from Germany, this notice also serves as an Impressum pursuant to § 5 DDG (Digitale-Dienste-Gesetz).
          </p>
        </Block>

        <Block title="Disclaimer for Content">
          <p>
            The contents of this website have been prepared with the utmost care. However, we cannot guarantee the
            accuracy, completeness, or topicality of all contents. As a service provider, we are responsible for our
            own content on these pages under applicable general laws.
          </p>
        </Block>

        <Block title="Disclaimer for External Links">
          <p>
            This website contains links to external third-party websites over whose content we have no control. We
            cannot assume any liability for these external contents. The respective provider or operator of the pages
            is always responsible for the content of the linked pages.
          </p>
        </Block>

        <Block title="Copyright & Intellectual Property">
          <p>
            The content and works published on this website are subject to copyright law. Third-party trademarks and
            logos, including the Yavqo logo, belong to their respective owners.
          </p>
        </Block>
      </div>
    </PageShell>
  );
}
