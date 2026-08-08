# Running & Deploying
Run locally

No build tools needed.

# Option A — just open it:
Double-click index.html, or open it directly in a browser.

# Option B — local server (recommended for testing):

npx serve .


Then visit the URL it prints (usually http://localhost:3000).

# Deploy with Render 

This project is a single static HTML file, so it can be deployed directly to Render without a build step.

Push the repository to GitHub.

Sign in to Render and create a new Static Site.

Connect the GitHub repository containing the project.

Set the Build Command to:

None


or leave it blank if Render allows it.

Set the Publish Directory to:

.


Create the site and wait for the deployment to complete.

The live site is available at:

https://cftfip.onrender.com

Whenever changes are pushed to the connected GitHub repository, Render can automatically redeploy the site.

Deploy elsewhere

Since this is a single static HTML file with no build step, it will also work unmodified on:

Netlify — drag and drop the folder, or connect the repository
Vercel — import the repository, framework preset "Other"
Any static host — S3 + CloudFront, Cloudflare Pages, or similar static hosting services
Updating content
Text content (mission copy, pillar descriptions, contact info): edit directly in the relevant <section> in index.html.
Budget: edit the budgetItems array near the bottom of index.html, and update docs/04-budget-and-me.md to match.
Colors/fonts: edit the :root CSS variables at the top of the <style> block — see docs/03-design-system.md.

There is no CMS or database — every update is a direct edit to index.html, committed and pushed like any other change.#