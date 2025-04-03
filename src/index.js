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

    const _attatchEventListeneers = () => {

        // Get buttons from nav
        const myHomeBtn = document.getElementById("homeBtn");
        const myMenuBtn = document.getElementById("menuBtn");
        const myContactBtn = document.getElementById("contactBtn");

        // Assign relevant event listener to each button
        myHomeBtn.addEventListener("click", () => {
            console.log("Home");
        });

        myMenuBtn.addEventListener("click", () => {
            console.log("Menu");
        });

        myContactBtn.addEventListener("click", () => {
            console.log("Contact");
        });


    }

    return{_attatchEventListeneers};

})();

// Load homePage by default
homePage.createHomePage();
viewController._attatchEventListeneers();