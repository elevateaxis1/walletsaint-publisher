import { funnels, answerOptions } from "@/data/funnels";

function RmdDisclosure() {
  return (
    <div className="mt-4 rounded-2xl border border-slate-700/45 bg-slate-900/25 p-4 text-xs leading-6 text-slate-400">
      <p className="font-bold text-slate-300">RMD Strategy Disclosure</p>
      <p className="mt-3">
        “Little known RMD strategies” refers to IRS-allowed distribution and retirement-planning options that may include Qualified Charitable Distributions, Roth conversions, Qualified Longevity Annuity Contracts, and multi-year withdrawal planning. These strategies may be underutilized by some retirees, but they are not appropriate for every investor.
      </p>
      <p className="mt-3">
        Individual circumstances vary. Tax outcomes may depend on income, age, account type, assets, goals, and current retirement rules. Tax laws and retirement rules may change. Consult a qualified financial or tax advisor before making decisions regarding retirement accounts, withdrawals, or Required Minimum Distributions.
      </p>
    </div>
  );
}

function AdvisorMatchingDisclosure() {
  return (
    <div className="mt-4 rounded-2xl border border-slate-700/45 bg-slate-900/25 p-4 text-xs leading-6 text-slate-400">
      <p className="font-bold text-slate-300">Advisor Matching Disclosure</p>
      <p className="mt-3">
        WalletSaint is an educational and comparison platform. This page may connect users with advisor-matching services or partners. Matching may be based on survey responses, stated investable assets, preferences, location, and advisor availability.
      </p>
      <p className="mt-3">
        Some advisor profiles, partners, or results may receive prioritized placement due to advertising relationships or compensation arrangements. Content is not individualized financial, tax, legal, or investment advice.
      </p>
    </div>
  );
}

export default async function FunnelPage({
  params,
}: {
  params: Promise<{ variant: string }>;
}) {
  const { variant } = await params;
  const funnel = funnels[variant as keyof typeof funnels];

  if (!funnel) {
    return (
      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="text-3xl font-bold">Page not found</h1>
      </main>
    );
  }

  const isRmd = funnel.rmd;

  return (
    <main className="min-h-screen bg-[#f5f5f2] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="/" className="flex items-center">
            <img src="/wslogo.png" alt="WalletSaint" className="h-12 w-auto" />
          </a>

          {funnel.logo && (
            <div className="flex items-center gap-3">
              <span className="hidden text-xs font-black uppercase tracking-[0.16em] text-slate-400 sm:inline">
                In partnership with
              </span>

              <div className="flex h-11 max-w-[190px] items-center rounded-xl border border-slate-200 bg-slate-950 px-4 shadow-sm">
                <img
                  src={funnel.logo}
                  alt={funnel.partner}
                  className="max-h-7 w-auto max-w-[155px] object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </header>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(74,222,128,0.20),transparent_25%),radial-gradient(circle_at_75%_40%,rgba(16,185,129,0.18),transparent_28%),linear-gradient(135deg,#052e1b,#0b3d2e_45%,#031f14)] text-white before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(255,255,255,0.10)_1px,transparent_1px)] before:bg-[length:30px_30px] before:opacity-[0.18]">
        <div className="relative z-10 mx-auto grid max-w-6xl gap-5 px-5 py-5 lg:grid-cols-[0.86fr_0.82fr] lg:items-center lg:py-12">
          <div>
            <p className="inline-flex rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-200 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em]">
              {isRmd ? "IRS-Allowed RMD Planning Questions" : "Financial Advisor Comparison"}
            </p>

            <h1 className="mt-3 max-w-3xl text-[2rem] font-black leading-[1.03] tracking-tight sm:mt-4 sm:text-4xl md:text-5xl">
              {isRmd
                ? "See which RMD planning questions may be worth discussing with an advisor."
                : funnel.headline}
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-emerald-50/85 sm:mt-4 sm:text-base sm:leading-7">
              {isRmd
                ? "Required Minimum Distributions can affect taxes, income, and withdrawal timing. Start with one quick question."
                : funnel.subheadline}
            </p>

          </div>

          <div className="-mt-4 rounded-[1.75rem] border border-white/10 bg-white p-4 text-slate-950 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:p-5 md:p-7 lg:-mt-6 lg:rounded-[2rem]">
            <p className="text-xs font-black uppercase tracking-[0.20em] text-green-700">
              Let’s get started
            </p>

            <h2 className="mt-2 text-[1.65rem] font-black leading-tight tracking-tight sm:text-2xl md:text-3xl">
              {funnel.question}
            </h2>

            <div className="mt-4 grid gap-2.5 sm:mt-6 sm:gap-3">
              {answerOptions.map((option) => (
                <button
                  key={option}
                  className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-4 text-left text-base font-black text-slate-950 shadow-sm transition hover:border-green-500 hover:bg-green-50 hover:shadow-md sm:px-5 sm:py-5"
                >
                  <span>{option}</span>
                  <span className="text-green-700 transition group-hover:translate-x-1">
                    →
                  </span>
                </button>
              ))}
            </div>

            <p className="mt-4 text-[11px] leading-5 text-slate-500 sm:mt-5 sm:text-xs sm:leading-6">
              Your answers help determine which advisor comparison path may be most relevant.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-[#f5f5f2] p-5">
            <p className="text-sm font-black text-slate-950">Quick start</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Begin with one retirement-planning question.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-[#f5f5f2] p-5">
            <p className="text-sm font-black text-slate-950">Comparison focused</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Built to help readers evaluate advisor-matching options.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-[#f5f5f2] p-5">
            <p className="text-sm font-black text-slate-950">Disclosure first</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Educational content only. Not individualized financial advice.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-5 py-8 text-slate-400">
        <div className="mx-auto max-w-6xl">
          <div>
            <p className="text-lg font-black text-white">{funnel.brand}</p>
            <p className="mt-3 max-w-4xl text-sm leading-6">
              WalletSaint helps readers compare financial topics, advisor-matching options, and retirement-planning questions before choosing a provider, product, or plan.
            </p>
          </div>

          {isRmd && <RmdDisclosure />}
          <AdvisorMatchingDisclosure />

          <div className="mt-8 border-t border-slate-700 pt-6 text-xs leading-6 text-slate-500">
            <p>
              © WalletSaint. Privacy Policy · Terms of Use · Advertiser Disclosure
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}