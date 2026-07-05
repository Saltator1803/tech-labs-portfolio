import React, { useState, useMemo } from "react";
import { Circle, Layers } from "lucide-react";

// Shop by Category Grid
// Filterable product grid grouped by jewellery category, with a live
// count and starting price per category.

const PRODUCTS = [
  { name: "Classic Gold Band", category: "Rings", price: 24500 },
  { name: "Solitaire Ring", category: "Rings", price: 31200 },
  { name: "Rope Chain", category: "Chains", price: 42800 },
  { name: "Box Chain", category: "Chains", price: 38900 },
  { name: "Kada Bangle", category: "Bangles", price: 55600 },
  { name: "Cuff Bangle", category: "Bangles", price: 47300 },
  { name: "Jhumka Earrings", category: "Earrings", price: 21400 },
  { name: "Stud Earrings", category: "Earrings", price: 15800 },
  { name: "Temple Pendant", category: "Pendants", price: 28700 },
];

const CATEGORIES = ["All", "Rings", "Chains", "Bangles", "Earrings", "Pendants"];

export default function CategoryGrid() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === active),
    [active]
  );

  return (
    <div className="min-h-screen bg-stone-950 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Layers className="w-5 h-5 text-amber-400" />
          <h1 className="text-amber-50 text-xl font-serif">Shop by Category</h1>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                active === cat
                  ? "bg-amber-500 text-stone-900 border-amber-500 font-medium"
                  : "bg-stone-800/60 text-stone-300 border-stone-700 hover:border-amber-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="text-stone-500 text-sm mb-4">{filtered.length} pieces</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {filtered.map((p) => (
            <div
              key={p.name}
              className="bg-stone-900 border border-stone-700 rounded-xl p-5 hover:border-amber-600/60 transition-colors"
            >
              <div className="w-full h-24 rounded-lg bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center mb-4">
                <Circle className="w-8 h-8 text-stone-900/40" />
              </div>
              <p className="text-amber-100 font-medium text-sm">{p.name}</p>
              <p className="text-stone-500 text-xs mb-1">{p.category}</p>
              <p className="text-amber-400 font-serif">
                ₹{p.price.toLocaleString("en-IN")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
