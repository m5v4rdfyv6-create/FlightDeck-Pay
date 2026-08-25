# FlightDeck Pay Pro — finish setup

Most of the paid backend is already live in the connected Supabase project. The app is configured for a **$9.99 one-time lifetime Pro purchase**.

## One required Stripe step

Create a **LIVE restricted API key** in Stripe for this backend. Use a restricted key (`rk_live_...`) rather than your full secret key.

Give it only the permissions the checkout flow needs:

- Checkout Sessions: Write
- Products: Write
- Prices: Write
- Everything else: None

Then open the Supabase **FlightDeck-Pay** project → **Edge Functions → Secrets** and add:

- Name: `STRIPE_RESTRICTED_KEY`
- Value: your `rk_live_...` key

Never paste that key into `index.html`, GitHub, or any public file.

## Supabase login redirect

In Supabase → Authentication → URL Configuration:

1. Set **Site URL** to your final FlightDeck Pay web address.
2. Add your final address to **Redirect URLs**. If you are still testing on the GitHub Pages URL, add that address too.

## Host and upload the paid PWA

Do not use GitHub Pages as the production host for the paid/commercial version. Keep GitHub for source control, but deploy the live site to a commercial-friendly static host such as Cloudflare Pages.

Upload/replace the root website files with this package. Keep the same domain/origin if you want the current device's locally stored FlightDeck Pay entries to remain available.

After deployment, open the website once in Safari and refresh. If the installed Home Screen PWA stays on an old version, remove the Home Screen icon and add it again from the same website address. Removing the icon does not itself clear Safari website storage, but keeping a backup is still recommended.

## Test

1. Open FlightDeck Pay.
2. Verify your existing entries are still there.
3. Open Settings and create an account.
4. Confirm the email if Supabase asks you to.
5. Sign in.
6. Open Stats. Free users should see the $9.99 Pro screen.
7. Tap **Unlock Pro — $9.99 lifetime**.
8. Stripe Checkout should open.
9. After successful payment, Stripe returns to FlightDeck Pay and the account becomes Pro.

The actual flight/pay entries remain local to each user's device. Supabase stores login identity and Pro entitlement only.
