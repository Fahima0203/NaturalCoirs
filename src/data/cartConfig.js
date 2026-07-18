/**
 * cartConfig.js — Central allowlist for cart-enabled products.
 *
 * To enable a product for Add to Cart / Checkout / Payment:
 *   add  { section: "...", name: "..." }  to CART_ENABLED_PRODUCTS
 *
 * To disable a product temporarily:
 *   comment out or remove its entry — no other code changes needed.
 */
export const CART_ENABLED_PRODUCTS = [
  { section: "Cocopeat Blocks", name: "5 Kg" },
  { section: "Cocopeat Blocks", name: "1 Kg" },

  // ── Future products — uncomment to enable ─────────────────────────────────
  // { section: "Cocopeat Blocks",   name: "2 Kg"       },
  // { section: "Cocopeat Blocks",   name: "650 g"      },
  // { section: "Coco Chips Blocks", name: "5 Kg"       },
  // { section: "Coir Fibre",        name: "30 Kg Bale" },
  // { section: "Coir Fibre",        name: "120 Kg Bale"},
  // { section: "Coir Yarn",         name: "2 Ply 7 mm" },
  // ──────────────────────────────────────────────────────────────────────────
];

/**
 * Returns true if the given product is enabled for cart / checkout.
 * Usage: isCartEnabled(section.title, product.name)
 */
export function isCartEnabled(sectionTitle, productName) {
  return CART_ENABLED_PRODUCTS.some(
    (p) => p.section === sectionTitle && p.name === productName
  );
}
