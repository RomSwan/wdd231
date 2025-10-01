//Get current year
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;

//Last modified
const lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last modified: ${lastModified}`;