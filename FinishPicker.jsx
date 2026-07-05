import React, { useState } from "react";
import { Palette, Check } from "lucide-react";

// Metal Finish Picker
// Visual selector for the jewellery's surface finish, each with a
// distinct CSS gradient swatch standing in for a material sample.

const FINISHES = [
  { name: "Polished", gradient: "from-yellow-300 to-yellow-500", desc: "Classic high-shine mirror finish" },
  { name: "Matte", gradient: "from-yellow-200 to-yellow-400", desc: "Soft, understated, fingerprint-resistant" },
  { name: "Hammered", gradient: "from-amber-300 to-amber-600", desc: "Textured, handcrafted artisan look" },
  { name: "Antique", gradient: "from-amber-500 to-amber-800", desc: "Aged patina, heritage-inspired" },
];

export default function FinishPicker() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-stone-900 border border-amber-800/40 rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center gap-2 mb-6">
          <Palette className="w-5 h-5 text-amber-400" />
          <h1 className="text-amber-50 text-xl font-serif">Choose a Finish</h1>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {FINISHES.map((f, i) => (
            <button
              key={f.name}
              onClick={() => setSelected(i)}
              className={`rounded-xl p-4 border text-left transition-colors ${
                i === selected
                  ? "bg-stone-800 border-amber-400"
                  : "bg-stone-800/40 border-stone-700 hover:border-amber-700"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${f.gradient} border border-stone-600`}
                />
                <div>
                  <p className="text-amber-100 font-medium flex items-center gap-1">
                    {f.name}
                    {i === selected && <Check className="w-4 h-4 text-amber-400" />}
                  </p>
                  <p className="text-stone-400 text-xs mt-1">{f.desc}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
