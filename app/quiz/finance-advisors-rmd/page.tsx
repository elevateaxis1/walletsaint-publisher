const answerOptions = ["11+", "6-10", "2-5", "Less Than 2", "Already retired"];

const trackingUrl = "https://link.walletsaint.com/click";

export default function FinanceAdvisorsRmdQuizPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
                              <header className="border-b border-slate-200 bg-white px-5 py-3 shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-start gap-4">
          <img
            src="/partners/walletsaint-logo-2026.png"
            alt="WalletSaint"
            className="h-10 w-auto object-contain"
          />

          <span className="text-xl font-semibold text-slate-950">+</span>

          <div className="flex h-8 items-center rounded-md bg-[#050817] px-3 shadow-sm">
            <span className="font-serif text-[18px] font-bold leading-none text-white">
              Finance{" "}
              <span className="text-[#ef3f4c]">Advisors</span>
            </span>
          </div>
        </div>
      </header>

      <section className="relative min-h-[720px] overflow-hidden bg-[#f7faf7] px-4 pt-16 text-center sm:pt-20 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_22%_18%,rgba(16,185,129,0.10),transparent_24%),radial-gradient(circle_at_78%_26%,rgba(34,197,94,0.08),transparent_22%)] before:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(#0b3d2e_1px,transparent_1px)] after:bg-[length:28px_28px] after:opacity-[0.06] after:content-['']">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[520px] overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-[430px] bg-[#dceee4]" />
          <div className="absolute inset-x-0 bottom-[210px] h-[220px] bg-[#bdd9c9] opacity-95 [clip-path:polygon(0_60%,8%_38%,18%_48%,28%_30%,39%_52%,50%_35%,62%_50%,74%_28%,88%_44%,100%_24%,100%_100%,0_100%)]" />
          <div className="absolute inset-x-0 bottom-[150px] h-[190px] bg-[#93bda7] opacity-95 [clip-path:polygon(0_56%,12%_46%,25%_62%,38%_40%,52%_58%,65%_36%,78%_54%,100%_42%,100%_100%,0_100%)]" />
          <div className="absolute inset-x-0 bottom-[70px] h-[170px] bg-[#628d76] [clip-path:polygon(0_52%,15%_68%,30%_48%,47%_70%,65%_44%,82%_62%,100%_50%,100%_100%,0_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[145px] bg-[#163b2d] [clip-path:polygon(0_42%,7%_60%,14%_48%,21%_72%,28%_50%,36%_76%,45%_58%,56%_80%,68%_54%,80%_72%,91%_50%,100%_68%,100%_100%,0_100%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <h1 className="mx-auto max-w-2xl text-[22px] font-normal leading-snug tracking-tight text-slate-950 sm:text-2xl md:text-[28px]">
            See Which IRS-Allowed RMD Strategies May Be Worth Discussing — Get Matched With an Advisor
          </h1>

          <div className="mx-auto mt-7 max-w-[500px] overflow-hidden rounded-xl border border-slate-300 bg-white shadow-xl">
            <div className="px-5 py-5">
              <p className="text-xl font-bold text-slate-500 sm:text-2xl">
                Let&apos;s get started:
              </p>

              <h2 className="mt-1 text-[24px] font-black leading-tight text-black sm:text-[28px]">
                How many years do you have before retirement?
              </h2>
            </div>

            <div className="divide-y divide-slate-300 border-t border-slate-300">
              {answerOptions.map((option) => (
                <a
                  key={option}
                  href={trackingUrl}
                  className="flex w-full items-center gap-5 bg-white px-7 py-4 text-left text-[21px] font-black text-black transition hover:bg-emerald-50 sm:px-8 sm:py-4 sm:text-[22px]"
                >
                  <span className="h-7 w-7 shrink-0 rounded-full border-[4px] border-slate-300" />
                  <span>{option}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07120d] px-5 py-8 text-center text-white">
        <img
          src="/partners/walletsaint-logo-2026.png"
          alt="WalletSaint"
          className="mx-auto h-8 w-auto rounded-md bg-white px-3 py-1.5"
        />

        <p className="mx-auto mt-5 max-w-3xl text-xs leading-6 text-slate-300">
          WalletSaint is an educational and comparison platform. This page may help users review advisor-matching options based on survey responses, stated investable assets, preferences, and advisor availability.
        </p>
      </section>

      <footer className="bg-[#050b08] px-5 py-7 text-xs leading-6 text-slate-500">
        <div className="mx-auto max-w-4xl space-y-4">
          <p>
            Disclaimer: “Little known RMD strategies” refers to IRS-allowed distribution and planning options, including Qualified Charitable Distributions, Roth conversions, Qualified Longevity Annuity Contracts, and multi-year withdrawal planning. These approaches may not be appropriate for every investor. Individual circumstances vary, and tax outcomes depend on factors such as income, age, account type, assets, and goals. Consult a qualified financial or tax advisor before making decisions regarding retirement accounts or Required Minimum Distributions.
          </p>

          <p>
            Some advisor profiles or partner placements may receive prioritized placement due to advertising relationships or compensation arrangements. Content is educational and not individualized financial, tax, legal, or investment advice.
          </p>

          <p>
  © 2026 WalletSaint.{" "}
  <a href="/privacy" className="hover:text-slate-300">
    Privacy Policy
  </a>{" "}
  ·{" "}
  <a href="/terms" className="hover:text-slate-300">
    Terms of Use
  </a>{" "}
  ·{" "}
  <a href="/advertiser-disclosure" className="hover:text-slate-300">
    Advertiser Disclosure
  </a>
</p>
        </div>
      </footer>
    </main>
  );
}