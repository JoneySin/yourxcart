"use client";

import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);

  const addItem = (product) => {
    setItems((prev) => {
      const existing = prev[product.id];
      const qty = existing ? existing.qty + 1 : 1;
      return { ...prev, [product.id]: { product, qty } };
    });
  };

  const removeItem = (productId) => {
    setItems((prev) => {
      const existing = prev[productId];
      if (!existing) return prev;
      if (existing.qty <= 1) {
        const next = { ...prev };
        delete next[productId];
        return next;
      }
      return { ...prev, [productId]: { ...existing, qty: existing.qty - 1 } };
    });
  };

  const clearItem = (productId) => {
    setItems((prev) => {
      const next = { ...prev };
      delete next[productId];
      return next;
    });
  };

  const value = useMemo(() => {
    const list = Object.values(items);
    const totalQty = list.reduce((sum, i) => sum + i.qty, 0);
    const subtotal = list.reduce((sum, i) => sum + i.qty * i.product.price, 0);
    return {
      items,
      list,
      totalQty,
      subtotal,
      addItem,
      removeItem,
      clearItem,
      drawerOpen,
      setDrawerOpen,
    };
  }, [items, drawerOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
