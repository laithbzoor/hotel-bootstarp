const navbar = document.querySelector(".navbar");
const title = document.querySelector(".main-header");
const goToTop = document.querySelector(".go-top");
const section = document.querySelector(".section");

console.log(title.offsetTop);
window.addEventListener("scroll", function () {
    if (window.scrollY > title.offsetTop) {
        navbar.style.backgroundColor = '#2b2d42'
    }
    else {
        navbar.style.backgroundColor = 'transparent'

    }
    if (window.scrollY > section.offsetTop) {
        goToTop.classList.remove('opacity-0', 'invisible')
    }
    else {
        goToTop.classList.add('opacity-0', 'invisible')
    }
})