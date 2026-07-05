import React, { useState } from "react";
import { ShieldCheck, Search, XCircle } from "lucide-react";

// HUID Verification Lookup
// Mock lookup tool for a jewellery piece's Hallmark Unique ID (HUID).
// Replace `mockLookup()` with a real BIS registry API call in production.

function mockLookup(code) {
  if (!/^[A-Za-z0-9]{6}$/.test(code)) return null;
  const valid = code.toUpperCase().charCodeAt(0) % 2 === 0;
  return valid
    ? {
        valid: true,
        purity: "91.6% (22K)",
        center: "BIS Hallmarking Centre, Mumbai",
        artisan: "Ramesh Soni",
      }
    : { valid: false };
}

export default function HUIDVerification() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);

  const handleVerify = () => setResult(mockLookup(code));

  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-stone-900 border border-amber-800/40 rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center gap-2 mb-6">
          <ShieldCheck className="w-5 h-5 text-amber-400" />
          <h1 className="text-amber-50 text-xl font-serif">Verify Your HUID</h1>
        </div>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            maxLength={6}
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            placeholder="e.g. AB12CD"
            className="flex-1 bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-amber-50 tracking-widest focus:outline-none focus:border-amber-400"
          />
          <button
            onClick={handleVerify}
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-medium px-5 rounded-lg transition-colors"
          >
            <Search className="w-4 h-4" />
            Verify
          </button>
        </div>

        {result === null && code.length > 0 && (
          <p className="text-stone-500 text-sm">Enter a valid 6-character HUID code.</p>
        )}

        {result?.valid && (
          <div className="bg-emerald-500/10 border border-emerald-600/40 rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-emerald-300 font-medium mb-1">
              <ShieldCheck className="w-4 h-4" /> Verified Genuine
            </div>
            <p className="text-stone-300 text-sm">Purity: {result.purity}</p>
            <p className="text-stone-300 text-sm">Hallmarking centre: {result.center}</p>
            <p className="text-stone-300 text-sm">Crafted by: {result.artisan}</p>
          </div>
        )}

        {result?.valid === false && (
          <div className="bg-rose-500/10 border border-rose-600/40 rounded-xl p-5 flex items-center gap-2">
            <XCircle className="w-4 h-4 text-rose-400" />
            <span className="text-rose-300 text-sm">
              No matching record found for this HUID.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
