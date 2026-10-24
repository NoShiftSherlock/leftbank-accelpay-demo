/* ============================================================================
 * THE SWITCH
 *
 * This brand has no LiquidCommerce partner account, so the real Elements
 * SDK cannot run here. app.js is a static stand-in that publishes the same
 * `lce:actions.*` events, with the same { data, metadata } envelope, that the
 * SDK publishes. Anything wired to those events keeps working after switchover.
 *
 * TO TURN IT ON (once the brand has a partner account)
 *   1. Run ~/.claude/skills/liquidcommerce-elements-demo/scripts/lc-preflight.sh
 *      and only continue when Elements returns 200.
 *   2. Set enabled = true, paste the pk_ data-token and the partner code.
 *   3. Put each product's real UPC in data-lce-product and delete app.js.
 * ========================================================================== */
window.ELEMENTS = {
  enabled: false,
  token: '',
  partnerCode: '',
  env: 'production'
};

(function () {
  var E = window.ELEMENTS;
  if (!E.enabled || !E.token || !E.partnerCode) return;
  var s = document.createElement('script');
  s.src = 'https://assets.liquidcommerce.cloud/' + E.partnerCode + '/elements.js';
  s.setAttribute('data-liquid-commerce-elements', '');
  s.setAttribute('data-token', E.token);
  s.setAttribute('data-env', E.env);
  document.head.appendChild(s);
})();
