// Fetch Data
const json = "data/members.json";

async function getProphetData(json) {
    const response = await fetch(json);
    const data = await response.json();

    createCardDisplay(data.buisnesses);
}

// CARDS
function createCardDisplay(members) {
    members.forEach(member => {
        // Set Variables
        let link = document.createElement("a"); // Link
        let card = document.createElement("div"); // Card

        let logo = document.createElement("figure"); // Logo

        let name = document.createElement("h3"); // Name
        let address = document.createElement("p"); // Address
        let email = document.createElement("p"); // Email
        let phone = document.createElement("p"); // Phone

        let level = document.createElement("p"); // Level


        // Set Attributes
        link.setAttribute("href", member.url); //Link
        card.setAttribute("class", "card"); //Card

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
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(email);
        card.appendChild(phone);
        card.appendChild(level);

        link.appendChild(card);
        document.querySelector("#buisness-cards").appendChild(link);
    });
}