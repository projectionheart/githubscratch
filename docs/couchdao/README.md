# CouchDAO

A mutual-aid network of chaise lounges. Hosts keep the lounges at home; anyone in the network can borrow one.

Static site, hosted on GitHub Pages. Payments run through Stripe Payment Links.

## Turning on payments

1. Make a Stripe account at stripe.com and finish account activation (business details + bank account for payouts).
2. In the Stripe Dashboard go to **Product catalog → Add product** and create:
   - **Lounge rental** — one-time price (e.g. $25)
   - **Chaise lounge** — one-time price (e.g. $350)
3. For each product, click **Create payment link**. Under options:
   - Turn on **Collect customers' phone numbers** (and shipping address for the chaise, if you deliver).
   - Add **custom fields**: `Name or handle`, `Neighborhood`, `Anything we should know?`
   - Under **After payment**, show a confirmation message like: "You're in. We'll reach out within 48 hours to match you with a lounge."
4. Copy each link (`https://buy.stripe.com/...`) into `config.js`, set the prices to match, commit, and push.

Every purchase shows up in Stripe under **Payments**, with the custom fields attached. Pay hosts their share from your Stripe balance however you like (bank transfer, Venmo, etc.).

## Editing

- `config.js` — payment links, prices, contact email
- `index.html` — everything else
