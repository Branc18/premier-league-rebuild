# Premier League Rebuild

A static, browser-based football squad rebuild game. Built with vanilla HTML, CSS and JavaScript; no backend, login or paid hosting required.

## Run locally
Open `index.html` in a browser, or serve this folder with any static web server.

## Features
- Club selection homepage for the 20 clubs in the 2026/27 Premier League
- Manchester United and Arsenal are playable. The other clubs are listed as coming soon until their squads are added.
- Manchester United men's first-team squad seeded from the club's published 2026/27 roster
- Keep or sell each player; verified sale values add to the transfer budget
- Transfer market unlocks after every starting-squad player has a decision
- Buy Premier League rival first-team targets within budget
- 25-player squad cap
- Drag-and-drop Starting XI builder with seven formations
- A separate local browser save per club, with support for the original Manchester United save
- A shareable team graphic with copy and download controls

## Data notes

The starting squad follows the club's [men's first-team page](https://www.manutd.com/en/teams/mens-team), excluding players listed as out on loan. Values were checked on 10 November 2026 against the [Transfermarkt squad](https://www.transfermarkt.com/manchester-united/kader/verein/985/saison_id/2026) and individual profiles. Jack Fletcher appears in the club's first-team list and on Transfermarkt as a Manchester United U21 player. His valuation comes from his Transfermarkt profile. Dermot Mee has no published value.

Arsenal uses the [2026/27 squad snapshot](https://www.transfermarkt.com/fc-arsenal/kader/verein/11/saison_id/2026) checked on 11 November 2026. The market combines curated targets and verified players from other playable clubs in the [2026/27 Premier League squads](https://www.transfermarkt.com/premier-league/startseite/wettbewerb/GB1). Player cards link to the original source and show its last valuation update when available. The snapshot is maintained in `club-data.js`. All prices are stored as whole euros without exchange-rate conversion and used as game transfer prices. Unvalued squad players can be sold without generating proceeds. Targets without a verified price cannot be signed.

Existing saves retain squad decisions and eligible lineup slots. Previous signings are repriced at verified EUR values in purchase order and retained when eligible and affordable within the squad cap. Slots for removed signings are cleared.

## Add a playable club
The directory reads club identities, colours and crests from `clubs.js`. Register a club's squad, stadium, valuation source and snapshot date under its existing ID in `club-data.js`. The homepage will enable its link to `game.html?club=<id>`. The game uses the same lineup, transfer and export features for every registered club.

## Deploy with GitHub Pages
The workflow in `.github/workflows/deploy.yml` publishes the repository root to GitHub Pages whenever a commit is pushed to `main`. In the repository, open **Settings → Pages** and ensure **Build and deployment → Source** is set to **GitHub Actions**. The published URL will be:
`https://branc18.github.io/premier-league-rebuild/`

## Roadmap
1. Complete, verified first-team transfer database for all 20 clubs
2. Register and verify the remaining 18 playable clubs
3. Shareable saved builds (requires a small backend or URL-encoded squad state)
