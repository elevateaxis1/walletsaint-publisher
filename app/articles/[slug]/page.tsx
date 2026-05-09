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

  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#f3f8f1] text-slate-950">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="/" className="flex items-center">
            <img src="/wslogo.png" alt="WalletSaint" className="h-12 w-auto" />
          </a>

          <div className="hidden items-center gap-6 text-sm font-bold text-slate-700 md:flex">
            <a href="/">Home</a>
            <a href="/funnels/advisors">Advisors</a>
            <a href="/funnels/advisors-rmd">Retirement</a>
            <span className="text-green-700">Advertiser Disclosure</span>
          </div>

          <a href="/" className="text-sm font-bold text-green-700 md:hidden">
            Back
          </a>
        </div>
      </header>

      {/* Dark publisher hero */}
      <section className="bg-[linear-gradient(135deg,#052e1b,#0b3d2e_55%,#031f14)] text-white">
        <div className="mx-auto max-w-6xl px-5 py-10 md:py-12">
          <p className="text-sm text-emerald-100/70">
            Home › {article.category} › <span className="text-emerald-200">{article.title}</span>
          </p>

          <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
            {article.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-emerald-50/80">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-700 font-black text-white">
              WS
            </span>
            <span>
              Written by <span className="font-black text-white">WalletSaint Editorial Team</span>
            </span>
            <span>Updated May 2026</span>
            <span className="rounded-full bg-white/10 px-3 py-1 font-bold text-white">
              {article.category}
            </span>
          </div>
        </div>
      </section>

      {/* Main layout */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-8 lg:grid-cols-[1fr_360px]">
        {/* Article column */}
        <article>
          <img
            src={article.image}
            alt={article.title}
            className="h-[360px] w-full rounded-3xl object-cover shadow-xl"
          />

          <div className="mt-5 rounded-2xl border border-green-100 bg-green-50 p-4 text-sm leading-6 text-slate-600">
            WalletSaint is an independent educational and comparison publisher. Some content may include partner relationships or compensation.
          </div>

          <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm md:p-10">
            <p className="text-xl leading-9 text-slate-700">
              {article.intro}
            </p>

            <div className="mt-12 space-y-12">
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="border-l-4 border-green-600 pl-4 text-3xl font-black leading-tight tracking-tight text-slate-950">
                    {section.heading}
                  </h2>

                  <p className="mt-5 whitespace-pre-line text-lg leading-9 text-slate-700">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#0b3d2e,#0e4a38_55%,#082c22)] p-6 text-white shadow-2xl md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
                Compare advisor options
              </p>

              <h3 className="mt-3 text-3xl font-black leading-tight tracking-tight">
                {article.ctaTitle}
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-7 text-emerald-50/85">
                {article.ctaText}
              </p>

              <a
                href={article.ctaHref}
                className="mt-6 inline-flex rounded-2xl bg-white px-5 py-4 text-sm font-black text-green-900 shadow-lg transition hover:bg-emerald-50"
              >
                Start Here →
              </a>
            </div>

            <div className="mt-10 border-t border-slate-200 pt-6 text-xs leading-6 text-slate-500">
              <p>
                WalletSaint content is provided for informational purposes only and should not be considered individualized financial, tax, legal, or investment advice.
              </p>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-black">Other Articles</h2>
              <a href="/" className="text-sm font-bold text-green-700">
                View All →
              </a>
            </div>

            <div className="space-y-4">
              {related.map((item) => (
                <a key={item.slug} href={`/articles/${item.slug}`} className="grid grid-cols-[110px_1fr] gap-4 rounded-2xl bg-white p-3 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-24 w-full rounded-xl object-cover"
                  />
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-green-700">
                      {item.category}
                    </p>
                    <h3 className="mt-1 text-sm font-black leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500">May 2026</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-[linear-gradient(135deg,#0b3d2e,#0e4a38_55%,#082c22)] p-6 text-white shadow-xl">
            <div className="rounded-2xl bg-white px-4 py-3 text-center">
              <p className="text-xl font-black text-green-800">WalletSaint</p>
            </div>

            <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
              Advisor comparison
            </p>

            <h3 className="mt-3 text-2xl font-black leading-tight">
              Review your options before making a financial move.
            </h3>

            <p className="mt-4 text-sm leading-6 text-emerald-50/85">
              Answer a few questions to compare advisor-matching paths.
            </p>

            <a
              href="/funnels/advisors"
              className="mt-5 inline-flex w-full justify-center rounded-2xl bg-emerald-500 px-5 py-4 text-sm font-black text-green-950"
            >
              Compare Options →
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-xs leading-6 text-slate-500 shadow-sm">
            <p className="font-black text-slate-800">Disclosure</p>
            <p className="mt-2">
              WalletSaint may receive compensation from partners featured on this site. Content is educational and not individualized advice.
            </p>
          </div>
        </aside>
      </section>

      {/* Footer */}
      <footer className="bg-[#101a14] px-5 py-14 text-slate-400">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr]">
          <div>
            <p className="text-3xl font-black text-white">
              <span className="text-green-500">Wallet</span>Saint
            </p>
            <p className="mt-6 text-sm leading-7">
              WalletSaint Media LLC
              <br />
              Educational finance publisher
              <br />
              Tampa Bay, FL
            </p>
          </div>

          <div>
            <p className="font-black text-white">Company</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>About Us</li>
              <li>Editorial Guidelines</li>
              <li>Advertiser Disclosure</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <p className="font-black text-white">Legal</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Cookie Policy</li>
              <li>Accessibility Statement</li>
            </ul>
          </div>

          <div>
            <p className="font-black text-white">About us</p>
            <p className="mt-5 text-sm leading-7">
              WalletSaint helps readers compare financial topics, advisor options, retirement questions, tax considerations, insurance, debt, and investing decisions before choosing a provider, product, or plan.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-8 text-center text-xs text-slate-500">
          <p>
            Privacy Policy · Terms of Use · How We Make Money · Do Not Sell or Share My Personal Information · Editorial Guidelines · About Us · Contact Us
          </p>
          <p className="mt-6">© 2026 WalletSaint Media LLC. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}