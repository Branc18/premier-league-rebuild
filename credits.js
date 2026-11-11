const names = new Map([
  ...featuredTargets,
  ...[...clubData.values()].flatMap(({ squad }) => squad)
].map(({ id, name }) => [id, name]));

const creditsList = document.querySelector("#creditsList");
const creditsMessage = document.querySelector("#creditsMessage");

function renderPhotoCredits() {
  const ids = photoIdsFromCreditCode(location.hash.slice(1));
  creditsList.replaceChildren();
  creditsMessage.textContent = ids.length
    ? "These photos were cropped to fit the team graphic. The source pages include the originals and full licence details."
    : "Open this page using the full photo credits URL printed on your team graphic.";

  for (const id of ids) {
    const { source, author, license } = playerPhotos.get(id);
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = source;
    link.textContent = names.get(id) ?? "Original photo";
    item.append(link, " · " + author + " · " + license);
    creditsList.append(item);
  }
}

addEventListener("hashchange", renderPhotoCredits);
renderPhotoCredits();
