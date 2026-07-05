import React, { useState } from "react";
import { Users, Award } from "lucide-react";

// Artisan Selector
// Lets a buyer choose which karigar (artisan) crafts their piece,
// reinforcing Karigold's "karigar-first" brand positioning.

const ARTISANS = [
  { initials: "RS", name: "Ramesh Soni", specialty: "Filigree work", years: 22 },
  { initials: "MK", name: "Meena Kanoi", specialty: "Temple jewellery", years: 18 },
  { initials: "AV", name: "Arun Verma", specialty: "Hammered finishes", years: 15 },
];

export default function ArtisanSelector() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-stone-900 border border-amber-800/40 rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center gap-2 mb-6">
          <Users className="w-5 h-5 text-amber-400" />
          <h1 className="text-amber-50 text-xl font-serif">Pick Your Karigar</h1>
        </div>

        <div className="space-y-3">
          {ARTISANS.map((a, i) => (
            <button
              key={a.name}
              onClick={() => setSelected(i)}
              className={`w-full flex items-center gap-4 rounded-xl p-4 border text-left transition-colors ${
                i === selected
                  ? "bg-amber-500/10 border-amber-400"
                  : "bg-stone-800/60 border-stone-700 hover:border-amber-700"
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-amber-700/30 border border-amber-600 flex items-center justify-center text-amber-300 font-serif">
                {a.initials}
              </div>
              <div className="flex-1">
                <p className="text-amber-100 font-medium">{a.name}</p>
                <p className="text-stone-400 text-xs">{a.specialty}</p>
              </div>
              <div className="flex items-center gap-1 text-amber-400 text-xs">
                <Award className="w-4 h-4" />
                {a.years}y
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
