# HAIS — Human-Centered Safety Intervention

HAIS introduces a safety checkpoint in a conversational cleaning assistant. Potentially hazardous recommendations pause before display. A prominent dialog identifies the concern, explains the consequences, and offers a safer alternative.

Users can choose the safer approach or acknowledge the warning and review a marked response with dangerous instructions withheld. Clear visual hierarchy and progressive replies help users understand the guidance while continuing toward their original goal.

The interaction addresses a gap between identifying unsafe AI advice and helping people make informed decisions at the moment of use.

URL：https://jayzhang-design.github.io/HAIS/

## Use and publish

See [HANDOVER.md](HANDOVER.md) for local startup, GitHub Pages publication, and maintenance instructions.

## Repository structure

- `index.html`, `styles.css`: interface and layout.
- `app.js`, `stream.js`: conversations, dialogs, and progressive output.
- `rules.js`, `scenarios.js`, `normal-replies.js`: matching rules and reply content.
- `logo/logoface.jpg`: replaceable user portrait.
- `server.js`: local preview server.
- `scripts/build-site.mjs`: prepares website assets.
- `.github/workflows/pages.yml`: tests and publishes to GitHub Pages.
- `tests/`: automated checks.
- `docs/`: technical handover and risk wording references.

Only files prepared in `dist/` are deployed to the website. Source documentation and local tools remain outside the published website.
