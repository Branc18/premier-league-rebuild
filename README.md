# Premier League Rebuild — Manchester United MVP

A static, browser-based football squad rebuild game. Built with vanilla HTML, CSS and JavaScript; no backend, login or paid hosting required.

## Run locally
Open `index.html` in a browser, or serve this folder with any static web server.

## Features
- Manchester United men's first-team squad seeded from the club's published 2026/27 roster
- Keep or sell each player; sale estimates add to the transfer budget
- Transfer market unlocks after every starting-squad player has a decision
- Buy Premier League rival first-team targets within budget
- 25-player squad cap
- 4-3-3, 4-2-3-1, 4-4-2 and 3-5-2 lineup builder
- Local browser save using localStorage
- Copyable text summary of the starting XI

## Data notes
The Manchester United squad list is based on the club's current [Men's Team page](https://www.manutd.com/en/teams/mens-team) and [2026/27 squad announcement](https://www.manutd.com/en/news/premier-league-squad-confirmed-for-2026-27). The transfer market is a curated starter sample of rival Premier League players, not the complete league database. Player valuations are illustrative GBP estimates for gameplay only, not live Transfermarkt values or official valuations. Squad and club affiliations should be reviewed periodically as transfers and loans change.

## Deploy with GitHub Pages
The workflow in `.github/workflows/deploy.yml` publishes the repository root to GitHub Pages whenever a commit is pushed to `main`. In the repository, open **Settings → Pages** and ensure **Build and deployment → Source** is set to **GitHub Actions**. The published URL will be:
`https://branc18.github.io/premier-league-rebuild/`

## Roadmap
1. Complete, verified first-team transfer database for all 20 clubs
2. Player portraits/club badges and improved team graphic export
3. Shareable saved builds (requires a small backend or URL-encoded squad state)
4. Expand club selection beyond Manchester United
