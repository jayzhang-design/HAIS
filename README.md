# HAIS — Human-Centered Safety Intervention

HAIS helps people pause and assess risk before acting on potentially unsafe advice. Its conversational interface makes safety concerns visible, explains why they matter, and offers a safer way forward.

The project translates findings from AI response evaluation into a practical interaction: a warning appears before the relevant reply, giving users a chance to reconsider the suggested action while staying focused on their original goal.

[Open HAIS](https://jayzhang-design.github.io/HAIS/)

## Safety categories

| Category | Focus |
|---|---|
| Chemical & Physical Safety | Chemical combinations and everyday handling risks |
| Digital & Financial Safety | Suspicious messages, payment requests and account risks |
| Food & Biological Safety | Food preparation, cooking and storage |
| Medical & Pharmaceutical Safety | Medicine combinations and questions for professional review |
| Fitness & Injury Safety | Training, recovery and injury-related concerns |


## How it works

1. Choose a safety category and enter a question, or select a suggested question.
2. When the question matches a supported risk pattern, the reply pauses and a warning explains the concern and a safer alternative.
3. Select **Use the safer approach** to receive safer guidance.
4. Alternatively, select **Review the flagged response** and acknowledge the warning to view a marked response with unsafe instructions withheld.


## Design and technology

- **Figma** for interface and interaction design.
- **HTML, CSS and JavaScript** for the browser interface.
- **Node.js** for local preview.
- **Git** for version control.
- **GitHub Actions and GitHub Pages** for automated publication.


## Main files

| File | Purpose |
|---|---|
| `index.html` | Page structure and dialog shell |
| `styles.css` | Layout, typography and responsive styles |
| `app.js` | Category navigation, welcome copy and conversation flow |
| `scenarios.js` | Suggested questions, warnings and response content |
| `rules.js` | Category-specific keyword matching |
| `normal-replies.js` | General safety principles for each category |
| `stream.js` | Progressive reply display |
| `server.js` | Local preview server |
| `tests/` | Automated checks |

Replace `logo/logoface.jpg` with a JPEG of the same name to change the user portrait. The reusable HAIS image is `logo/hais-avatar.jpg`.

## Publishing updates

Upload changed files to their existing paths on `main`. With Pages configured to use **GitHub Actions**, the **Publish HAIS** workflow runs checks and publishes the website assets. Wait for both **build** and **deploy** to succeed before checking the live site.

The public website address remains https://jayzhang-design.github.io/HAIS/ . A browser refresh may be needed after deployment.

## Content references

Evidence and wording decisions are documented separately:

- [Chemical safety](docs/risk-catalogue.md)
- [Digital and financial safety](docs/digital-safety.md)
- [Food safety](docs/food-safety.md)
- [Medical and pharmaceutical safety](docs/medical-safety.md)
- [Fitness and injury safety](docs/fitness-safety.md)
