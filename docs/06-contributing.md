# Contributing

This is a small, single-file project, so contribution is intentionally lightweight.

## Making a change

1. Fork or branch from `main`.
2. Edit `index.html` directly — there's no build step to run.
3. Preview locally (see `docs/05-deployment.md`).
4. If you changed the budget, project pillars, or M&E plan, update the matching file in `/docs` so the docs and the live site don't drift apart.
5. Open a pull request describing what changed and why.

## Style guidance for changes

- Follow the existing design system (`docs/03-design-system.md`) — reuse existing color variables and fonts rather than adding new ones.
- Keep data-driven content (like the budget) in its JS array rather than hardcoding new HTML rows.
- Any new section that scrolls into view should get the `reveal` class for consistency with the rest of the page.
- Keep the site dependency-free unless there's a strong reason to add a build step — the whole point of this project is that anyone can open and edit `index.html` without tooling.

## Reporting issues

If something looks broken (a layout issue, a broken link, outdated figures), open an issue describing:
- What you expected to see
- What you saw instead
- Browser/device, if it's a rendering issue
