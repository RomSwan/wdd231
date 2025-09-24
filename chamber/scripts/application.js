const getString = window.location.search;

const myInfo = new URLSearchParams(getString);

document.querySelector("#thank-you-message").innerHTML = `
<p></p>`;