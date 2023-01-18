document.querySelector(".bar-menu").addEventListener("click",animateBar);

const line1Bar = document.querySelector(".first")
const line2Bar = document.querySelector(".second")
const line3Bar = document.querySelector(".third")
const menu = document.querySelector(".nav-link")
const listMenu = document.querySelector(".list")
const listOne = document.querySelector(".one")
const listTwo = document.querySelector(".two")
const listThree = document.querySelector(".three")
const listFour = document.querySelector(".four")
const listFive = document.querySelector(".five")
const listSix = document.querySelector(".six")

function animateBar(){
    line1Bar.classList.toggle("active-first");
    line2Bar.classList.toggle("active-second");
    line3Bar.classList.toggle("active-third");
    menu.classList.toggle("active-nav-link")
    listOne.classList.toggle("active-one")
    listTwo.classList.toggle("active-two")
    listThree.classList.toggle("active-three")
    listFour.classList.toggle("active-four")
    listFive.classList.toggle("active-five")
    listSix.classList.toggle("active-six")
}

listOne.addEventListener("click", animateBar);
listTwo.addEventListener("click", animateBar);
listThree.addEventListener("click", animateBar);
listFour.addEventListener("click", animateBar);
listFive.addEventListener("click", animateBar);
listSix.addEventListener("click", animateBar);


