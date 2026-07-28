import Image from "next/image";
import { Truck, Clock, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest-800">
      <div className="absolute inset-0 bg-leaf-texture opacity-[0.15] [background-size:22px_22px]" />
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block bg-mango-500 text-forest-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
              Mandi-fresh, cut this morning
            </span>
            <h1 className="font-display italic text-cream text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              From the farm gate to
              <span className="text-mango-500 not-italic"> your kitchen</span>{" "}
              — same day.
            </h1>
            <p className="text-forest-100/90 mt-4 text-base md:text-lg max-w-md">
              No cold storage, no middlemen markup. We pick straight from
              Sonipat farms every morning and get it to your door before
              lunch.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 text-cream text-sm">
                <Clock size={18} className="text-mango-500" />
                60-min delivery
              </div>
              <div className="flex items-center gap-2 text-cream text-sm">
                <Truck size={18} className="text-mango-500" />
                Free above ₹199
              </div>
              <div className="flex items-center gap-2 text-cream text-sm">
                <ShieldCheck size={18} className="text-mango-500" />
                Not fresh? Full refund
              </div>
            </div>
          </div>

          <div className="relative h-56 md:h-80 rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=1200&auto=format&fit=crop"
              alt="Crates of fresh vegetables at a market stall"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
