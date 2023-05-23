import "./style.css";
import createHeader from "./header";
import createFooter from "./footer";
import createHomeContent from "./home";
import createMenuContent from "./menu";
import createContactContent from "./contact";

let contentDiv = document.querySelector("#content");

function initialPageLayout() {
  // Header
  document.body.insertBefore(createHeader(), document.body.firstChild);
  // Content
  // Footer
  document.body.appendChild(createFooter());
}

function loadContent(content) {
  // Clear current page content
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
  // Append updated page content
  contentDiv.appendChild(content);
}

// First Page Load
initialPageLayout();
loadContent(createHomeContent());

// When tab for page is clicked, switch to page
let homeTab = document.querySelector(".homeTab");
homeTab.addEventListener("click", (e) => {
  loadContent(createHomeContent());
});

let menuTab = document.querySelector(".menuTab");
menuTab.addEventListener("click", (e) => {
  loadContent(createMenuContent());
});

let contactTab = document.querySelector(".contactTab");
contactTab.addEventListener("click", (e) => {
  loadContent(createContactContent());
});
