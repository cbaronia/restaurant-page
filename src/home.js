import Cafe from "./cafe.jpeg";

function createHomeContent() {
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("container");

  const resName = document.createElement("h1");
  resName.textContent = "Restaurant Name";

  resName.classList.add("title");

  const resQuote = document.createElement("p");
  resQuote.textContent =
    '"Even bad coffee is better than no coffee at all." - David Lynch';

  // Add the image to our existing div.
  const resImg = new Image();
  resImg.src = Cafe;

  resImg.classList.add("homeImg");

  contentContainer.appendChild(resName);
  contentContainer.appendChild(resQuote);
  contentContainer.appendChild(resImg);

  return contentContainer;
}

export default createHomeContent;
