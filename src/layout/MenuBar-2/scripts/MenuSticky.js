
/** 
 * offset (traducción: compensar) - indicates the distance (offset) between the navbar and
 * the position of the scroll with respect to the height of the screen
 **/

let offset = 0;
let previousScrollY = 0;

// declare vars for make menu sticky
let navbar = null; 
let buttonSticky = null;
let menuList = null;

const run = () => {

    // elements DOM
    navbar = document.querySelector(".sidebar");
    buttonSticky = document.querySelector(".button-sticky");
    menuList = document.querySelector(".menu");

    const eventsListener = ["load", "resize", "scroll"];

    multiListenWindowEvents(eventsListener, () => {
        //  responsive design mobile 
            if (window.innerWidth < 730) {
                
                const currentScrollY = document['documentElement' || 'body'].scrollTop;
                const currentPositionScroll = currentScrollY - previousScrollY;

                previousScrollY = currentScrollY;
                offset += currentPositionScroll;

                const navbarHeight = navbar.clientHeight;

                // 1. the navbar is not visible
                if (offset > navbarHeight) {
                    offset = navbarHeight;
                }

                // 2. the navbar is visible and I exceed the height of the navbar when slide up scroll
                if (offset < 0) {
                    offset = 0;
                }

                // elements DOM to modify
                navbar.style.top = `${-(offset)}px`;
                buttonSticky.style.top = `${ (navbarHeight - offset) - 1 }px`;
                menuList.style.top = `${ (navbarHeight + buttonSticky.clientHeight) - 1 }px`;


            } else {
                // remove property top when is full screen
                navbar.style.removeProperty('top');
                buttonSticky.style.removeProperty('top');
            }
    });
}


const multiListenWindowEvents = (eventsListener, callback) => {
    eventsListener.forEach( eventListener => {
        window.addEventListener( eventListener, callback);
    });
};

const makeMenuSticky = (  elementSticky )  => {

}

export default {
    run
};

