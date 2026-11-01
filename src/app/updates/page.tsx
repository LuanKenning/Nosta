import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { updates } from "@/content/updates";

export const metadata: Metadata = {
  title: "Updates",
  description: "Progress on Project Nosta, the Backrooms built in real life.",
  alternates: {
    canonical: "/updates",
  },
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default function Updates() {
  return (
    <PageShell eyebrow="Build log" title="Updates">
      <ol>
        {updates.map((u, i) => (
          <li key={u.date + u.title} className="grid gap-4 border-t border-ink py-10 sm:grid-cols-12 sm:gap-8 sm:py-14">
            <div className="flex items-baseline gap-4 text-sm text-ink/55 sm:col-span-4 sm:flex-col sm:gap-2">
              <span className="tabular-nums">{String(updates.length - i).padStart(3, "0")}</span>
              <time dateTime={u.date}>{formatDate(u.date)}</time>
            </div>
            <article className="max-w-2xl sm:col-span-8">
              <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">{u.title}</h2>
              <div className="mt-5 space-y-5 text-lg leading-relaxed">
                {u.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </PageShell>
  );
}
