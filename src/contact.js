const contactPage = (function () {

    const _createContactTitle = () => {
        // Create Element
        const contactTitle = document.createElement("h1");

        // Modify Element
        contactTitle.textContent = "Contact";
        contactTitle.classList.add("tab-title");

        // Return Element
        return contactTitle;
    };

    const _createContactItem = (name, jobTitle, phoneNum, email) => {
        // Create Element
        const contactItem_LI = document.createElement("li");
        const contactItem_H2 = document.createElement("h2");
        const contactItem_DIV = document.createElement("div");
        const contactItem_jobTitle_P = document.createElement("p");
        const contactItem_phoneNum_P = document.createElement("p");
        const contactItem_email_P = document.createElement("p");

        // Modify Element
        contactItem_H2.textContent = name;
        contactItem_jobTitle_P.textContent = jobTitle;
        contactItem_phoneNum_P.textContent = phoneNum;
        contactItem_email_P.textContent = email;

        // Append Element
        contactItem_DIV.appendChild(contactItem_jobTitle_P);
        contactItem_DIV.appendChild(contactItem_phoneNum_P);
        contactItem_DIV.appendChild(contactItem_email_P);

        contactItem_LI.appendChild(contactItem_H2);
        contactItem_LI.appendChild(contactItem_DIV);

        // Return Element
        return contactItem_LI;

    };

    const _createContactList = () => {
        // Create Element
        const contactList_UL = document.createElement("ul");

        // Modify Element
        contactList_UL.classList.add("contacts");

        // Return Element
        return contactList_UL;
    };

    const createContactPage = () => {

        // Get the 'content' container
        const contentContainer = document.getElementById("content");

        // Create the elements
        const myContactTitle = _createContactTitle();
        const myContactList = _createContactList();
        const myContact_A = _createContactItem("Person A", "Manager", "555-55-5555", "concha45@email.com");
        const myContact_B = _createContactItem("Person B", "Barista", "444-44-4444", "melonbread9@email.com");
        const myContact_C = _createContactItem("Persona C", "Cashier", "123-45-6789", "personc23@email.com");

        // Append the elements
        myContactList.appendChild(myContact_A);
        myContactList.appendChild(myContact_B);
        myContactList.appendChild(myContact_C);

        contentContainer.appendChild(myContactTitle);
        contentContainer.appendChild(myContactList);

    };

    return {createContactPage};

})();

export default contactPage;