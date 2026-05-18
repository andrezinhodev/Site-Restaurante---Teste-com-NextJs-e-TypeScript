type PageHeroProps = {
  label: string;
  title: string;
  description: string;
};

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-zinc-200 bg-white">
      <div className="container-page py-16 md:py-20">
        <p className="text-sm font-medium uppercase tracking-wider text-orange-500">
          {label}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600">
          {description}
        </p>
      </div>
    </section>
  );
}
