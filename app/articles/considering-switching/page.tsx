import VoluumTracking from "../../components/VoluumTracking";

const clickUrl = "https://link.walletsaint.com/click";

function CTA({ children = "Take the matching quiz now" }: { children?: string }) {
  return (
    <a
      href={clickUrl}
      className="inline-flex w-full items-center justify-center bg-[#16a34a] px-6 py-4 text-center text-lg font-bold text-white transition hover:bg-[#15803d] sm:w-auto"
    >
      {children}
    </a>
  );
}

export default function ConsideringSwitchingPage() {
  return (
    <main className="bg-white text-slate-950">
      <VoluumTracking />

      <header className="bg-[#07120d] px-5 py-5">
        <div className="mx-auto flex max-w-6xl items-center">
          <img
            src="/partners/walletsaint-logo-2026.png"
            alt="WalletSaint"
            className="h-10 w-auto rounded-md bg-white px-3 py-1.5"
          />
        </div>
      </header>

      <section className="bg-[#07120d] px-5 pb-72 pt-12 text-center text-white">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-7 inline-flex rounded-full border border-[#22c55e] px-5 py-1 text-sm font-medium text-[#22c55e]">
            Advertorial
          </div>

          <h1 className="mx-auto max-w-5xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-[56px] md:leading-[64px]">
            5 Reasons To Consider Switching Your Financial Advisor
          </h1>

          <p className="mt-5 font-serif text-lg text-[#22c55e]">
            June 10, 2026 | 5 min read
          </p>
        </div>
      </section>

      <section className="-mt-60 px-5">
        <div className="mx-auto max-w-5xl overflow-hidden bg-white shadow-2xl">
          <img
            src="https://articles.financeadvisors.com/considering-switching-v7/5b9a38d1-a318-4d4b-a809-0978535a5800.webp"
            alt="Retirement planning discussion"
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      <article className="px-5 py-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_320px]">
          <div className="mx-auto max-w-3xl font-serif text-[18px] leading-8 text-slate-700">
            <p>
              <strong className="font-sans text-xl text-slate-950">
                The Quiet Risk in Staying Loyal to a Financial Plan That No
                Longer Fits You
              </strong>
            </p>

            <p>You’ve done everything right.</p>

            <p>
              You worked hard, saved aggressively, and followed the advice you
              were given. But something’s changed, and it’s not just the
              markets.
            </p>

            <p>It’s you.</p>

            <p>
              Your financial priorities have shifted from growth to
              protection… from building wealth to preserving it. Yet your plan,
              your strategy, your asset mix, even your advisor, may still be
              operating like you’re in your 40s.
            </p>

            <p>
              Worse, you may not realize how much that mismatch may be costing
              you, until it’s too late.
            </p>

            <p>
              Across the country, affluent retirees are waking up to this quiet
              risk. They’re asking tougher questions. They’re taking second
              opinions. And more and more are deciding to part ways with their
              long-time financial advisors.
            </p>

            <p>
              Here are <strong>five clear signs</strong> it might be time to do
              the same.
            </p>

            <hr className="my-8 border-slate-200" />

            <h2 className="font-sans text-2xl font-semibold leading-8 text-slate-950">
              1. You’re Not 40 Anymore. Your Plan Should Reflect That
            </h2>

            <p>
              What made sense at 40 doesn’t cut it at 65. Your advisor should
              recognize the shift from accumulation to preservation and
              transition accordingly. If your plan still prioritizes growth
              without addressing risk management, income stability, and tax
              efficiency, it may no longer fit your current priorities.
            </p>

            <hr className="my-8 border-slate-200" />

            <h2 className="font-sans text-2xl font-semibold leading-8 text-slate-950">
              2. You’re Doing Their Job.
            </h2>

            <p>
              You’re reading whitepapers, googling Roth conversions, asking
              ChatGPT about capital gains. If you’re more proactive about
              optimizing your plan than your advisor is… ask yourself why you’re
              still paying them.
            </p>

            <hr className="my-8 border-slate-200" />

            <h2 className="font-sans text-2xl font-semibold leading-8 text-slate-950">
              3. You’re Still Using Pre-2019 Strategies in a Post-Rate-Hike
              World
            </h2>

            <p>
              Pre-2019, the economy lived in a world of near-zero interest
              rates, easy money, and a very different tax and market
              environment. That world is gone. Rates have surged. Volatility is
              higher. The playbook changed, but your advisor might still be
              calling plays from the old one. That’s not “conservative”
              investing.
            </p>

            <hr className="my-8 border-slate-200" />

            <h2 className="font-sans text-2xl font-semibold leading-8 text-slate-950">
              4. It always feels like you’re guessing
            </h2>

            <p>
              If your financial advisor only reaches out once a year, or worse,
              when you call them first, that’s a problem. High-net-worth
              investors require ongoing strategy updates, proactive tax
              planning, and timely responses to market changes.
            </p>

            <p>
              A great advisor should be accessible, engaged, and ahead of market
              trends, ensuring you’re always informed and making smart financial
              decisions. If your advisor isn’t regularly reviewing your
              portfolio or fails to provide clear answers about your financial
              future, it might be time to{" "}
              <a href={clickUrl} className="font-bold text-[#16a34a] underline">
                find one who will.
              </a>
            </p>

            <hr className="my-8 border-slate-200" />

            <h2 className="font-sans text-2xl font-semibold leading-8 text-slate-950">
              5. You’ve Never Had a Second Opinion.
            </h2>

            <p>
              You’ve spent decades building your wealth, but you’ve never
              pressure-tested the plan meant to protect it.
            </p>

            <p>
              Doctors get second opinions. Lawyers bring in co-counsel. Pilots
              run checklists with copilots.
            </p>

            <p>
              But your financial advisor? They’ve had unchecked control over
              your life’s work for years, maybe decades.
            </p>

            <p>Not because they’re the best.</p>

            <p>But because they were just… first.</p>

            <p>
              Loyalty is admirable. But blind loyalty? That can be dangerous.
            </p>

            <h2 className="mt-10 font-sans text-2xl font-semibold leading-8 text-slate-950">
              Don’t you deserve to feel informed and secure about your plan?
            </h2>

            <p>
              If you’ve ever second-guessed a recommendation, wondered if you’re
              paying too much in taxes, or just felt unsure about your plan,
              you’re not alone.
            </p>

            <p>
              Take 60 seconds to check in on where you stand. Our no-cost{" "}
              <a href={clickUrl} className="font-bold text-[#16a34a] underline">
                advisor matching service
              </a>{" "}
              is a private tool designed to help you assess whether your current
              advisor is still meeting your needs.
            </p>

            <p>
              Based on your answers, we’ll introduce you to a fiduciary advisor
              who can offer a second opinion, without pressure, and without
              obligation.
            </p>

            <p>
              Don’t wait until a market swing or tax change exposes a costly
              oversight.
            </p>

            <p>
              👉{" "}
              <a href={clickUrl} className="font-bold text-[#16a34a] underline">
                Take the matching quiz now.
              </a>{" "}
              You’ve earned the peace of mind.
            </p>

            <div className="mt-10">
              <CTA />
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-6 rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="font-sans text-xl font-bold text-slate-950">
                Ready for a second opinion?
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Answer a few questions and see whether you may be matched with a
                fiduciary financial advisor.
              </p>

              <div className="mt-5">
                <CTA>Take the matching quiz</CTA>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <section className="bg-slate-100 px-5 py-8">
        <div className="mx-auto max-w-4xl text-xs leading-6 text-slate-500">
          <p>
            WalletSaint is an educational and comparison platform. This page may
            help users review advisor-matching options based on survey
            responses, stated investable assets, preferences, and advisor
            availability.
          </p>

          <p className="mt-4">
            Content is educational and not individualized financial, tax, legal,
            or investment advice. Advisor availability and matching may vary.
          </p>
        </div>
      </section>

      <footer className="bg-[#050b08] px-5 py-8 text-xs leading-6 text-slate-400">
        <div className="mx-auto max-w-4xl">
          <img
            src="/partners/walletsaint-logo-2026.png"
            alt="WalletSaint"
            className="mb-5 h-8 w-auto rounded-md bg-white px-3 py-1.5"
          />

          <p>
            © 2026 WalletSaint.{" "}
            <a href="/privacy" className="hover:text-white">
              Privacy Policy
            </a>{" "}
            ·{" "}
            <a href="/terms" className="hover:text-white">
              Terms of Use
            </a>{" "}
            ·{" "}
            <a href="/advertiser-disclosure" className="hover:text-white">
              Advertiser Disclosure
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}