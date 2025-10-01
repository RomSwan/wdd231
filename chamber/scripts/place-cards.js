import { places } from "../data/places.mjs";
console.log(places);

createCardDisplay(places);

function createCardDisplay(places) {
    places.forEach(place => {
        // Set Variables
        let card = document.createElement("div"); // Card

        let photo = document.createElement("figure"); // Photo

        let info = document.createElement("div")
        let title = document.createElement("h2"); // Title
        let address = document.createElement("address"); // Address
        let description = document.createElement("p"); // Description
        let button = document.createElement("button"); // Button


        // Set Attributes
        card.setAttribute("class", "card"); // Card

        photo.setAttribute("class", "photo"); // Photo
        title.setAttribute("class", "title"); // Title
        address.setAttribute("class", "address"); // Address
        description.setAttribute("class", "description"); // Description
        button.setAttribute("class", "learn-more"); // Button

        // Set Card Info
        photo.innerHTML = `<img src="${place.photo}" alt="photo" loading="lazy">`;

        title.textContent = `${place.title}`;
        address.textContent = `${place.address}`;
        description.textContent = `${place.description}`;
        button.textContent = `Learn More`;

        // Add Display to HTML
        card.appendChild(photo);
        card.appendChild(title);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);

        document.querySelector("#place-cards").appendChild(card);
    });
}