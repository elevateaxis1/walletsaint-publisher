import { corporateLinks } from "@/data/corporateLinks";

const focusAreas = [
  {
    number: "01",
    title: "Financial Advisors",
    description:
      "Understand what to compare before choosing an advisor for retirement, investments, or long-term planning.",
    label: "Advisor comparison",
    icon: "advisor",
    href: corporateLinks.advisors,
  },
  {
    number: "02",
    title: "Retirement Planning",
    description:
      "Review income, withdrawal timing, Social Security, and other decisions that shape retirement.",
    label: "Retirement decisions",
    icon: "retirement",
    href: corporateLinks.retirement,
  },
  {
    number: "03",
    title: "Tax-Aware Planning",
    description:
      "Learn how Roth conversions, RMDs, and income timing can affect the questions you bring to a professional.",
    label: "Tax considerations",
    icon: "tax",
    href: corporateLinks.taxPlanning,
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
];

function FocusIcon({ type }: { type: string }) {
  const iconClass = "h-6 w-6 text-emerald-700";

  if (type === "advisor") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 21a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "retirement") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
        <path d="M4 19h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 19c1-4 3-7 5-9 2 2 4 5 5 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 10V4M9 6h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <path d="M7 17 17 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="16" r="2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function Home() {
  const lead = articles[0];
  const secondary = articles.slice(1, 3);
  const more = [articles[2], articles[3], articles[1]];

  return (
    <main className="min-h-screen bg-[#f4f5f0] text-[#13251d]">
      <header className="border-b border-[#d9dfd7] bg-[#fbfcf9]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <div className="flex items-center gap-10">
            <img
              src="/partners/walletsaint-logo-2026.png"
              alt="WalletSaint"
              className="h-11 w-auto sm:h-12"
            />
            <nav aria-label="Primary" className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex">
              <span>Advisors</span>
              <span>Retirement</span>
              <span>Tax Planning</span>
              <span>Financial Guides</span>
            </nav>
          </div>

          <a href={corporateLinks.advisors} className="hidden rounded-full bg-[#087443] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#075f38] md:block">
            Compare Advisor Options
          </a>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ccd5ce] bg-white lg:hidden" aria-hidden="true">
            <span className="text-xl font-semibold text-[#164b35]">WS</span>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#0a3b2a] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(52,211,153,0.22),transparent_28%),radial-gradient(circle_at_8%_88%,rgba(34,197,94,0.12),transparent_32%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Financial decisions, made clearer
            </div>

            <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[4.65rem]">
              Make your next financial decision with better questions.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-emerald-50/80 sm:text-xl">
              WalletSaint helps people understand advisor choices, retirement decisions, and tax-aware planning before choosing a path forward.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href={corporateLinks.advisors} className="rounded-full bg-emerald-400 px-6 py-3.5 text-sm font-black text-[#073523] shadow-[0_12px_30px_rgba(16,185,129,0.24)] transition hover:bg-emerald-300">
                Compare Advisor Options
              </a>
              <span className="px-2 text-sm font-semibold text-emerald-100/75">
                Educational guidance. No individualized advice.
              </span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/12 bg-white/[0.08] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.24)] backdrop-blur-md sm:p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Start with the decision</p>
                <p className="mt-2 text-xl font-black">What are you trying to understand?</p>
              </div>
              <span className="hidden rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold text-emerald-100 sm:block">
                3 focus areas
              </span>
            </div>

            <div className="mt-4 grid gap-3">
              {focusAreas.map((area) => (
                <a href={area.href} key={area.title} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#f7faf6] p-4 text-[#13251d] shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg sm:p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100">
                    <FocusIcon type={area.icon} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-700">{area.label}</p>
                    <h2 className="mt-1 text-lg font-black sm:text-xl">{area.title}</h2>
                  </div>
                  <span className="text-2xl text-emerald-700 transition group-hover:translate-x-1">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dce2dc] bg-white">
        <div className="mx-auto grid max-w-7xl divide-y divide-[#dce2dc] px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            ["Focused", "Advisor and retirement decisions"],
            ["Independent", "Educational comparison content"],
            ["Straightforward", "Clear questions before next steps"],
          ].map(([title, description]) => (
            <div key={title} className="py-6 md:px-7 first:md:pl-0 last:md:pr-0">
              <p className="text-sm font-black text-[#087443]">{title}</p>
              <p className="mt-1 text-sm text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="guides" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-8 flex items-end justify-between gap-6 border-b border-[#cfd8d1] pb-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#087443]">Featured guidance</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] sm:text-4xl">Questions worth asking before you act.</h2>
          </div>
          <p className="hidden max-w-sm text-right text-sm leading-6 text-slate-500 md:block">
            Practical educational content for people navigating high-stakes retirement decisions.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.45fr_0.85fr]">
          <a href={"/articles/" + lead.slug} className="group relative min-h-[490px] overflow-hidden rounded-[2rem] bg-[#0b2f22] shadow-[0_22px_60px_rgba(18,51,38,0.16)]">
            <img src={lead.image} alt={lead.title} className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071d15] via-[#0a3021]/55 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">{lead.category}</p>
              <h3 className="mt-3 max-w-3xl text-3xl font-black leading-tight tracking-[-0.03em] sm:text-5xl">{lead.title}</h3>
              <p className="mt-5 text-sm font-black text-emerald-300">Read the guide →</p>
            </div>
          </a>

          <div className="grid gap-4">
            {secondary.map((article) => (
              <a key={article.slug} href={"/articles/" + article.slug} className="group grid min-h-[235px] grid-cols-[0.8fr_1.2fr] overflow-hidden rounded-[1.5rem] border border-[#d8dfd9] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                <img src={article.image} alt={article.title} className="h-full min-h-[235px] w-full object-cover" />
                <div className="flex flex-col justify-between p-5">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#087443]">{article.category}</p>
                    <h3 className="mt-3 text-xl font-black leading-tight tracking-[-0.02em]">{article.title}</h3>
                  </div>
                  <p className="mt-5 text-sm font-black text-[#087443]">Read more →</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#d9e0da] bg-[#e8efe9]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#087443]">How WalletSaint helps</p>
              <h2 className="mt-3 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
                A calmer way to approach complex decisions.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
                We organize the questions, tradeoffs, and terminology so you can have a more informed conversation with a qualified professional.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {focusAreas.map((area) => (
                <article key={area.number} className="rounded-[1.5rem] border border-white/70 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black tracking-[0.18em] text-emerald-700">{area.number}</span>
                    <FocusIcon type={area.icon} />
                  </div>
                  <h3 className="mt-8 text-xl font-black tracking-[-0.02em]">{area.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{area.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="overflow-hidden rounded-[2rem] bg-[#123d2e] text-white shadow-[0_24px_70px_rgba(18,61,46,0.2)]">
          <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Before your next move</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
                Build a clearer picture before choosing an advisor or strategy.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-emerald-50/75">
                Start with the decision in front of you, understand the questions that matter, and compare your available paths.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-3 border-t border-white/10 bg-white/[0.06] p-7 sm:p-10 lg:border-l lg:border-t-0">
              <a href={corporateLinks.advisors} className="rounded-xl bg-emerald-400 px-5 py-4 text-left text-sm font-black text-[#0a3625] transition hover:bg-emerald-300">Financial Advisor Options →</a>
              <a href={corporateLinks.retirement} className="rounded-xl border border-white/15 bg-white/10 px-5 py-4 text-left text-sm font-black text-white transition hover:bg-white/15">Retirement Planning Questions →</a>
              <a href={corporateLinks.taxPlanning} className="rounded-xl border border-white/15 bg-white/10 px-5 py-4 text-left text-sm font-black text-white transition hover:bg-white/15">Tax-Aware Planning Guides →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="mb-7 flex items-end justify-between border-b border-[#cfd8d1] pb-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#087443]">From the editorial desk</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.03em]">More from WalletSaint</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {more.map((article) => (
            <a key={article.slug} href={"/articles/" + article.slug} className="group overflow-hidden rounded-[1.5rem] border border-[#d8dfd9] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="overflow-hidden">
                <img src={article.image} alt={article.title} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#087443]">{article.category}</p>
                <h3 className="mt-3 text-xl font-black leading-tight tracking-[-0.02em]">{article.title}</h3>
                <p className="mt-5 text-sm font-black text-[#087443]">Read the guide →</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-[#07140f] px-5 py-12 text-slate-400 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <img src="/partners/walletsaint-logo-2026.png" alt="WalletSaint" className="h-11 w-auto rounded-md bg-white px-3 py-1.5" />
            <p className="mt-5 max-w-md text-sm leading-7">
              Educational guidance for comparing financial advisors, retirement decisions, and tax-aware planning questions.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold text-white">Focus areas</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={corporateLinks.advisors} className="transition-colors hover:text-white">Financial Advisors</a>
              </li>
              <li>
                <a href={corporateLinks.retirement} className="transition-colors hover:text-white">Retirement Planning</a>
              </li>
              <li>
                <a href={corporateLinks.taxPlanning} className="transition-colors hover:text-white">Tax-Aware Planning</a>
              </li>
              <li>
                <a href="#guides" className="transition-colors hover:text-white">Financial Guides</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold text-white">Legal</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Use</a></li>
              <li><a href="/advertiser-disclosure" className="hover:text-white">Advertiser Disclosure</a></li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800 pt-6 text-xs leading-6 text-slate-500">
          <p>
            WalletSaint is an educational and comparison platform. We may receive compensation from partners featured on this site. Content is not individualized financial, tax, legal, or investment advice.
          </p>
        </div>
      </footer>
    </main>
  );
}
