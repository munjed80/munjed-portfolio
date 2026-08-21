import { SystemMap } from "../../../components/system-map";

export default function EcommerceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SystemMap
        title="Customer journey connected to merchant operations and commerce infrastructure"
        layers={[
          { label: "Discovery", items: ["EN / NL storefront", "Catalog", "Categories & collections", "Faceted discovery", "Product detail"] },
          { label: "Purchase", items: ["Wishlist", "Persistent cart", "Region checkout", "Stripe", "Mollie", "Order confirmation"] },
          { label: "Merchant", items: ["Medusa Admin", "Merchant Home", "Products & variants", "Pricing & inventory", "Low-stock workflow"] },
          { label: "Product data", items: ["Material", "Finish", "Dimensions", "Origin", "Care", "Packaging", "Verified claims"] },
          { label: "Infrastructure", items: ["Next.js", "Medusa.js", "PostgreSQL", "Redis", "Cloudinary", "Docker & CI"] },
        ]}
      />
    </>
  );
}
