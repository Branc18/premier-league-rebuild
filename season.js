const seasonEngine = (() => {
  const positions = ["FWD", "MID", "DEF", "GK"];

  function rating(player) {
    return 42 + 13 * Math.log10(1 + (player.value || 0) / 1000000);
  }

  function strength(players) {
    const lines = positions.map(position => {
      const group = players.filter(player => player.pos === position);
      return group.length ? group.reduce((sum, player) => sum + rating(player), 0) / group.length : 55;
    });
    return { attack: lines[0], midfield: lines[1], defence: lines[2] * .72 + lines[3] * .28 };
  }

  function create(clubs, clubId, starters, squadFor, seed) {
    const order = clubs.map(club => club.id);
    const firstLeg = [];
    for (let round = 0; round < order.length - 1; round++) {
      firstLeg.push(order.slice(0, order.length / 2).map((id, index) => {
        const opponent = order[order.length - 1 - index];
        return (round + index) % 2 ? [opponent, id] : [id, opponent];
      }));
      order.splice(1, 0, order.pop());
    }
    const ratings = Object.fromEntries(clubs.map(club => {
      const squad = squadFor(club.id).slice().sort((a, b) => rating(b) - rating(a));
      const xi = positions.flatMap((position, index) =>
        squad.filter(player => player.pos === position).slice(0, [3, 3, 4, 1][index]));
      return [club.id, strength(club.id === clubId ? starters : xi)];
    }));
    return {
      version: 1, seed: seed >>> 0, ratings,
      fixtures: [...firstLeg, ...firstLeg.map(round => round.map(([home, away]) => [away, home]))],
      results: []
    };
  }

  function advance(season) {
    const fixtures = season.fixtures[season.results.length];
    if (!fixtures) return;
    function random() {
      season.seed = (Math.imul(1664525, season.seed) + 1013904223) >>> 0;
      return season.seed / 4294967296;
    }
    function goals(expected) {
      const stop = Math.exp(-expected);
      let product = random(), count = 0;
      while (product > stop) {
        count++;
        product *= random();
      }
      return count;
    }
    function expected(team, opponent, base) {
      return Math.max(.25, Math.min(3.4, base * Math.exp(
        (team.attack - opponent.defence + .35 * (team.midfield - opponent.midfield)) / 24)));
    }
    season.results.push(fixtures.map(([home, away]) => {
      const a = season.ratings[home], b = season.ratings[away];
      return [goals(expected(a, b, 1.55)), goals(expected(b, a, 1.17))];
    }));
  }

  function table(season) {
    const rows = Object.fromEntries(Object.keys(season.ratings).map(id =>
      [id, { id, played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, points: 0 }]));
    season.results.forEach((results, round) => results.forEach(([hg, ag], index) => {
      const [home, away] = season.fixtures[round][index];
      for (const [id, gf, ga] of [[home, hg, ag], [away, ag, hg]]) {
        const row = rows[id];
        row.played++;
        row.gf += gf;
        row.ga += ga;
        if (gf > ga) { row.wins++; row.points += 3; }
        else if (gf === ga) { row.draws++; row.points++; }
        else row.losses++;
      }
    }));
    return Object.values(rows).sort((a, b) =>
      b.points - a.points || (b.gf - b.ga) - (a.gf - a.ga) || b.gf - a.gf || a.id.localeCompare(b.id));
  }

  return { create, advance, table };
})();
