# FlightDeck Pay Privacy

FlightDeck Pay is designed to keep personal pay-tracking records on the user's device.

## Stored locally

Flight / Sim, Ground, Miscellaneous entries, rates, tax estimates, paycheck goals, pay-period dates, and local backups are stored in browser storage on the user's device.

## Account information

If a user creates an account, Supabase processes the account email, authentication information, and whether the account has FlightDeck Pay Pro access. FlightDeck Pay does not upload the user's pay-entry history to Supabase.

## Payments

Stripe processes payment information for FlightDeck Pay Pro. FlightDeck Pay does not receive or store full card numbers.
