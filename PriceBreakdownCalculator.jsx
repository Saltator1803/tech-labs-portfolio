import React, { useState, useMemo } from "react";
import { Calculator } from "lucide-react";

// Transparent Price Breakdown Calculator
// Shows exactly how a jewellery price is composed: gold value,
// making charges, and GST — the core "transparency" promise of Karigold.

const RATE_PER_GRAM = 7180;

export default function PriceBreakdownCalculator() {
  const [weight, setWeight] = useState(10);
  const [makingChargePct, setMakingChargePct] = useState(12);

  const breakdown = useMemo(() => {
    const goldValue = weight * RATE_PER_GRAM;
    const makingCharge = goldValue * (makingChargePct / 100);
    const subtotal = goldValue + makingCharge;
    const gst = subtotal * 0.03;
    const total = subtotal + gst;
    return { goldValue, makingCharge, gst, total };
  }, [weight, makingChargePct]);

  const fmt = (n) => n.toLocaleString("en-IN", { maximumFractionDigits: 0 });

  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-stone-900 border border-amber-800/40 rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center gap-2 mb-6">
          <Calculator className="w-5 h-5 text-amber-400" />
          <h1 className="text-amber-50 text-xl font-serif">Transparent Price Breakdown</h1>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-stone-400 text-xs">Weight (g)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value) || 0)}
              className="w-full mt-1 bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 text-amber-50 focus:outline-none focus:border-amber-400"
            />
          </div>
          <div>
            <label className="text-stone-400 text-xs">Making charge (%)</label>
            <input
              type="number"
              value={makingChargePct}
              onChange={(e) => setMakingChargePct(Number(e.target.value) || 0)}
              className="w-full mt-1 bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 text-amber-50 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        <div className="bg-stone-800/60 border border-stone-700 rounded-xl divide-y divide-stone-700">
          <Row label="Gold value" value={breakdown.goldValue} fmt={fmt} />
          <Row label={`Making charge (${makingChargePct}%)`} value={breakdown.makingCharge} fmt={fmt} />
          <Row label="GST (3%)" value={breakdown.gst} fmt={fmt} />
          <Row label="Total" value={breakdown.total} fmt={fmt} bold />
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, fmt, bold }) {
  return (
    <div className="flex justify-between items-center px-5 py-3">
      <span className={`text-sm ${bold ? "text-amber-100 font-medium" : "text-stone-400"}`}>
        {label}
      </span>
      <span className={`${bold ? "text-lg text-amber-400 font-serif" : "text-stone-200 text-sm"}`}>
        ₹{fmt(value)}
      </span>
    </div>
  );
}
