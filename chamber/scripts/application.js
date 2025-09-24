const getString = window.location.search;

const info = new URLSearchParams(getString);

const message = document.querySelector("#thank-you-message");

console.log(info.get('firstname'));
console.log(info.get('lastname'));
console.log(info.get('organizational-title'));
console.log(info.get('email'));
console.log(info.get('phone'));
console.log(info.get('organization-name'));
console.log(info.get('membership'));
console.log(info.get('description'));

const firstname = info.get('firstname');
const lastname = info.get('lastname');
const title = info.get('organizational-title');
const email = info.get('email');
const phone = info.get('phone');
const organization = info.get('organization-name');
const level = info.get('membership');
const description = info.get('description');

const application = `
<p><b>First name:</b> ${firstname}</p>
<p><b>Last name:</b> ${lastname}</p>
<p><b>Organizational title:</b> ${title}</p>
<p><b>Email:</b> ${email}</p>
<p><b>Phone Number:</b> ${phone}</p>
<p><b>Organization name:</b> ${organization}</p>
<p><b>Membership level:</b> ${level}</p>
<p><b>Description of organization:</b><br>${description}</p>
`;

message.innerHTML = `<h2>Your Submitted Application:</h2>${application}`;