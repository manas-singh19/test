const body = document.body;
const triggerMenu = document.querySelector("header .trigger-menu");
const nav = document.querySelector("header nav");
const menu = document.querySelector("header .menu");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

triggerMenu.addEventListener("click", () => {
  body.classList.toggle("menu-open");
});


window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if(currentScroll == 0) {
    body.classList.remove(scrollUp);
    return;
  }  
  if(currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
    body.classList.remove("menu-open");   
  }else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
    body.classList.remove("menu-open");
  }
  lastScroll = currentScroll; 

});
