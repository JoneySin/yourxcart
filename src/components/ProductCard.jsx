"use client";

import Image from "next/image";
import { Minus, Plus, Leaf } from "lucide-react";
import { useCart } from "./CartContext";
import { freshnessLabel } from "@/data/products";

export default function ProductCard({ product }) {
  const { items, addItem, removeItem } = useCart();
  const qty = items[product.id]?.qty || 0;
  const discount = Math.round(
    ((product.mrp - product.price) / product.mrp) * 100
  );

  return (
    <div className="group bg-white rounded-2xl border border-forest-100 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all">
      <div className="relative aspect-[4/3] bg-forest-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.tag && (
          <span className="absolute top-2 left-2 bg-forest-800 text-cream text-[11px] font-semibold px-2 py-1 rounded-full">
            {product.tag}
          </span>
        )}
        {discount > 0 && (
          <span className="absolute top-2 right-2 bg-mango-500 text-forest-900 text-[11px] font-bold px-2 py-1 rounded-full">
            {discount}% OFF
          </span>
        )}

        {/* Signature: freshness meter */}
        <div
          className={`absolute bottom-2 left-2 flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded-full ${
            product.freshness === "today"
              ? "bg-forest-400/90 text-forest-900"
              : "bg-soil-500/90 text-cream"
          }`}
        >
          <Leaf size={12} />
          {freshnessLabel[product.freshness]}
        </div>
      </div>

      <div className="p-3">
        <h3 className="font-display font-semibold text-forest-900 leading-tight">
          {product.name}
        </h3>
        <p className="text-xs text-forest-600/70 mt-0.5">{product.origin}</p>

        <div className="flex items-end justify-between mt-2">
          <div className="font-mono">
            <span className="text-lg font-bold text-forest-800">
              ₹{product.price}
            </span>
            {product.mrp > product.price && (
              <span className="text-xs text-forest-600/50 line-through ml-1">
                ₹{product.mrp}
              </span>
            )}
            <span className="text-[11px] text-forest-600/70 block">
              per {product.unit}
            </span>
          </div>

          {qty === 0 ? (
            <button
              onClick={() => addItem(product)}
              className="bg-forest-800 hover:bg-forest-600 text-cream text-sm font-semibold rounded-full px-4 py-1.5 transition-colors focus-ring"
            >
              Add
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-forest-800 rounded-full px-1 py-1">
              <button
                onClick={() => removeItem(product.id)}
                aria-label={`Remove one ${product.name}`}
                className="w-6 h-6 flex items-center justify-center text-cream focus-ring rounded-full"
              >
                <Minus size={14} />
              </button>
              <span className="text-cream text-sm font-mono w-4 text-center">
                {qty}
              </span>
              <button
                onClick={() => addItem(product)}
                aria-label={`Add one more ${product.name}`}
                className="w-6 h-6 flex items-center justify-center text-cream focus-ring rounded-full"
              >
                <Plus size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
