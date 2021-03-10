const burger = document.querySelector(".burger");
const closebtn = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".overlay .menu");

let isOpen = false; 
burger.addEventListener("click", () => {
    isOpen = !isOpen;
    overlay.classList.toggle("open");
    if (isOpen) {
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh";
        document.body.parentNode.style.overflowY = "scroll";
    }
    if (isOpen) {
        document.body.style.overflow = "auto";
        document.body.style.height = null;
        document.body.parentNode.style.overflowY = null;
    }
})
closebtn.addEventListener("click", () => {
    isOpen = !isOpen;
    overlay.classList.remove("open");
    document.body.style.overflowY = "auto";
});