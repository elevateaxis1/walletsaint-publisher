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

            <nav className="hidden gap-5 text-sm font-semibold text-slate-700 md:flex">
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

      <section className="border-b border-green-950 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.18),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.14),transparent_26%),linear-gradient(135deg,#052e1b,#073b24_45%,#031f14)] text-white">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
            WalletSaint
          </p>
          <h1 className="mt-2 max-w-4xl text-5xl font-black tracking-tight text-white md:text-6xl">
            Personal finance decisions, explained before you commit.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-emerald-50/85">
            Retirement, advisor, tax, insurance, debt, and investing guides for readers comparing major financial choices.
          </p>
<div className="mt-8 flex max-w-2xl items-center gap-3 rounded-2xl border border-white/15 bg-white/12 p-2 shadow-2xl backdrop-blur">
  <input
    type="text"
    placeholder="What are you trying to figure out?"
    className="flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-emerald-50/60"
  />
  <button className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-green-950 shadow-lg hover:bg-emerald-400">
    Search
  </button>
</div>
        </div>
      </section>
 <section className="border-b border-slate-200 bg-[#f4f7f3]">
        <div className="mx-auto max-w-6xl px-5 pt-6 pb-10">
          <h2 className="text-3xl font-black tracking-tight">Compare Popular Options</h2>

          <div className="mt-6 grid gap-x-8 gap-y-2 md:grid-cols-3">
            {offers.map((offer) => (
              <div
                key={offer.title}
                className="group rounded-2xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/70 p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
              >
                <h3 className="text-lg font-black text-slate-950 group-hover:text-green-700">
  {offer.title}
</h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
  {offer.desc}
</p>
<p className="mt-5 text-sm font-black text-green-700">
  {offer.cta} →
</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-10 lg:grid-cols-[1.45fr_0.85fr]">
        <a href={`/articles/${lead.slug}`} className="block border-b border-slate-300 pb-8 lg:border-b-0">
          <div className="h-72 rounded-sm bg-gradient-to-br from-green-100 via-slate-100 to-white" />
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

          <div className="rounded-sm border border-slate-300 bg-white p-5">
            <h4 className="text-lg font-black">Compare popular options</h4>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Start with the category you want to review.
            </p>
            <button className="mt-4 w-full rounded-md bg-slate-950 px-4 py-3 text-sm font-bold text-white">
              Find a Financial Advisor
            </button>
          </div>
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