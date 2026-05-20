import Link from "next/link";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#f4f6f5] text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/">
            <img
              src="/partners/walletsaint-logo-2026.png"
              alt="WalletSaint"
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <Link href="/privacy" className="hover:text-slate-950">
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-slate-950">
              Terms
            </Link>

            <Link
              href="/advertiser-disclosure"
              className="hover:text-slate-950"
            >
              Advertiser Disclosure
            </Link>
          </nav>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-[linear-gradient(135deg,#0b3d2e,#0f5138_55%,#0a2d22)] px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200/80">
            WalletSaint Legal & Policies
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight">
            {title}
          </h1>

          {updated && (
            <p className="mt-4 text-sm text-emerald-100/70">
              Last updated: {updated}
            </p>
          )}
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
            <div className="legal-content">{children}</div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-slate-500 md:flex-row">
          <img
            src="/partners/walletsaint-logo-2026.png"
            alt="WalletSaint"
            className="h-8 w-auto opacity-90"
          />

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link href="/privacy" className="hover:text-slate-950">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-slate-950">
              Terms of Use
            </Link>

            <Link
              href="/advertiser-disclosure"
              className="hover:text-slate-950"
            >
              Advertiser Disclosure
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}