function createHeader() {
  let theHeader = document.createElement("header");
  let theTabs = document.createElement("ul");
  let homeTab = document.createElement("li");
  let menuTab = document.createElement("li");
  let contactTab = document.createElement("li");

  homeTab.classList.add("homeTab");
  menuTab.classList.add("menuTab");
  contactTab.classList.add("contactTab");

  homeTab.textContent = "Home";
  menuTab.textContent = "Menu";
  contactTab.textContent = "Contact";

  theTabs.appendChild(homeTab);
  theTabs.appendChild(menuTab);
  theTabs.appendChild(contactTab);

  theHeader.appendChild(theTabs);

  theTabs.classList.add("theTabs");

  return theHeader;
}

export default createHeader;
