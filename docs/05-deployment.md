# Running & Deploying

## Run locally

No build tools needed.

**Option A — just open it:**
Double-click `index.html`, or open it directly in a browser.

**Option B — local server (recommended for testing):**
```bash
npx serve .
```
Then visit the URL it prints (usually `http://localhost:3000`).

## Deploy with GitHub Pages (recommended)

1. Push the repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select your default branch (e.g. `main`) and `/ (root)`.
4. Save. The site will be live within a minute or two at:
   `https://mmicbee.github.io/CFTFIP/`
5. Update the live link at the top of the root `README.md`.

## Deploy elsewhere

Since this is a single static HTML file with no build step, it will work unmodified on:

- **Netlify** — drag and drop the folder, or connect the repo
- **Vercel** — import the repo, framework preset "Other"
- **Any static host** (S3 + CloudFront, Cloudflare Pages, etc.)

## Updating content

- **Text content** (mission copy, pillar descriptions, contact info): edit directly in the relevant `<section>` in `index.html`.
- **Budget**: edit the `budgetItems` array near the bottom of `index.html`, and update `docs/04-budget-and-me.md` to match.
- **Colors/fonts**: edit the `:root` CSS variables at the top of the `<style>` block — see `docs/03-design-system.md`.

There is no CMS or database — every update is a direct edit to `index.html`, committed and pushed like any other change.
