import "./style.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.getElementById("homeBtn");
  const menuBtn = document.getElementById("menuBtn");
  const contactBtn = document.getElementById("contactBtn");

  homeBtn.addEventListener("click", () => {
    clearContent();
    loadHome();
  });

  menuBtn.addEventListener("click", () => {
    clearContent();
    loadMenu();
  });

  contactBtn.addEventListener("click", () => {
    clearContent();
    loadContact();
  });

  // load homepage by default
  loadHome();
});
