export default function loadHome() {
  const content = document.getElementById("content");
  const homeDiv = document.createElement("div");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Our Restaurant";

  const desc = document.createElement("p");
  desc.textContent = "The best food in town, made with love and fresh ingredients.";

  const img = document.createElement("img");
  img.src = "https://via.placeholder.com/400x200"; 
  img.alt = "Restaurant image";

  homeDiv.appendChild(headline);
  homeDiv.appendChild(desc);
  homeDiv.appendChild(img);

  content.appendChild(homeDiv);
}
