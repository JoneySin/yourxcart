export default function Footer() {
  return (
    <footer className="bg-forest-900 text-forest-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <span className="font-display italic text-2xl text-cream">
            Your<span className="text-mango-500 not-italic">X</span>Cart
          </span>
          <p className="text-sm text-forest-100/70 mt-3 max-w-xs">
            Fresh vegetables sourced directly from Sonipat farms, delivered
            to your door the same day they're picked.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-cream mb-3 text-sm">Shop</h4>
          <ul className="space-y-2 text-sm text-forest-100/70">
            <li>Leafy Greens</li>
            <li>Roots & Tubers</li>
            <li>Gourds</li>
            <li>Exotic Vegetables</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-cream mb-3 text-sm">Company</h4>
          <ul className="space-y-2 text-sm text-forest-100/70">
            <li>About Us</li>
            <li>Our Farmers</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-cream mb-3 text-sm">Support</h4>
          <ul className="space-y-2 text-sm text-forest-100/70">
            <li>Track Order</li>
            <li>Returns & Refunds</li>
            <li>Delivery Areas</li>
            <li>Help Center</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-forest-800 text-center text-xs text-forest-100/50 py-4">
        © {new Date().getFullYear()} YourXCart. All rights reserved.
      </div>
    </footer>
  );
}
