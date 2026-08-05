# CFTFIP — Care For The Future Integrated Project

A one-page website built for CFTFIP, a community development proposal covering agriculture and food security, economic development, environmental sustainability, and child protection in Rachuonyo South, Homabay County, Kenya.

**[View the live site →](https://mmicbee.github.io/cftfip/)**
*(link goes live once GitHub Pages is enabled — see below)*

![CFTFIP site screenshot](screenshots/hero.png)

## About the project

CFTFIP is an integrated development proposal built around four pillars:

1. **Agriculture & Food Security** — improving crop and livestock productivity and access to appropriate technology for vulnerable households.
2. **Economic Development & Employment** — strengthening small enterprises and creating youth self-employment pathways.
3. **Environment & Climate Change** — drought-resilient farming, soil conservation, and renewable energy adoption.
4. **Lobbying & Advocacy** — accountability for local leadership and protection of children from exploitation and abuse.

This site distills the full proposal — including its budget, monitoring & evaluation plan, and target location — into a single scrollable page for donors, stakeholders, and community members.

## Built with

- Plain HTML, CSS, and vanilla JavaScript — no framework, no build step
- Google Fonts: Fraunces (display), Work Sans (body), IBM Plex Mono (data/labels)
- Scroll-triggered reveal animations and an animated budget breakdown, built with `IntersectionObserver`

## Running locally

No build tools required. Either:

```bash
# open directly
open index.html
```

or serve it locally:

```bash
npx serve .
```

## Deploying with GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select your default branch (e.g. `main`) and `/ (root)`.
4. Save — your site will be live at `https://mmicbee.github.io/CFTFIP/` within a minute or two.
5. Replace the live link at the top of this README once it's up.

## Documentation

Full documentation — project background, site architecture, design system, budget & M&E, deployment, and contributing guide — lives in [`/docs`](docs/README.md).

## Contact

**Christopher Jobita**
Email: jobitachristopher@gmail.com
Phone: +254 708 329 532 / +254 786 647 699

## License

MIT — see [LICENSE](LICENSE).
