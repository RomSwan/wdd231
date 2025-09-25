// Fetch Data
const json = "data/levels.json";

async function getLevelInfo(json) {
    const response = await fetch(json);
    const data = await response.json();
    let levels = data.levels;

    const index = {};
    levels.forEach(level => {
        index[level.title.toLowerCase()] = level;
    });

    displayLevelInfo(index);
}

// Choose and generate modal
function displayLevelInfo(index) {
    const dialog = document.getElementById("membership-card");

    document.querySelectorAll(".learn-more").forEach(button => {
        button.addEventListener("click", () => {
            const type = button.id

            const level = index[type];

            if (level) {
                dialog.innerHTML = `
                    <h2>${level.title} Membership</h2>
                    <p><b>Price: </b>${level.price}</p>
                    <p><b>Benefits include:</b><br>${level.benefits}</p>
                    <button id="close-dialog">Close</button>
                `;
                dialog.showModal();

                dialog.querySelector("#close-dialog").addEventListener("click", () => {
                    dialog.close();
                });
            }
        });
    });
}

// Display
getLevelInfo(json);