"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryShelf from "@/components/CategoryShelf";
import ProductCard from "@/components/ProductCard";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import { products, categories } from "@/data/products";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(null);

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  const sectionTitle = activeCategory
    ? categories.find((c) => c.id === activeCategory)?.label
    : "Today's Fresh Picks";

  return (
    <>
      <Header />
      <Hero />
      <CategoryShelf active={activeCategory} onSelect={setActiveCategory} />

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-forest-900">
            {sectionTitle}
          </h2>
          <span className="text-sm text-forest-600/70">
            {filtered.length} items
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <CartDrawer />
      <Footer />
    </>
  );
}
