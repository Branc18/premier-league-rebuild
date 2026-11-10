# Premier League Rebuild — Manchester United MVP

A static, browser-based football squad rebuild game. Built with vanilla HTML, CSS and JavaScript; no backend, login or paid hosting required.

## Run locally
Open `index.html` in a browser, or serve this folder with any static web server.

## Features
- Manchester United men's first-team squad seeded from the club's published 2026/27 roster
- Keep or sell each player; verified sale values add to the transfer budget
- Transfer market unlocks after every starting-squad player has a decision
- Buy Premier League rival first-team targets within budget
- 25-player squad cap
- 4-3-3, 4-2-3-1, 4-4-2 and 3-5-2 lineup builder
- Local browser save using localStorage
- Copyable text summary of the starting XI

## Data notes

The starting squad follows the club's [men's first-team page](https://www.manutd.com/en/teams/mens-team), excluding players listed as out on loan. Values were checked on 10 November 2026 against the [Transfermarkt squad](https://www.transfermarkt.com/manchester-united/kader/verein/985/saison_id/2026) and individual profiles. Jack Fletcher appears in the club's first-team list and on Transfermarkt as a Manchester United U21 player. His valuation comes from his Transfermarkt profile. Dermot Mee has no published value.

The market is a curated list of players on rival [2026/27 Premier League squads](https://www.transfermarkt.com/premier-league/startseite/wettbewerb/GB1). Player cards link to the original source and show its last valuation update when available. The snapshot is maintained in `app.js`. All prices are stored as whole euros without exchange-rate conversion and used as game transfer prices. Unvalued squad players can be sold without generating proceeds. Targets without a verified price cannot be signed.

Existing saves retain squad decisions and eligible lineup slots. Previous signings are repriced at verified EUR values in purchase order and retained when eligible and affordable within the squad cap. Slots for removed signings are cleared.

## Deploy with GitHub Pages
The workflow in `.github/workflows/deploy.yml` publishes the repository root to GitHub Pages whenever a commit is pushed to `main`. In the repository, open **Settings → Pages** and ensure **Build and deployment → Source** is set to **GitHub Actions**. The published URL will be:
`https://branc18.github.io/premier-league-rebuild/`

## Roadmap
1. Complete, verified first-team transfer database for all 20 clubs
2. Player portraits/club badges and improved team graphic export
3. Shareable saved builds (requires a small backend or URL-encoded squad state)
4. Expand club selection beyond Manchester United
