"use client";

import { categories } from "@/data/products";

export default function CategoryShelf({ active, onSelect }) {
  return (
    <div className="bg-forest-50 border-b border-forest-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <div className="flex gap-2 overflow-x-auto mandi-scroll pb-1 -mx-1 px-1">
          <button
            onClick={() => onSelect(null)}
            className={`shrink-0 flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition-colors focus-ring ${
              active === null
                ? "bg-forest-800 text-cream"
                : "bg-white text-forest-800 hover:bg-forest-100"
            }`}
          >
            🧺 All Produce
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => onSelect(c.id)}
              className={`shrink-0 flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition-colors focus-ring ${
                active === c.id
                  ? "bg-forest-800 text-cream"
                  : "bg-white text-forest-800 hover:bg-forest-100"
              }`}
            >
              <span>{c.emoji}</span>
              {c.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
