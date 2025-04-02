import espressoPicture from "./espresso.jpeg";
import americanoPicture from "./americano.jpeg";
import cappuccinoPicture from "./cappuccino.jpeg";
import mochaPicture from "./mocha.jpeg";
import pourOverPicture from "./pour-over.jpeg";

const menuPage = (function () {
    
    const _createMenuTitle = () => {
        // Create Element
        const menuTitle = document.createElement("h1");

        // Modify Element
        menuTitle.textContent = "Menu";
        menuTitle.classList.add("tab-title");

        // Return Element
        return menuTitle;
    };

    const _createMenuItem = (imgSrc, imgAlt, menuItemName, menuItemPrice) => {
        // Create Element
        const menuItem_LI = document.createElement("li");
        const menuItem_IMG = document.createElement("img");
        const menuItem_DIV = document.createElement("div");
        const menuItem_H2 = document.createElement("h2");
        const menuItem_P = document.createElement("p");

        // Modify Element
        menuItem_IMG.src = imgSrc;
        menuItem_IMG.alt = imgAlt;
        menuItem_H2.textContent = menuItemName;
        menuItem_P.textContent = menuItemPrice;

        // Append Element
        menuItem_DIV.appendChild(menuItem_H2);
        menuItem_DIV.appendChild(menuItem_P);

        menuItem_LI.appendChild(menuItem_IMG);
        menuItem_LI.appendChild(menuItem_DIV);

        // Return Element
        return menuItem_LI;
    }

    const _createMenuList = () => {
        // Create Element
        const menuList__UL = document.createElement("ul");

        // Modify Element
        menuList__UL.classList.add("menu-list");

        // Return Element
        return menuList__UL;
    };

    const createMenuPage = () => {

        // Get the 'content' container
        const contentContainer = document.getElementById("content");

        // Create the elements
        const myMenuTitle = _createMenuTitle();
        const myMenuList = _createMenuList();

        const myEspressoItem = _createMenuItem(espressoPicture, "Pic of espresso", "Espresso", "$2.50");
        const myAmericanoItem = _createMenuItem(americanoPicture, "Pic of americano", "Americano", "$3.75");
        const myCappuccinoItem = _createMenuItem(cappuccinoPicture, "Pic of cappuccino", "Cappuccino", "$4.50");
        const myMochaItem = _createMenuItem(mochaPicture, "Pic of mocha", "Mocha", "$4,25");
        const myPourOverItem = _createMenuItem(pourOverPicture, "Pic of pour over", "Pour Over", "$5.00");

        // Append the elements
        myMenuList.appendChild(myEspressoItem);
        myMenuList.appendChild(myAmericanoItem);
        myMenuList.appendChild(myCappuccinoItem);
        myMenuList.appendChild(myMochaItem);
        myMenuList.appendChild(myPourOverItem);

        contentContainer.appendChild(myMenuTitle);
        contentContainer.appendChild(myMenuList);

    };

    return {createMenuPage};

})();

export default menuPage;