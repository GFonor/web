const navBurger = document.getElementById("nav-burger")
const navBurgerSlide = document.getElementById("nav-burger-slide")
navBurger.onclick = function() {
    console.log("hi")
    navBurgerSlide.classList.toggle("burger-slide")
}