import "./style.css";
import Sky from "./sky.png";

function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello, World!";
  element.classList.add("test");

  // Add the image to our existing div.
  const theSky = new Image();
  theSky.src = Sky;

  element.appendChild(theSky);

  return element;
}

document.body.appendChild(component());
