const now = Date.now();

const lastVisit = localStorage.getItem("lastVisit");

const message = document.getElementById("lastVisited");

const days = Math.floor((now - parseInt(lastVisit)) / (1000 * 60 * 60 * 24));

if (!lastVisit) // First Visit
    {
        message.textContent = `Welcome! Let us know if you have any questions.`;
    }
else if (days === 0) // Return within a day
    {
        message.textContent = `Back so soon! Awesome!`;
    }
else if ( days === 1) // Return after a day
    {
        message.textContent = `You last visited 1 day ago.`;
    }
else // Return after multiple days
    {
        message.textContent = `You last visited ${days} days ago.`;
    }

// Save visit time
localStorage.setItem("lastVisit", now.toString());