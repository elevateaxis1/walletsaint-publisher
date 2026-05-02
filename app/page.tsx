const offers = [
  {
    title: "Financial Advisors",
    desc: "Compare advisor options before making major retirement decisions.",
    cta: "Compare Advisors",
    accent: "bg-green-50",
  },
  {
    title: "Retirement Planning",
    desc: "Review income, timing, tax, and withdrawal decisions before you commit.",
    cta: "Explore Retirement",
    accent: "bg-emerald-50",
  },
  {
    title: "Tax Strategy",
    desc: "Understand where Roth conversions, RMDs, and timing may create tax surprises.",
    cta: "Review Tax Topics",
    accent: "bg-lime-50",
  },
  {
    title: "Auto Insurance",
    desc: "Compare available options before renewing your current policy.",
    cta: "Compare Rates",
    accent: "bg-sky-50",
  },
  {
    title: "Debt Consolidation",
    desc: "Explore ways to simplify payments and compare debt relief options.",
    cta: "See Options",
    accent: "bg-violet-50",
  },
  {
    title: "Investing",
    desc: "Evaluate portfolio decisions, risk, income, and long-term planning.",
    cta: "Learn More",
    accent: "bg-slate-100",
  },
];

const articles = [
  { title: "I’m 63 With $700K — Could Timing Create a Tax Mistake?", slug: "63-700k-tax-mistake", category: "RETIREMENT" },
  { title: "Roth Conversion Timing: What Retirees Often Miss", slug: "roth-conversion-timing", category: "TAXES" },
  { title: "Do You Need a Financial Advisor Before You Retire?", slug: "need-financial-advisor-before-retire", category: "ADVISORS" },
  { title: "RMDs and Retirement Taxes: What to Review", slug: "rmd-retirement-taxes", category: "RETIREMENT" },
  { title: "Social Security Timing: What People Often Miss", slug: "social-security-timing", category: "RETIREMENT" },
  { title: "Retirement Income Planning Mistakes That Catch People Off Guard", slug: "retirement-income-mistakes", category: "RETIREMENT" },
];

export default function Home() {
  const lead = articles[0];
  const secondary = articles.slice(1, 3);
  const more = articles.slice(3);

  return (
    <main className="min-h-screen bg-[#f5f5f2] text-slate-950">
      <header className="border-b border-slate-300 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-8">
            <img src="/wslogo.png" alt="WalletSaint" className="h-14 w-auto" />

            <nav className="hidden gap-4 text-sm font-semibold text-slate-700 md:flex">
              <span>Advisors</span>
              <span>Retirement</span>
              <span>Taxes</span>
              <span>Insurance</span>
              <span>Debt</span>
              <span>Investing</span>
            </nav>
          </div>

          <button className="rounded-md bg-green-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-green-800">
            Compare Options
          </button>
        </div>
      </header>

      <section className="border-b border-green-950 bg-[radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.12),transparent_30%),linear-gradient(135deg,#0b3d2e,#0e4a38_50%,#082c22)] text-white">
  <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-200/80">
  Built for real financial decisions
</p>

<p className="mt-3 text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
  WalletSaint
</p>

      <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-white md:text-5xl">
        Compare financial options before you make a costly mistake.
      </h1>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50/85">
        WalletSaint helps you compare advisors, retirement strategies, tax moves, insurance, and debt options before choosing a provider, product, or plan.
      </p>

      <div className="mt-8 flex max-w-2xl items-center gap-3 rounded-2xl border border-white/15 bg-white/12 p-2 shadow-2xl backdrop-blur">
        <input
          type="text"
          placeholder="Search articles, topics, and financial tools..."
          className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white outline-none placeholder:text-emerald-50/60"
        />
        <button className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-green-950 shadow-lg hover:bg-emerald-400">
          Search
        </button>
      </div>
    </div>

    <div className="grid gap-4 sm:grid-cols-2">
      {offers.map((offer) => (
        <div
          key={offer.title}
          className="group rounded-2xl border border-white/5 bg-white/5 p-5 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
        >
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-lg">
            →
          </div>
          <h3 className="text-lg font-black text-white">{offer.title}</h3>
          <p className="mt-2 text-sm leading-6 text-emerald-50/80">
            {offer.desc}
          </p>
          <p className="mt-4 text-sm font-black text-emerald-300">
            {offer.cta} →
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

   <section className="mx-auto grid max-w-6xl gap-10 px-5 py-10 lg:grid-cols-[1.45fr_0.85fr]">
  <a href={`/articles/${lead.slug}`} className="block">
    <div className="h-72 rounded-2xl bg-gradient-to-br from-green-100 via-slate-100 to-white shadow-sm" />
    <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-green-700">
      {lead.category}
    </p>
    <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight md:text-5xl">
      {lead.title}
    </h2>
    <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
      Timing, taxes, advisor comparisons, and retirement decisions can overlap in ways people often miss.
    </p>
    <p className="mt-5 text-sm font-bold text-green-700">Read the guide →</p>
  </a>

  <div className="space-y-6">
    <h3 className="border-b border-slate-300 pb-3 mb-4 text-sm font-black uppercase tracking-[0.18em]">
      Latest Guides
    </h3>

    {secondary.map((article) => (
      <a key={article.slug} href={`/articles/${article.slug}`} className="block border-b border-slate-300 pb-6">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-green-700">
          {article.category}
        </p>
        <h4 className="mt-2 text-2xl font-black leading-tight">
          {article.title}
        </h4>
        <p className="mt-3 text-sm font-bold text-green-700">
          Read more →
        </p>
      </a>
    ))}
  </div>
</section>  

      <section className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="border-b border-slate-300 pb-3 text-2xl font-black">
          More From WalletSaint
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {more.map((article) => (
            <a key={article.slug} href={`/articles/${article.slug}`} className="block">
              <div className="h-36 bg-gradient-to-br from-slate-200 to-green-50" />
              <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-green-700">
                {article.category}
              </p>
              <h3 className="mt-2 text-xl font-black leading-tight">
                {article.title}
              </h3>
              <p className="mt-3 text-sm font-bold text-green-700">
                Read the guide →
              </p>
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-300 bg-slate-950 px-5 py-8 text-center text-xs leading-6 text-slate-400">
        <p className="font-bold text-white">WalletSaint</p>
        <p className="mx-auto mt-2 max-w-4xl">
          WalletSaint is an educational and comparison platform. We may receive compensation from partners featured on this site. Content is not individualized financial, tax, or investment advice.
        </p>
      </footer>
    </main>
  );
}