"use client";

import { useMemo, useState } from "react";

const avgTicketOptions = [25, 45, 65, 95];

export default function RoiCalculator() {
  const [registers, setRegisters] = useState(3);
  const [avgTicket, setAvgTicket] = useState(45);
  const [transactions, setTransactions] = useState(1200);

  const monthlyRevenue = useMemo(() => registers * avgTicket * transactions, [registers, avgTicket, transactions]);
  const feeSavings = useMemo(() => monthlyRevenue * 0.012, [monthlyRevenue]);
  const fraudProtection = useMemo(() => registers * 80, [registers]);
  const automationBoost = useMemo(() => monthlyRevenue * 0.04, [monthlyRevenue]);
  const totalProjection = Math.round(monthlyRevenue + feeSavings + fraudProtection + automationBoost);

  return (
    <section className="mx-auto mt-24 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900/40 p-8">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex-1">
          <p className="text-sm uppercase tracking-[0.45em] text-slate-400">roi sandbox</p>
          <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Project your fintech upside in seconds</h2>
          <p className="mt-3 text-slate-300">
            Experiment with your retail footprint to see how Circuit POS channels lower interchange fees, reduces fraud and automates payout reconciliation.
          </p>
          <dl className="mt-8 space-y-5">
            <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/40 px-5 py-4">
              <dt className="text-sm text-slate-400">Projected monthly revenue</dt>
              <dd className="text-xl font-semibold text-emerald">${monthlyRevenue.toLocaleString()}</dd>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/40 px-5 py-4">
              <dt className="text-sm text-slate-400">Processor fee savings</dt>
              <dd className="text-lg font-semibold text-emerald">${feeSavings.toLocaleString()}</dd>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/40 px-5 py-4">
              <dt className="text-sm text-slate-400">Fraud guard coverage</dt>
              <dd className="text-lg font-semibold text-emerald">${fraudProtection.toLocaleString()}</dd>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/40 px-5 py-4">
              <dt className="text-sm text-slate-400">Automation lift</dt>
              <dd className="text-lg font-semibold text-emerald">${automationBoost.toLocaleString()}</dd>
            </div>
          </dl>
        </div>
        <div className="flex-1 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/70 to-slate-950 p-6">
          <h3 className="mb-6 text-lg font-semibold text-white">Tweak your input stack</h3>
          <div className="space-y-6 text-sm text-slate-200">
            <label className="block">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">registers</span>
              <input
                type="range"
                min={1}
                max={12}
                value={registers}
                onChange={(event) => setRegisters(Number(event.target.value))}
                className="mt-3 w-full accent-emerald"
              />
              <span className="mt-2 block text-2xl font-semibold text-emerald">{registers} active</span>
            </label>

            <label className="block">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">avg ticket size (usd)</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {avgTicketOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setAvgTicket(option)}
                    className={`rounded-full border px-4 py-2 transition ${
                      avgTicket === option
                        ? "border-emerald bg-emerald/20 text-emerald"
                        : "border-slate-700 text-slate-300 hover:border-emerald/80 hover:text-emerald"
                    }`}
                  >
                    ${option}
                  </button>
                ))}
              </div>
            </label>

            <label className="block">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">monthly transactions</span>
              <input
                type="number"
                min={200}
                step={100}
                value={transactions}
                onChange={(event) => setTransactions(Number(event.target.value))}
                className="mt-3 w-full rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-base text-white outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/40"
              />
            </label>
          </div>
          <div className="mt-8 rounded-2xl border border-emerald/40 bg-emerald/10 p-5 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald/80">total upside</p>
            <p className="mt-2 text-4xl font-semibold text-emerald">
              ${totalProjection.toLocaleString()}
            </p>
            <p className="mt-3 text-sm text-slate-300">Estimated monthly value when you switch to Circuit POS.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
