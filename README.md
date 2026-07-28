# YourXCart 🥬

Farm-fresh vegetables ki online delivery site — Flipkart-style layout (header + search + cart), lekin poori tarah vegetables ke liye design ki gayi. Next.js 14 (App Router) + Tailwind CSS mein bani hai.

## Features

- Sticky header with search aur live cart count
- Scrollable category shelf (Leafy Greens, Roots, Gourds, etc.)
- Product cards with **freshness badge** ("Harvested Today" / "Harvested Yesterday") — star rating ki jagah
- Add/remove quantity controls, sab kuch client-side state (React Context) mein
- Slide-over cart drawer with subtotal, delivery fee, aur total
- Fully responsive — mobile pe floating cart button

## Run Locally

```bash
npm install
npm run dev
```

Browser mein [http://localhost:3000](http://localhost:3000) kholo.

## Deploy on Vercel

1. Is repo ko apne GitHub account mein push karo.
2. [vercel.com/new](https://vercel.com/new) pe jao, apna GitHub repo import karo.
3. Framework preset apne aap "Next.js" detect ho jayega — bas **Deploy** dabao.
4. Har `git push` pe Vercel automatically redeploy kar dega.

## Project Structure

```
src/
  app/
    layout.js       -> fonts, global providers
    page.js         -> homepage (assembles all sections)
    globals.css     -> Tailwind + custom styles
  components/
    Header.jsx
    Hero.jsx
    CategoryShelf.jsx
    ProductCard.jsx
    CartDrawer.jsx
    CartContext.jsx  -> cart state (add/remove/qty)
    Footer.jsx
  data/
    products.js      -> vegetable catalog (edit this to add/remove items)
```

## Customize

- **Products**: `src/data/products.js` mein naya object add karo — `name`, `price`, `mrp`, `image`, `category`, `freshness`, `origin`, `unit`.
- **Colors**: `tailwind.config.js` mein `forest`, `mango`, `soil`, `cream` tokens edit karo.
- **Categories**: same `products.js` file mein `categories` array update karo.

## Next Steps (production ke liye)

- Real payment gateway (Razorpay/Stripe) integrate karo checkout button pe
- Backend/database (Postgres, MongoDB) add karo real orders aur inventory ke liye
- Auth (login/signup) add karo user accounts ke liye
- Images ko apne CDN ya `public/` folder se serve karo (abhi Unsplash placeholder hain)
