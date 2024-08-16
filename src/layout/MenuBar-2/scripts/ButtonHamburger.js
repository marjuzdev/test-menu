
const run = () =>{
 
    const buttonHamburger = document.querySelector(".button-hamburger");
    const menuList = document.querySelector(".menu");
    
    menuHamburger.addEventListener("click", () => {
        buttonHamburger.classList.toggle("open");
        menuList.classList.toggle("show-nav");
    });
};


export default {
    run
};







