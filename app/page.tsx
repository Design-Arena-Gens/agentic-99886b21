import Image from "next/image";
import PricingToggle from "./components/PricingToggle";
import RoiCalculator from "./components/RoiCalculator";

const partners = ["Lyra Retail", "Northbeam", "Ardent Commerce", "MonoPay"];
const features = [
  {
    title: "Unified payment rails",
    description: "Tokenize card-present + web orders into a single ledger with real-time settlement insights and automated payouts.",
    icon: "🛰️"
  },
  {
    title: "Intelligence overlays",
    description: "AI-backed anomaly alerts flag suspicious POS behavior before it impacts your cash flow and customer trust.",
    icon: "🧠"
  },
  {
    title: "Composable terminals",
    description: "Deploy new terminals with zero-touch provisioning and push fintech apps to field devices instantly.",
    icon: "🧩"
  }
];

const capabilities = [
  "Next-gen POS orchestration",
  "Instant merchant onboarding",
  "Risk-scored payouts",
  "Ledger API with audit trail",
  "Realtime FX engine",
  "Card-present + wallet acceptance"
];

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_60%)]" />
      <header className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center gap-14 px-6 pt-20">
        <div className="flex flex-col gap-6 text-center md:text-left">
          <span className="mx-auto w-fit rounded-full border border-emerald/50 bg-emerald/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-emerald md:mx-0">
            Circuit POS
          </span>
          <h1 className="text-4xl font-semibold text-white md:text-6xl">Modern POS rails engineered for omnichannel retail</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 md:mx-0">
            Activate secure transactions across flagship stores, pop-up kiosks and mobile fleets. Circuit POS merges fintech-grade underwriting with seamless in-store experiences.
          </p>
          <div className="flex flex-col gap-4 md:flex-row">
            <button className="inline-flex items-center justify-center rounded-2xl bg-emerald px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald/30 transition hover:-translate-y-0.5 hover:bg-emerald/90" type="button">
              Book a live demo
            </button>
            <button className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-transparent px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-emerald/60 hover:text-emerald" type="button">
              Explore API docs
            </button>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 rounded-3xl border border-slate-800 bg-slate-900/50 p-6 md:mx-0 md:grid-cols-4">
            {partners.map((partner) => (
              <div key={partner} className="flex h-16 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/60 px-4 text-sm font-semibold tracking-wide text-slate-400">
                {partner}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-900/40 p-8 shadow-neon">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">smart deposits</p>
              <p className="mt-3 text-lg font-semibold text-white">Automated merchant settlements</p>
              <p className="mt-3 text-sm text-slate-300">
                Group payouts by location, channel or operator with bank-grade controls. Circuit clears 98% of transactions same-day via FedNow rails.
              </p>
              <div className="mt-6 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-200">
                <span>Avg settlement time</span>
                <span className="text-emerald">2.5 hrs</span>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-200">
                <span>Chargeback coverage</span>
                <span className="text-emerald">Up to $250k</span>
              </div>
            </div>
            <div className="relative rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 to-slate-900/30 p-6">
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-emerald/30 blur-3xl" />
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">live dashboard</p>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between text-sm text-slate-200">
                  <span>Storefront A</span>
                  <span className="text-emerald">+14.6%</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-200">
                  <span>Mobile fleet</span>
                  <span className="text-emerald">+21.3%</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-200">
                  <span>Subscription renewals</span>
                  <span className="text-emerald">+9.4%</span>
                </div>
              </div>
              <div className="mt-8 rounded-2xl border border-emerald/40 bg-emerald/10 p-5 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-emerald/80">net volume processed</p>
                <p className="mt-3 text-3xl font-semibold text-white">$4.2M</p>
                <p className="mt-2 text-sm text-slate-300">Last 30 days / 187k orders</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto mt-24 max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
              <span className="text-2xl">{feature.icon}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{feature.description}</p>
              <button className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-emerald hover:text-emerald/80" type="button">
                Learn more
                <span aria-hidden>&rarr;</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      <RoiCalculator />
      <PricingToggle />

      <section className="mx-auto mt-24 max-w-6xl px-6 pb-32">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-sm uppercase tracking-[0.45em] text-slate-400">capabilities</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Launch fintech-grade POS in days, not quarters</h2>
            <p className="mt-3 text-slate-300">
              Circuit plugs into your existing commerce stack via GraphQL and REST APIs, while our hardware SDK delivers a frictionless operator workflow.
            </p>
            <button className="mt-6 inline-flex items-center justify-center rounded-2xl bg-azure/90 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-azure" type="button">
              Access integration guide
            </button>
          </div>
          <div className="lg:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <div key={capability} className="rounded-3xl border border-slate-800 bg-slate-900/40 p-5 text-sm text-slate-300">
                  <span className="mb-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald/20 text-emerald">✓</span>
                  <p>{capability}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800/60 bg-slate-950/60 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-sm text-slate-400 md:flex-row">
          <span>© {new Date().getFullYear()} Circuit Systems Inc.</span>
          <div className="flex flex-wrap items-center gap-4">
            <button className="hover:text-emerald" type="button">
              Security
            </button>
            <button className="hover:text-emerald" type="button">
              Privacy
            </button>
            <button className="hover:text-emerald" type="button">
              Status
            </button>
            <button className="hover:text-emerald" type="button">
              Contact
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}
