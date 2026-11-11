// Export codes use the append-only order of the player photo registry.
const photoCreditAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
const photoCreditIds = [...playerPhotos.keys()];
const photoCreditCodes = new Map(photoCreditIds.map((id, index) => [
  id, photoCreditAlphabet[Math.floor(index / 64)] + photoCreditAlphabet[index % 64]
]));

function photoCreditsUrl(ids) {
  const url = new URL("credits.html", location.href);
  url.hash = ids.map(id => photoCreditCodes.get(id)).join("");
  return url.href;
}

function photoIdsFromCreditCode(code) {
  if (!/^(?:[A-Za-z0-9_-]{2}){1,11}$/.test(code)) return [];
  const ids = code.match(/../g).map(([high, low]) =>
    photoCreditIds[photoCreditAlphabet.indexOf(high) * 64 + photoCreditAlphabet.indexOf(low)]
  );
  return ids.every(Boolean) && new Set(ids).size === ids.length ? ids : [];
}
