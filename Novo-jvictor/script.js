const bru = document.querySelector(".bru");
const navMenu = document.querySelector(".nav-menu");

bru.addEventListener("click", () => {
    bru.classList.toggle('active');
    navMenu.classList.toggle('active');
})
