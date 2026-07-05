import React, { useState } from "react";
import { Scale } from "lucide-react";

// Gold Weight Configurator
// A slider lets the user pick jewellery weight (2g - 50g) and see the
// live gold value update as they drag.

const RATE_PER_GRAM = 7180; // 22K reference rate

export default function WeightConfigurator() {
  const [weight, setWeight] = useState(8);

  const value = (weight * RATE_PER_GRAM).toLocaleString("en-IN", {
    maximumFractionDigits: 0,
  });

  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-stone-900 border border-amber-800/40 rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center gap-2 mb-6">
          <Scale className="w-5 h-5 text-amber-400" />
          <h1 className="text-amber-50 text-xl font-serif">Set Your Piece Weight</h1>
        </div>

        <div className="flex items-end justify-between mb-4">
          <span className="text-4xl font-serif text-amber-400">{weight}g</span>
          <span className="text-stone-400 text-sm">22K gold @ ₹{RATE_PER_GRAM}/g</span>
        </div>

        <input
          type="range"
          min={2}
          max={50}
          step={0.5}
          value={weight}
          onChange={(e) => setWeight(parseFloat(e.target.value))}
          className="w-full accent-amber-500 mb-8"
        />

        <div className="flex justify-between text-xs text-stone-500 mb-8 -mt-6">
          <span>2g</span>
          <span>50g</span>
        </div>

        <div className="bg-stone-800/60 border border-stone-700 rounded-xl p-5 text-center">
          <p className="text-stone-400 text-sm mb-1">Estimated gold value</p>
          <p className="text-3xl font-serif text-amber-400">₹{value}</p>
          <p className="text-stone-500 text-xs mt-1">
            Making charges & GST calculated separately
          </p>
        </div>
      </div>
    </div>
  );
}
