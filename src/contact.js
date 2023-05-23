function createContactContent() {
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("container");

  let contactTitle = document.createElement("h1");
  contactTitle.textContent = "Contact Us";

  let address = document.createElement("p");
  address.textContent = "1852 Jim Rosa Lane, San Francisco, CA";

  let email = document.createElement("p");
  email.textContent = "notarealcafe123@email.com";

  let phoneNum = document.createElement("p");
  phoneNum.textContent = "123-456-7890";

  contactTitle.classList.add("title");

  contentContainer.appendChild(contactTitle);
  contentContainer.appendChild(address);
  contentContainer.appendChild(email);
  contentContainer.appendChild(phoneNum);

  return contentContainer;
}

export default createContactContent;
