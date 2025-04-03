import "./styles.css";
import homePage from "./home.js";
import menuPage from "./menu.js";
import contactPage from "./contact.js";

const viewController = (function () {

    const _clearPage = () => {
        // Get the 'content' container
        const contentContainer = document.getElementById("content");

        // Remove all children elements
        while(contentContainer.firstChild){
            contentContainer.removeChild(contentContainer.lastChild);
        }
    };

    return{};

})();

// Load homePage by default
homePage.createHomePage();