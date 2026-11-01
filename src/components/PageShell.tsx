import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

/** Shared shell for text pages: header, page title, content, footer. */
export default function PageShell({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-7xl flex-col px-6 py-6 sm:px-10 sm:py-8">
      <SiteHeader />
      <div className="pt-20 pb-12 sm:pt-32 sm:pb-16">
        {eyebrow && <p className="mb-6 text-sm text-ink/55">{eyebrow}</p>}
        <h1 className="text-[14vw] leading-[0.9] font-medium tracking-[-0.04em] sm:text-[9vw] xl:text-[8.5rem]">
          {title}
        </h1>
      </div>
      <div className="pb-20">{children}</div>
      <SiteFooter />
    </main>
  );
}

/** Highlights information that still has to be filled in before going live. */
export function Placeholder({ children }: { children: React.ReactNode }) {
  return <mark className="bg-yellow-300/70 px-1 text-ink">[{children}]</mark>;
}
