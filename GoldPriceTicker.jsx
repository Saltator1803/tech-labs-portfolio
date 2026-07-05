import React, { useState, useEffect, useRef } from "react";
import { TrendingUp, TrendingDown, Sparkles } from "lucide-react";

// Live Gold Price Ticker
// Simulates a real-time gold rate feed for 24K / 22K / 18K purities.
// In production, replace `simulateTick()` with a real market-data API call.

const BASE_RATE_24K = 7845; // ₹ per gram, starting reference point

function simulateTick(prev) {
  const drift = (Math.random() - 0.5) * 12;
  return Math.max(1000, prev + drift);
}

export default function GoldPriceTicker() {
  const [rate24k, setRate24k] = useState(BASE_RATE_24K);
  const [prevRate, setPrevRate] = useState(BASE_RATE_24K);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setRate24k((current) => {
        setPrevRate(current);
        return simulateTick(current);
      });
    }, 2200);
    return () => clearInterval(intervalRef.current);
  }, []);

  const purities = [
    { label: "24K", multiplier: 1 },
    { label: "22K", multiplier: 0.916 },
    { label: "18K", multiplier: 0.75 },
  ];

  const isUp = rate24k >= prevRate;

  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-stone-900 border border-amber-800/40 rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <h1 className="text-amber-50 text-xl font-serif tracking-wide">
            Live Gold Rate
          </h1>
          <span className="ml-auto text-xs text-stone-400 uppercase tracking-widest">
            Updated just now
          </span>
        </div>

        <div className="flex items-baseline gap-3 mb-8">
          <span className="text-5xl font-serif text-amber-400">
            ₹{rate24k.toFixed(0)}
          </span>
          <span className="text-stone-400 text-sm">/ gram (24K)</span>
          {isUp ? (
            <TrendingUp className="w-5 h-5 text-emerald-400 ml-2" />
          ) : (
            <TrendingDown className="w-5 h-5 text-rose-400 ml-2" />
          )}
        </div>

        <div className="grid grid-cols-3 gap-4">
          {purities.map((p) => (
            <div
              key={p.label}
              className="bg-stone-800/60 border border-stone-700 rounded-xl p-4 text-center"
            >
              <p className="text-amber-300 font-serif text-lg">{p.label}</p>
              <p className="text-stone-200 text-sm mt-1">
                ₹{(rate24k * p.multiplier).toFixed(0)}/g
              </p>
            </div>
          ))}
        </div>

        <p className="text-stone-500 text-xs mt-6 text-center">
          Demo feed — swap `simulateTick()` for a real gold-rate API in production.
        </p>
      </div>
    </div>
  );
}
