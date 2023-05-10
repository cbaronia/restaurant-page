import "./style.css";

function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello, World!";
  element.classList.add("test");

  return element;
}

document.body.appendChild(component());
