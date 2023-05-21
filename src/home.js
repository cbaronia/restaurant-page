import Sky from "./sky.png";

function createHomeContent() {
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("container");

  const resName = document.createElement("h1");
  resName.textContent = "Restaurant Name";

  const resDesc = document.createElement("p");
  resDesc.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  // Add the image to our existing div.
  const resImg = new Image();
  resImg.src = Sky;

  contentContainer.appendChild(resName);
  contentContainer.appendChild(resDesc);
  contentContainer.appendChild(resImg);

  return contentContainer;
}

export default createHomeContent;
