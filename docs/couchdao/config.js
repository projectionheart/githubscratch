// CouchDAO site settings — edit these, commit, and the site updates.
// Paste each Stripe Payment Link URL (https://buy.stripe.com/...) below.
// Any button without a link shows as "coming soon".
window.COUCHDAO = {
  links: {
    rent: "",  // Stripe Payment Link for a lounge rental
    buy:  "",  // Stripe Payment Link for buying a lounge
    host: ""   // a form or email link for host applications, e.g. "mailto:you@example.com"
  },
  prices: {
    rent: "$25",
    buy:  "$350"
  },
  per: {
    rent: "per borrow, up to a week",
    buy:  "one-time, delivered locally"
  },
  contactEmail: ""
};
