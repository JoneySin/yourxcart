import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "YourXCart — Farm-Fresh Vegetables, Delivered",
  description:
    "Order fresh vegetables online from YourXCart. Same-day mandi-fresh delivery of tomatoes, onions, leafy greens and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${jbmono.variable} font-body bg-cream text-forest-900`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
