import React, { useState } from "react";
import { Gem, Check } from "lucide-react";

// Gold Purity Selector
// Lets the user pick 24K / 22K / 18K and see the resulting purity % and
// live per-gram price recalculated instantly.

const RATE_PER_GRAM_24K = 7845;

const OPTIONS = [
  { karat: "24K", purity: "99.9%", multiplier: 1, note: "Purest form, softest metal" },
  { karat: "22K", purity: "91.6%", multiplier: 0.916, note: "Most popular for jewellery" },
  { karat: "18K", purity: "75.0%", multiplier: 0.75, note: "Most durable, best for daily wear" },
];

export default function PuritySelector() {
  const [selected, setSelected] = useState(1);

  const active = OPTIONS[selected];
  const price = (RATE_PER_GRAM_24K * active.multiplier).toFixed(0);

  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-stone-900 border border-amber-800/40 rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center gap-2 mb-6">
          <Gem className="w-5 h-5 text-amber-400" />
          <h1 className="text-amber-50 text-xl font-serif">Choose Your Gold Purity</h1>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {OPTIONS.map((opt, i) => (
            <button
              key={opt.karat}
              onClick={() => setSelected(i)}
              className={`relative rounded-xl p-4 border text-left transition-colors ${
                i === selected
                  ? "bg-amber-500/10 border-amber-400"
                  : "bg-stone-800/60 border-stone-700 hover:border-amber-700"
              }`}
            >
              {i === selected && (
                <Check className="w-4 h-4 text-amber-400 absolute top-3 right-3" />
              )}
              <p className="text-amber-300 font-serif text-lg">{opt.karat}</p>
              <p className="text-stone-400 text-xs mt-1">{opt.purity} pure</p>
            </button>
          ))}
        </div>

        <div className="bg-stone-800/60 border border-stone-700 rounded-xl p-5">
          <p className="text-stone-400 text-sm mb-1">{active.note}</p>
          <p className="text-2xl font-serif text-amber-400">₹{price} / gram</p>
        </div>
      </div>
    </div>
  );
}
