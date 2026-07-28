"use client";

import { Search, ShoppingBasket, MapPin } from "lucide-react";
import { useCart } from "./CartContext";

export default function Header() {
  const { totalQty, subtotal, setDrawerOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-forest-800 text-cream shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4 py-3">
          <a href="#" className="flex items-baseline gap-1 shrink-0 focus-ring">
            <span className="font-display font-bold text-2xl md:text-3xl italic tracking-tight">
              Your<span className="text-mango-500 not-italic">X</span>Cart
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1.5 text-forest-100 text-sm border-l border-forest-600 pl-4 ml-1">
            <MapPin size={16} className="text-mango-500" />
            <span>Delivering to</span>
            <button className="font-semibold underline decoration-dotted underline-offset-2 focus-ring">
              Sector 21, Sonipat
            </button>
          </div>

          <div className="flex-1 flex items-center bg-forest-50 rounded-full px-4 py-2 max-w-xl mx-auto">
            <Search size={18} className="text-forest-600 shrink-0" />
            <input
              type="text"
              placeholder="Search bhindi, aloo, palak..."
              className="bg-transparent outline-none px-2 text-sm text-forest-900 placeholder:text-forest-600/60 w-full"
            />
          </div>

          <button
            onClick={() => setDrawerOpen(true)}
            className="relative flex items-center gap-2 bg-mango-500 hover:bg-mango-600 transition-colors text-forest-900 font-semibold rounded-full pl-3 pr-4 py-2 shrink-0 focus-ring"
          >
            <ShoppingBasket size={20} />
            <span className="hidden sm:inline text-sm">
              {totalQty > 0 ? `₹${subtotal}` : "Cart"}
            </span>
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-2 bg-forest-800 text-cream text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-cream">
                {totalQty}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
