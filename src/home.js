import cafePicture from "./ruben-ramirez-xhKG01FN2uk-unsplash.jpg";

const homePage = (function () {
    
    const _createHomeTitle = () => {
        // Create Element
        const cafeTitle = document.createElement("h1");

        // Modify Element
        cafeTitle.textContent = "Cafe Name";
        cafeTitle.classList.add("tab-title");

        // Return Element
        return cafeTitle;
    };

    const _createCafeImg = () => {
        // Create Element
        const cafe_IMG = document.createElement("img");

        // Modify Element
        cafe_IMG.src = cafePicture;
        cafe_IMG.alt = "Image of Cafe";
        cafe_IMG.classList.add("cafe-img");

        // Return Element
        return cafe_IMG;
    };

    const _createHours = () => {
        // Create Element(s)
        const hours_DIV = document.createElement("div");
        const hours_H2 = document.createElement("h2");
        const hours_UL = document.createElement("ul");
        const hours_LI1 = document.createElement("li");
        const hours_LI2 = document.createElement("li");
        const hours_LI3 = document.createElement("li");

        // Modify Element(s)
        hours_DIV.classList.add("hours");
        hours_H2.textContent = "Hours";
        hours_LI1.textContent = "Mon-Thur: 7am - 4pm";
        hours_LI2.textContent = "Sat: 7am - 3pm";
        hours_LI3.textContent = "Sun: Closed";

        // Append Elements 
        hours_UL.appendChild(hours_LI1);
        hours_UL.appendChild(hours_LI2);
        hours_UL.appendChild(hours_LI3);

        hours_DIV.appendChild(hours_H2);
        hours_DIV.appendChild(hours_UL);

        // Return Element
        return hours_DIV;
    };

    const _createLocation = () => {
        // Create Element(s)
        const location_DIV = document.createElement("div");
        const location_H2 = document.createElement("h2");
        const location_P = document.createElement("p");

        // Modify Element(s)
        location_DIV.classList.add("location");
        location_H2.textContent = "Location";
        location_P.textContent = "350 Express Drive, North Pacific City, Washington";

        // Append Element(s)
        location_DIV.appendChild(location_H2);
        location_DIV.appendChild(location_P);

        // Return Element
        return location_DIV;
    };

    const createHomePage = () => {

        // Get the 'content' container
        const contentContainer = document.getElementById("content");

        // Create the elements
        const myHomeTitle = _createHomeTitle();
        const myCafeImg = _createCafeImg();
        const myHours = _createHours();
        const myLocation = _createLocation();

        // Append the elements
        contentContainer.appendChild(myHomeTitle);
        contentContainer.appendChild(myCafeImg);
        contentContainer.appendChild(myHours);
        contentContainer.appendChild(myLocation);

    };

    return {createHomePage};

})();

export default homePage;