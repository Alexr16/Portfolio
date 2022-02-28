const hamburguer = document.querySelector(".menu");
const navMenu = document.querySelector(".list");
const icons = document.querySelectorAll(".menu-icon");
const hamburguerIcon = document.querySelector("#hamburguer")

hamburguer.addEventListener("click", () => {
    navMenu.classList.toggle("show-list");
    icons.forEach(icon => {
        icon.classList.toggle("close-menu");
    });
})
