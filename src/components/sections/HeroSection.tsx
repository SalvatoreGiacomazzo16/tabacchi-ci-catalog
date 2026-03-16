import { Badge } from '../ui/Badge';

type HeroSectionProps = {
  title: string;
  description: string;
  highlights: string[];
};

export function HeroSection({ title, description, highlights }: HeroSectionProps) {
  return (
    <section
      id="overview"
      className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm"
    >
      <div className="grid gap-10 p-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:p-12">
        <div className="space-y-6">
          <Badge>Frontend starter</Badge>

          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">{description}</p>
          </div>
        </div>

        <div id="structure" className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
          <p className="text-sm font-semibold text-stone-950">Starter focus</p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-600">
            {highlights.map((item) => (
              <li key={item} className="rounded-xl border border-stone-200 bg-white px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        id="next"
        className="border-t border-stone-200 bg-stone-950 px-8 py-6 text-sm text-stone-200 lg:px-12"
      >
        Replace the placeholders with features as the project grows; the structure is already in
        place.
      </div>
    </section>
  );
}
