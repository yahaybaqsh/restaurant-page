export default function loadContact() {
  const content = document.getElementById("content");
  const contactDiv = document.createElement("div");

  const headline = document.createElement("h1");
  headline.textContent = "Contact Us";

  const phone = document.createElement("p");
  phone.textContent = "Phone: +123 456 789";

  const address = document.createElement("p");
  address.textContent = "123 Food Street, Flavor Town";

  contactDiv.appendChild(headline);
  contactDiv.appendChild(phone);
  contactDiv.appendChild(address);

  content.appendChild(contactDiv);
}
