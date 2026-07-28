"use client";

import { useState } from "react";
import { X, Minus, Plus, ShoppingBasket, CheckCircle2 } from "lucide-react";
import { useCart } from "./CartContext";

export default function CartDrawer() {
  const {
    list,
    totalQty,
    subtotal,
    addItem,
    removeItem,
    clearAll,
    drawerOpen: open,
    setDrawerOpen: setOpen,
  } = useCart();
  const deliveryFee = subtotal >= 199 || subtotal === 0 ? 0 : 25;

  const [placedOrder, setPlacedOrder] = useState(null);

  const handleCheckout = () => {
    const orderNumber = `YXC${Date.now().toString().slice(-6)}`;
    setPlacedOrder({
      orderNumber,
      items: list,
      total: subtotal + deliveryFee,
    });
    clearAll();
  };

  const handleClose = () => {
    setOpen(false);
    setPlacedOrder(null);
  };

  return (
    <>
      {totalQty > 0 && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-50 md:hidden bg-mango-500 text-forest-900 font-bold rounded-full shadow-lg px-5 py-3 flex items-center gap-2 focus-ring"
        >
          <ShoppingBasket size={18} />
          {totalQty} · ₹{subtotal}
        </button>
      )}

      {open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-forest-900/40"
            onClick={handleClose}
          />
          <div className="relative w-full max-w-sm bg-cream h-full flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-5 py-4 bg-forest-800 text-cream">
              <h2 className="font-display font-semibold text-lg">
                {placedOrder ? "Order Placed" : "Your Basket"}
              </h2>
              <button
                onClick={handleClose}
                className="focus-ring rounded-full p-1"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {placedOrder ? (
              <div className="flex-1 overflow-y-auto px-5 py-8 flex flex-col items-center text-center">
                <CheckCircle2 size={56} className="text-forest-400 mb-4" />
                <h3 className="font-display font-semibold text-xl text-forest-900">
                  Order Confirmed!
                </h3>
                <p className="text-sm text-forest-600/80 mt-2">
                  Order <span className="font-mono font-semibold">{placedOrder.orderNumber}</span> has been placed.
                </p>
                <p className="text-sm text-forest-600/80 mt-1">
                  Your fresh vegetables will arrive within 60 minutes.
                </p>

                <div className="w-full bg-white rounded-xl border border-forest-100 mt-6 p-4 text-left">
                  <p className="text-xs font-semibold text-forest-600/70 mb-2 uppercase tracking-wide">
                    Order Summary
                  </p>
                  {placedOrder.items.map(({ product, qty }) => (
                    <div
                      key={product.id}
                      className="flex justify-between text-sm text-forest-800 py-1"
                    >
                      <span>
                        {product.name} × {qty}
                      </span>
                      <span className="font-mono">
                        ₹{product.price * qty}
                      </span>
                    </div>
                  ))}
                  <div className="flex justify-between font-bold text-forest-900 pt-2 mt-2 border-t border-forest-100">
                    <span>Total Paid</span>
                    <span className="font-mono">₹{placedOrder.total}</span>
                  </div>
                </div>

                <button
                  onClick={handleClose}
                  className="w-full bg-forest-800 hover:bg-forest-600 text-cream font-semibold rounded-full py-3 mt-6 transition-colors focus-ring"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
                  {list.length === 0 ? (
                    <p className="text-forest-600/70 text-sm text-center mt-10">
                      Your basket is empty. Add some fresh vegetables to get
                      started.
                    </p>
                  ) : (
                    list.map(({ product, qty }) => (
                      <div
                        key={product.id}
                        className="flex items-center gap-3 bg-white rounded-xl p-2 border border-forest-100"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm text-forest-900 truncate">
                            {product.name}
                          </p>
                          <p className="text-xs text-forest-600/70 font-mono">
                            ₹{product.price} / {product.unit}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 bg-forest-800 rounded-full px-1 py-1 shrink-0">
                          <button
                            onClick={() => removeItem(product.id)}
                            className="w-6 h-6 flex items-center justify-center text-cream focus-ring rounded-full"
                            aria-label={`Remove one ${product.name}`}
                          >
                            <Minus size={13} />
                          </button>
                          <span className="text-cream text-xs font-mono w-4 text-center">
                            {qty}
                          </span>
                          <button
                            onClick={() => addItem(product)}
                            className="w-6 h-6 flex items-center justify-center text-cream focus-ring rounded-full"
                            aria-label={`Add one more ${product.name}`}
                          >
                            <Plus size={13} />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {list.length > 0 && (
                  <div className="border-t border-forest-100 px-5 py-4 space-y-2 bg-white">
                    <div className="flex justify-between text-sm text-forest-700">
                      <span>Subtotal</span>
                      <span className="font-mono">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-sm text-forest-700">
                      <span>Delivery</span>
                      <span className="font-mono">
                        {deliveryFee === 0 ? "Free" : `₹${deliveryFee}`}
                      </span>
                    </div>
                    <div className="flex justify-between font-bold text-forest-900 pt-2 border-t border-forest-100">
                      <span>Total</span>
                      <span className="font-mono">
                        ₹{subtotal + deliveryFee}
                      </span>
                    </div>
                    <button
                      onClick={handleCheckout}
                      className="w-full bg-mango-500 hover:bg-mango-600 text-forest-900 font-bold rounded-full py-3 mt-2 transition-colors focus-ring"
                    >
                      Checkout
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
