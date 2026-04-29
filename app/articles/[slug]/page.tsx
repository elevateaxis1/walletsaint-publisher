import { articles } from "@/data/articles";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="text-3xl font-bold">Article not found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f6f7f9] text-slate-950">
      <article className="mx-auto max-w-3xl px-5 py-14">

        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
          {article.category}
        </p>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight">
          {article.title}
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          {article.excerpt}
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Key takeaway</h2>
          <p className="mt-3 leading-7 text-slate-700">
            Major financial decisions often involve timing, tradeoffs, and personal circumstances.
          </p>
        </div>

        <section className="mt-10 space-y-6 leading-8 text-slate-700">
          <p>
            Financial decisions can feel straightforward at first, but the details often matter.
          </p>

          <p>
            Before making a major decision, many people compare available options.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-slate-950">
            What to review
          </h2>

          <ul className="list-disc space-y-3 pl-6">
            <li>What decision is being made?</li>
            <li>What timing factors could change the outcome?</li>
            <li>What costs or risks may apply?</li>
          </ul>
        </section>

        <div className="mt-10 rounded-2xl bg-green-700 p-6 text-white">
          <h2 className="text-xl font-bold">Compare your options</h2>
          <button className="mt-5 rounded-xl bg-white px-5 py-3 text-sm font-bold text-green-800">
            See Options
          </button>
        </div>

      </article>
    </main>
  );
}