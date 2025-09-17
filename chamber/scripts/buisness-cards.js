// Fetch Data
const json = "data/members.json";

async function getBusinessInfo(json) {
    const response = await fetch(json);
    const data = await response.json();
    let members = data.businesses;

    //For index spotlight
    const index = window.location.pathname.includes("index");
    if(index) 
        {
            members = members.filter(member => member.level == "GOLD" || member.level == "SILVER");
            members.sort(() => .5 - Math.random());
            members = members.slice(0, 3);
        }

    createCardDisplay(members);
}

// Display
getBusinessInfo(json);

// CARDS
function createCardDisplay(members) {
    members.forEach(member => {
        // Set Variables
        let link = document.createElement("a"); // Link
        let card = document.createElement("div"); // Card

        let logo = document.createElement("figure"); // Logo

        let info = document.createElement("div")
        let name = document.createElement("h3"); // Name
        let address = document.createElement("p"); // Address
        let email = document.createElement("p"); // Email
        let phone = document.createElement("p"); // Phone
        let level = document.createElement("p"); // Level


        // Set Attributes
        link.setAttribute("href", member.url); //Link
        link.setAttribute("class", "link");
        card.setAttribute("class", "card"); // Card

        logo.setAttribute("class", "logo"); // Logo

        info.setAttribute("class", "info");
        name.setAttribute("class", "name"); // Name
        address.setAttribute("class", "address"); // Address
        email.setAttribute("class", "email"); // Email
        phone.setAttribute("class", "phone"); // Phone
        level.setAttribute("class", "level"); // Level

        // Set Card Info
        logo.innerHTML = `<img src="${member.logo}" alt="logo" loading="lazy">`;

        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        email.textContent = `${member.email}`;
        phone.textContent = `${member.phone}`;

        level.textContent = `Membership level: ${member.level}`;

        // Add Display to HTML
        card.appendChild(logo);
        card.appendChild(info);
        info.appendChild(name);
        info.appendChild(address);
        info.appendChild(email);
        info.appendChild(phone);
        info.appendChild(level);

        link.appendChild(card);
        document.querySelector("#business-cards").appendChild(link);
    });
}

// Change the display of business cards
document.querySelector("#grid").classList.add("display");

const businessCards = document.querySelector("#business-cards");
const displayType = document.querySelectorAll(".display-type");

displayType.forEach(type => {
    type.addEventListener("click", () => {
        // Changes button colour
        displayType.forEach(type => type.classList.remove("display"));
        type.classList.add("display");
        // Changes grid/list view
        if (type.id === "list") 
        {
            businessCards.classList.add("list-view");
        } 
        else if (type.id === "grid")
        {
            businessCards.classList.remove("list-view");
        }
    });
});