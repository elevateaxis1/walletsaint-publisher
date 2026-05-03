const offers = [
  {
    title: "Financial Advisors",
    desc: "Compare advisor options before making major retirement decisions.",
    cta: "Compare Advisors",
    accent: "bg-green-50",
icon: "advisor",
  },
  {
    title: "Retirement Planning",
    desc: "Review income, timing, tax, and withdrawal decisions before you commit.",
    cta: "Explore Retirement",
    accent: "bg-emerald-50",
icon: "retirement",
  },
  {
    title: "Tax Strategy",
    desc: "Understand where Roth conversions, RMDs, and timing may create tax surprises.",
    cta: "Review Tax Topics",
    accent: "bg-lime-50",
icon: "tax",
  },
  {
    title: "Auto Insurance",
    desc: "Compare available options before renewing your current policy.",
    cta: "Compare Rates",
    accent: "bg-sky-50",
icon: "insurance",
  },
  {
    title: "Debt Consolidation",
    desc: "Explore ways to simplify payments and compare debt relief options.",
    cta: "See Options",
    accent: "bg-violet-50",
icon: "debt",
  },
  {
    title: "Investing",
    desc: "Evaluate portfolio decisions, risk, income, and long-term planning.",
    cta: "Learn More",
    accent: "bg-slate-100",
icon: "investing",
  },
];

const articles = [
  {
    title: "I’m 63 With $700K — Could Timing Create a Tax Mistake?",
    slug: "63-700k-tax-mistake",
    category: "RETIREMENT",
    image: "/articles/retirement-tax.jpg",
  },
  {
    title: "Roth Conversion Timing: What Retirees Often Miss",
    slug: "roth-conversion-timing",
    category: "TAXES",
    image: "/articles/roth-conversion.jpg",
  },
  {
    title: "Do You Need a Financial Advisor Before You Retire?",
    slug: "need-financial-advisor-before-retire",
    category: "ADVISORS",
    image: "/articles/financial-advisor.jpg",
  },
  {
    title: "RMDs and Retirement Taxes: What to Review",
    slug: "rmd-retirement-taxes",
    category: "RETIREMENT",
    image: "/articles/rmd-taxes.jpg",
  },
  {
    title: "Social Security Timing: What People Often Miss",
    slug: "social-security-timing",
    category: "RETIREMENT",
    image: "/articles/social-security.jpg",
  },
  {
    title: "Retirement Income Planning Mistakes That Catch People Off Guard",
    slug: "retirement-income-mistakes",
    category: "RETIREMENT",
    image: "/articles/retirement-income.jpg",
  },
];
function OfferIcon({ type }: { type: string }) {
  const iconClass = "h-5 w-5 text-emerald-300";

  if (type === "advisor") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="2" />
        <path d="M4 21a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "retirement") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
        <path d="M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 18c1-4 3-7 5-9 2 2 4 5 5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 9V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "tax") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
        <path d="M7 17 17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="16" r="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "insurance") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
        <path d="M4 13h16l-2-5H6l-2 5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M6 13v4M18 13v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="8" cy="17" r="1.5" fill="currentColor" />
        <circle cx="16" cy="17" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (type === "debt") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
        <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M4 10h16M7 15h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass}>
      <path d="M5 19V9M12 19V5M19 19v-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 19h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
export default function Home() {
  const lead = articles[0];
  const secondary = articles.slice(1, 3);
  const more = [
  articles[2],
  articles[3],
  articles[1],
];

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

<button
  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm md:hidden"
  aria-label="Open menu"
>
  <span className="block h-0.5 w-6 rounded-full bg-slate-800 before:block before:h-0.5 before:w-6 before:-translate-y-2 before:rounded-full before:bg-slate-800 before:content-[''] after:block after:h-0.5 after:w-6 after:translate-y-1.5 after:rounded-full after:bg-slate-800 after:content-['']" />
</button>

<button className="hidden rounded-md bg-green-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-green-800 md:block">
  Compare Options
</button>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-green-950 bg-[radial-gradient(circle_at_18%_18%,rgba(74,222,128,0.18),transparent_26%),radial-gradient(circle_at_82%_35%,rgba(16,185,129,0.14),transparent_28%),linear-gradient(135deg,#0b3d2e,#0e4a38_48%,#082c22)] text-white before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_1px,transparent_1px)] before:bg-[length:34px_34px] before:opacity-[0.22] after:absolute after:inset-x-0 after:bottom-0 after:h-32 after:bg-gradient-to-t after:from-black/25 after:to-transparent">
  <div className="relative z-10 mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:py-12 lg:grid-cols-[1fr_1fr] lg:items-center">
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-200/80">
  Built for real financial decisions
</p>

<p className="mt-3 text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
  WalletSaint
</p>

      <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
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

    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {offers.map((offer) => (
        <div
          key={offer.title}
          className="group min-h-[150px] rounded-2xl border border-white/10 bg-emerald-700/25 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-md transition hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-emerald-600/30 sm:min-h-[190px] sm:p-5"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg shadow-inner sm:h-11 sm:w-11">
  <OfferIcon type={offer.icon} />
</div>
          <h3 className="text-base font-black text-white sm:text-lg">{offer.title}</h3>
          <p className="mt-2 hidden text-xs leading-5 text-emerald-50/80 sm:block sm:text-sm sm:leading-6">
  {offer.desc}
</p>
          <p className="mt-4 text-xs font-black text-emerald-300 sm:text-sm">
  {offer.cta} →
</p>
        </div>
      ))}
    </div>
  </div>
</section>

   <section className="mx-auto grid max-w-6xl gap-10 px-5 py-10 lg:grid-cols-[1.45fr_0.85fr]">
  <a href={`/articles/${lead.slug}`} className="block">
    <img
  src={lead.image}
  alt={lead.title}
  className="h-72 w-full rounded-2xl object-cover shadow-sm"
 />
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
              <img
  src={article.image}
  alt={article.title}
  className="h-36 w-full rounded-xl object-cover"
/>
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