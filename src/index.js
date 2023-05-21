import "./style.css";
import createHeader from "./header";
import createFooter from "./footer";
import createHomeContent from "./home";

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
