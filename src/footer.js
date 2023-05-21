function createFooter() {
  let theFooter = document.createElement("footer");
  let someInfo = document.createElement("p");

  someInfo.innerHTML = "&copy Kitty Kat";

  theFooter.appendChild(someInfo);

  return theFooter;
}

export default createFooter;
