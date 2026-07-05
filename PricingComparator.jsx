import React, { useState, useMemo } from "react";
import { TrendingDown } from "lucide-react";

// Pricing Comparator
// Side-by-side view of a "Traditional Jeweller" markup model vs
// Karigold's transparent pricing, showing the buyer's savings.

const RATE_PER_GRAM = 7180;

export default function PricingComparator() {
  const [weight, setWeight] = useState(10);

  const { traditional, karigold, savings } = useMemo(() => {
    const goldValue = weight * RATE_PER_GRAM;
    const traditionalMaking = goldValue * 0.22; // opaque, higher markup
    const traditionalTotal = (goldValue + traditionalMaking) * 1.03;

    const karigoldMaking = goldValue * 0.1; // disclosed, lower markup
    const karigoldTotal = (goldValue + karigoldMaking) * 1.03;

    return {
      traditional: traditionalTotal,
      karigold: karigoldTotal,
      savings: traditionalTotal - karigoldTotal,
    };
  }, [weight]);

  const fmt = (n) => n.toLocaleString("en-IN", { maximumFractionDigits: 0 });

  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-stone-900 border border-amber-800/40 rounded-2xl p-8 shadow-2xl">
        <h1 className="text-amber-50 text-xl font-serif mb-1">
          Traditional vs Transparent Pricing
        </h1>
        <p className="text-stone-400 text-sm mb-6">
          For a {weight}g gold piece at today's rate
        </p>

        <input
          type="range"
          min={2}
          max={50}
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          className="w-full accent-amber-500 mb-8"
        />

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-stone-800/60 border border-stone-700 rounded-xl p-5 text-center">
            <p className="text-stone-400 text-xs uppercase tracking-wide mb-2">
              Traditional Jeweller
            </p>
            <p className="text-2xl font-serif text-stone-300">₹{fmt(traditional)}</p>
            <p className="text-stone-500 text-xs mt-1">~22% undisclosed markup</p>
          </div>
          <div className="bg-amber-500/10 border border-amber-500 rounded-xl p-5 text-center">
            <p className="text-amber-300 text-xs uppercase tracking-wide mb-2">
              Karigold
            </p>
            <p className="text-2xl font-serif text-amber-400">₹{fmt(karigold)}</p>
            <p className="text-stone-400 text-xs mt-1">10% disclosed making charge</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 bg-emerald-500/10 border border-emerald-600/40 rounded-xl p-4">
          <TrendingDown className="w-5 h-5 text-emerald-400" />
          <span className="text-emerald-300 font-medium">
            You save ₹{fmt(savings)} with full price transparency
          </span>
        </div>
      </div>
    </div>
  );
}
