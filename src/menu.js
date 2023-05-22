function createMenuContent() {
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("container");

  let menuTitle = document.createElement("h1");
  menuTitle.textContent = "Menu";

  let menuList = document.createElement("ul");
  let coffeeItem = document.createElement("li");
  let teaItem = document.createElement("li");
  let milkItem = document.createElement("li");
  let waterItem = document.createElement("li");

  coffeeItem.textContent = "Coffee";
  teaItem.textContent = "Tea";
  milkItem.textContent = "Milk";
  waterItem.textContent = "Water";

  menuList.appendChild(coffeeItem);
  menuList.appendChild(teaItem);
  menuList.appendChild(milkItem);
  menuList.appendChild(waterItem);

  contentContainer.appendChild(menuTitle);
  contentContainer.appendChild(menuList);

  return contentContainer;
}

export default createMenuContent;
