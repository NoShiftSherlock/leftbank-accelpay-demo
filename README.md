# Left Bank Bourbon x AccelPay (private sales demo)

**This is a private sales demo, not a live store.** It uses Left Bank Distilled Spirits' name,
logos, product images and copy (from leftbankbourbon.com) to show the brand its own Wix site
with the AccelPay cart in place of the Bottle Nexus buy button. It is not affiliated with or
endorsed by Left Bank Distilled Spirits. All marks belong to their owners. Please keep the
link unlisted. No order can be placed and no payment is taken.

Live: https://noshiftsherlock.github.io/leftbank-accelpay-demo/

Platform: Wix (confirmed 2026-10-24: `generator` meta "Wix.com Website Builder"; Bottle
Nexus buy buttons on /shop/buyonline). The domain leftbankwhisky.com redirects to
leftbankbourbon.com.

| Page | What it shows |
| --- | --- |
| `index.html` | Home, Buy Online grid, the downriver story, how ordering works, reordering |
| `product.html?p=lb-small-batch` / `?p=lb-single-cask` | Product page: address check, in-state retailer routing, add to cart |
| `checkout.html` | Checkout with the fulfilling retailer named on the order |

## What is real and what is not

Real:
- Product copy and images: leftbankbourbon.com, 2026-10-24.
- Prices: $43.67 Small Batch and $68.00 Single Cask, as their current Bottle Nexus cart shows them, 2026-10-24.

Illustrative:
- Every retailer route. No retailer in the network stocks Left Bank today (Oasis Liquor in
  Cypress, TX lists it with zero stock) and it is not on Gopuff, so each order goes to a
  "Licensed retailer in <state>" demo route, connected at launch.
- Shipping ($14.99) and same-day ($9.99) fees, 8% tax, the order confirmation.

## How it is wired

`app.js` is a static stand-in for the LiquidCommerce Elements SDK, publishing the same
`lce:actions.*` events. `elements-config.js` holds the switch (off).

Built by AccelPay for a sales conversation with Left Bank Bourbon.
