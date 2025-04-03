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

    const _attatchEventListeners = () => {

        // Get buttons from nav
        const myHomeBtn = document.getElementById("homeBtn");
        const myMenuBtn = document.getElementById("menuBtn");
        const myContactBtn = document.getElementById("contactBtn");

        // Assign relevant event listener to each button
        myHomeBtn.addEventListener("click", () => {
            // Clear Page
            _clearPage();
            // Draw Home Page
            homePage.createHomePage();
        });

        myMenuBtn.addEventListener("click", () => {
            // Clear Page
            _clearPage();
            // Draw Menu Page
            menuPage.createMenuPage();
        });

        myContactBtn.addEventListener("click", () => {
            // Clear Page
            _clearPage();
            // Draw Contact Page
            contactPage.createContactPage();
        });


    }

    const initialPageLoad = () => {
        // Draw Home Page
        homePage.createHomePage();
        // Attach event listeners
        _attatchEventListeners();
    };

    return{initialPageLoad};

})();

viewController.initialPageLoad();
