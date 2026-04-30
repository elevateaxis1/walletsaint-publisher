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

const guides = [
  "I’m 63 With $700K — Could Timing Create a Tax Mistake?",
  "Roth Conversion Timing: What Retirees Often Miss",
  "Do You Need a Financial Advisor Before You Retire?",
  "Debt Consolidation: When It May Actually Help",
  "Why Auto Insurance Rates Change More Than You Think",
  "Retirement Planning Mistakes That Catch People Off Guard",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f7f9] text-slate-950">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-8">
            <img src="/wslogo.png" alt="WalletSaint" className="h-14 w-auto" />

            <nav className="hidden gap-5 text-sm font-medium text-slate-600 md:flex">
              <span>Advisors</span>
              <span>Retirement</span>
              <span>Taxes</span>
              <span>Insurance</span>
              <span>Debt</span>
              <span>Learn</span>
            </nav>
          </div>

          <button className="rounded-xl bg-green-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-800">
            Compare Options
          </button>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-gradient-to-b from-green-50 to-white">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Personal finance decisions, simplified
          </p>

          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
            Compare Financial Options Before You Make a Decision
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            WalletSaint helps readers review advisor, retirement, tax, insurance,
            debt, and investing decisions through clear guides and comparison tools.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm">
              Find a Financial Advisor
            </button>
            <button className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900">
              Compare Auto Insurance
            </button>
            <button className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900">
              Explore Debt Options
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="text-2xl font-bold">Compare Popular Options</h2>
        <p className="mt-1 text-sm text-slate-600">
          Start with the financial decision you want to review.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className={`rounded-2xl border border-slate-200 ${offer.accent} p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md`}
            >
              <h3 className="text-lg font-bold">{offer.title}</h3>
              <p className="mt-2 min-h-16 text-sm leading-6 text-slate-600">
                {offer.desc}
              </p>
              <div className="mt-5 text-sm font-bold text-slate-950">
                {offer.cta} →
              </div>
            </div>
          ))}
        </div>
      </section>

     <section className="mx-auto max-w-6xl px-5 pb-12">
  <h2 className="text-2xl font-bold">Featured Guides</h2>
  <p className="mt-1 text-sm text-slate-600">
    Professional guides and advertorial-style resources for common money decisions.
  </p>

  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {[
  { title: "I’m 63 With $700K — Could Timing Create a Tax Mistake?", slug: "63-700k-tax-mistake" },
  { title: "Roth Conversion Timing: What Retirees Often Miss", slug: "roth-conversion-timing" },
  { title: "Do You Need a Financial Advisor Before You Retire?", slug: "need-financial-advisor-before-retire" },
  { title: "RMDs and Retirement Taxes: What to Review", slug: "rmd-retirement-taxes" },
  { title: "Social Security Timing: What People Often Miss", slug: "social-security-timing" },
  { title: "Retirement Income Planning Mistakes That Catch People Off Guard", slug: "retirement-income-mistakes" },
].map((article) => (
      <a
        key={article.slug}
        href={`/articles/${article.slug}`}
        className="block"
      >
        <article className="min-h-[260px] rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <div className="mb-4 h-28 rounded-xl bg-gradient-to-br from-green-100 to-slate-100" />
          <h3 className="text-base font-bold leading-6">{article.title}</h3>
          <p className="mt-3 text-sm font-bold text-green-700">
            Read the guide →
          </p>
        </article>
      </a>
    ))}
  </div>
</section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-5 py-10 text-center">
          <h2 className="text-2xl font-bold">
            A Financial Resource Built for Real Decisions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            WalletSaint provides educational guides and comparison tools to help
            readers better understand financial decisions before choosing
            products, services, or professional advice.
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-950 px-5 py-8 text-center text-xs leading-6 text-slate-400">
        <div className="mx-auto max-w-4xl">
          <p className="font-semibold text-white">WalletSaint</p>
          <p className="mt-2">
            WalletSaint is an educational and comparison platform. We may receive
            compensation from partners featured on this site. Content is not
            individualized financial, tax, or investment advice.
          </p>
        </div>
      </footer>
    </main>
  );
}