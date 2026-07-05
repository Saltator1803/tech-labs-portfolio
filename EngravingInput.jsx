import React, { useState } from "react";
import { PenTool } from "lucide-react";

// Custom Engraving Input
// User types a short message (max 20 chars) and sees it previewed live
// on a simple SVG pendant mockup.

const MAX_CHARS = 20;

export default function EngravingInput() {
  const [text, setText] = useState("Forever & Always");

  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-stone-900 border border-amber-800/40 rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center gap-2 mb-6">
          <PenTool className="w-5 h-5 text-amber-400" />
          <h1 className="text-amber-50 text-xl font-serif">Add a Custom Engraving</h1>
        </div>

        <div className="flex flex-col items-center bg-stone-800/60 border border-stone-700 rounded-xl p-8 mb-6">
          <svg width="160" height="160" viewBox="0 0 160 160">
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#d4a94a"
              strokeWidth="4"
            />
            <circle cx="80" cy="80" r="60" fill="#292420" />
            <text
              x="80"
              y="86"
              textAnchor="middle"
              fill="#f2c14e"
              fontSize="12"
              fontFamily="serif"
              fontStyle="italic"
            >
              {text.slice(0, MAX_CHARS) || "Your text"}
            </text>
          </svg>
        </div>

        <label className="text-stone-400 text-sm mb-2 block">
          Engraving text ({text.length}/{MAX_CHARS})
        </label>
        <input
          type="text"
          maxLength={MAX_CHARS}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-amber-50 focus:outline-none focus:border-amber-400"
          placeholder="Type your message"
        />
      </div>
    </div>
  );
}
