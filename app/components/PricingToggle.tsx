"use client";

import { useState } from "react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    monthly: 59,
    yearly: 49,
    perks: ["1 register", "Inventory sync", "Email support"]
  },
  {
    id: "growth",
    name: "Growth",
    monthly: 129,
    yearly: 109,
    perks: ["3 registers", "Advanced analytics", "24/7 support"]
  },
  {
    id: "scale",
    name: "Scale",
    monthly: 249,
    yearly: 209,
    perks: ["Unlimited registers", "AI fraud guard", "Dedicated CSM"]
  }
];

export default function PricingToggle() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="relative mx-auto mt-24 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900/40 p-8 shadow-neon">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.45em] text-slate-400">pricing</p>
          <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Predictable revenue for serious retail teams</h2>
          <p className="mt-3 max-w-xl text-slate-300">
            Switch billing cycles to compare plans. Annual billing locks in a 17% discount and priority access to new fintech modules.
          </p>
        </div>
        <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/60 p-1 text-xs font-medium text-slate-200">
          <button
            className={`rounded-full px-4 py-2 transition ${
              billingCycle === "monthly" ? "bg-azure text-slate-900 shadow" : "hover:text-white"
            }`}
            onClick={() => setBillingCycle("monthly")}
            type="button"
          >
            Monthly
          </button>
          <button
            className={`rounded-full px-4 py-2 transition ${
              billingCycle === "yearly" ? "bg-emerald text-slate-900 shadow" : "hover:text-white"
            }`}
            onClick={() => setBillingCycle("yearly")}
            type="button"
          >
            Annual
          </button>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => {
          const price = billingCycle === "monthly" ? plan.monthly : plan.yearly;
          const suffix = billingCycle === "monthly" ? "month" : "month (billed annually)";

          return (
            <div key={plan.id} className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <p className="mt-4 text-4xl font-semibold text-emerald">
                ${price}
                <span className="ml-2 text-base font-normal text-slate-400">/ {suffix}</span>
              </p>
              <ul className="mt-6 flex flex-col gap-3 text-sm text-slate-300">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-2 w-2 flex-none rounded-full bg-azure" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <button
                className="mt-auto w-full rounded-2xl bg-azure/90 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-azure"
                type="button"
              >
                Start trial
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
