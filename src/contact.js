function createEmployeeBadge(name, role, phoneNum, email) {}

function createContactContent() {
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("container");

  let contactTitle = document.createElement("h1");
  contactTitle.textContent = "Contact Us";

  contentContainer.appendChild(contactTitle);

  return contentContainer;
}

export default createContactContent;
