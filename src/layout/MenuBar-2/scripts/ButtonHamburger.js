
const run = () =>{
 
    const menuHamburger = document.querySelector(".btn-hamburger");
    const nav = document.querySelector("nav");
    
    menuHamburger.addEventListener("click", () => {
        menuHamburger.classList.toggle("open");
        nav.classList.toggle("show-nav");
    });
};


export default {
    run
};







