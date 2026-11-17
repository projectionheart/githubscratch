# githubscratch

Scratch space for ideas.

## Daily idea text

`.github/workflows/daily-idea-text.yml` sends a text every morning at 9 AM ET (10 AM in summer). It asks whether you have an idea to commit and links to a new file in `ideas/`. Tap the link, write the idea, and press **Commit changes**.

### Setup

1. Get a Twilio account and an SMS-capable number (twilio.com).
2. In this repo go to **Settings → Secrets and variables → Actions** and add:
   - `TWILIO_ACCOUNT_SID`
   - `TWILIO_AUTH_TOKEN`
   - `TWILIO_FROM` – your Twilio number, e.g. `+15551234567`
   - `MY_PHONE` – the number to text, e.g. `+15559876543`
3. To send a test, go to **Actions → Daily idea text → Run workflow**.

To change the time, edit the `cron` line (it uses UTC).
