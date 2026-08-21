export default function EcommerceCaseStudy() {
  return (
    <main>
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 lg:px-10">
        <a href="/" className="text-sm font-bold tracking-[0.18em]">MUNJED ALSAIED</a>
        <a href="/" className="text-sm text-[var(--muted)]">Back to portfolio</a>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10 lg:pt-28">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Commerce · Platform Engineering
        </p>
        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
          Self-hosted commerce built as an operating system for the merchant.
        </h1>
        <div className="mt-10 grid gap-8 border-t border-[var(--line)] pt-8 md:grid-cols-3">
          <p className="text-lg leading-8 md:col-span-2">
            A European jewelry and women&apos;s accessories commerce platform combining a bilingual storefront,
            Medusa commerce backend, merchant administration, payments, media infrastructure, and deployment controls.
          </p>
          <div className="space-y-3 text-sm leading-6 text-[var(--muted)]">
            <p><strong className="text-[var(--foreground)]">Status:</strong> Commerce foundation complete</p>
            <p><strong className="text-[var(--foreground)]">Market:</strong> Europe / Netherlands</p>
            <p><strong className="text-[var(--foreground)]">Stack:</strong> Next.js · Medusa · PostgreSQL · Redis</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white/30">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">The product problem</p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em]">
              Own the storefront, commerce backend, merchant workflow, and deployment stack.
            </h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              The platform was designed to avoid locking the business into a hosted storefront while still providing the operating features a merchant needs every day: products, variants, pricing, inventory, media, payments, orders, and product-specific commercial data.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Implemented scope</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:col-span-8">
            {[
              ["Storefront", "Product catalog, categories, collections, faceted discovery, product pages, wishlist, related products, recently viewed, persistent cart, and region-aware checkout."],
              ["Payments & market", "Stripe and Mollie payment flows, order confirmation, EUR pricing, VAT-oriented market configuration, and European commerce assumptions."],
              ["Merchant operations", "Medusa Admin as the merchant control plane with product, order, draft, low-stock, pricing, variant, image, and inventory workflows."],
              ["Jewelry-specific data", "Custom product details for material, finish, dimensions, origin, care, packaging, and verified product claims."],
              ["Localization", "Native English and Dutch customer UI with locale routes, canonical URLs, hreflang, Open Graph locale handling, and locale-aware formatting."],
              ["Media & delivery", "Cloudinary-backed product media, PostgreSQL persistence, Redis infrastructure, Docker deployment, and CI for storefront and backend/admin."],
            ].map(([title, body]) => (
              <article key={title} className="border-t border-[var(--foreground)] pt-5">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--foreground)] text-[var(--background)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-400">Architecture</p>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-8 text-lg leading-8 text-neutral-300">
              <p><strong className="text-white">Storefront:</strong> Next.js + React + TypeScript for the customer-facing experience.</p>
              <p><strong className="text-white">Commerce core:</strong> Medusa.js provides catalog, product, order, pricing, inventory, and admin capabilities.</p>
              <p><strong className="text-white">Merchant control plane:</strong> Medusa Admin is extended with a merchant home and jewelry-specific product editing.</p>
              <p><strong className="text-white">Data layer:</strong> PostgreSQL for commerce data, Redis for cache/event infrastructure, and Cloudinary for product media.</p>
              <p><strong className="text-white">Payments:</strong> Stripe and Mollie are integrated to support relevant European payment flows.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Engineering decisions</p>
          </div>
          <div className="space-y-10 lg:col-span-8">
            <div>
              <h3 className="text-2xl font-semibold">One merchant control plane</h3>
              <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">Normal operations should not require database access, GitHub, raw JSON, or a separate media dashboard. The admin experience is treated as part of the product rather than a developer-only concern.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Domain-specific product data</h3>
              <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">Jewelry attributes such as material, finish, dimensions, origin, care, and packaging are modeled explicitly instead of being buried in free-form descriptions.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Localization beyond translated labels</h3>
              <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">Locale-aware routing, canonical URLs, hreflang, formatting, and metadata are part of the customer architecture. Product content translation remains deliberately separate until a clear bilingual catalog model is defined.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Production claims stay bounded</h3>
              <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">The commerce foundation and customer journey are implemented, but browser-level revenue-path E2E, production-like payment/webhook validation, Lighthouse measurements, real-device QA, shipping rules, and legally reviewed Dutch policy text remain explicit pre-production work.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-12 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div>
            <p className="text-sm text-[var(--muted)]">Repository</p>
            <p className="mt-1 font-semibold">Private project · portfolio summary published selectively</p>
          </div>
          <a href="/" className="text-sm font-semibold underline underline-offset-8">Back to selected work</a>
        </div>
      </section>
    </main>
  );
}
