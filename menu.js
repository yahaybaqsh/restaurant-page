export default function loadMenu() {
  const content = document.getElementById("content");
  const menuDiv = document.createElement("div");

  const headline = document.createElement("h1");
  headline.textContent = "Our Menu";

  const list = document.createElement("ul");
  ["Pizza", "Pasta", "Salad", "Dessert"].forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  menuDiv.appendChild(headline);
  menuDiv.appendChild(list);
  content.appendChild(menuDiv);
}
