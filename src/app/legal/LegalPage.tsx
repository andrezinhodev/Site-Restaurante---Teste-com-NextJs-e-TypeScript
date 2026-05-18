import { PageHero } from "@/components/ui/PageHero";

interface LegalPageProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function LegalPage({ title, subtitle, children }: LegalPageProps) {
  return (
    <>
      <article className="container-page max-w-3xl py-12 md:py-16 space-y-6 text-sm text-zinc-600 leading-relaxed">
        {children}
      </article>
    </>
  );
}
