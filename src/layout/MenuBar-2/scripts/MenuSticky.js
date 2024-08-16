

const run = () => {

    // elements DOM - for make menu sticky
    const navbar = document.querySelector(".sidebar");
    const buttonSticky = document.querySelector(".button-sticky");
    const menuList = document.querySelector(".menu");

    const elementsForMenuSticky = {
        headerInViewUp: navbar,
        headerSticky: buttonSticky,
        contentSticky: menuList
    }

    const eventsListener = ["load", "resize", "scroll"];

    multiListenWindowEvents(eventsListener, () => {
        //  responsive design mobile 
            if (window.innerWidth < 730) {
               makeMenuSticky(elementsForMenuSticky);
            } 
            else {
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

/** 
 * offset (traducción: compensar) - indicates the distance (offset) between the navbar and
 * the position of the scroll with respect to the height of the screen
 **/

let offset = 0;
let previousScrollY = 0;

const makeMenuSticky = ({ headerInViewUp, headerSticky, contentSticky } )  => {

    const currentScrollY = document['documentElement' || 'body'].scrollTop;
    const currentPositionScroll = currentScrollY - previousScrollY;

    previousScrollY = currentScrollY;
    offset += currentPositionScroll;

    const headerInViewUpHeight = headerInViewUp.clientHeight;
    const contentStickyHeight = contentSticky.clientHeight;

    // 1. the navbar is not visible
    if (offset > headerInViewUpHeight) {
        offset = headerInViewUpHeight;
    }

    // 2. the navbar is visible and I exceed the height of the navbar when slide up scroll
    if (offset < 0) {
        offset = 0;
    }

    // elements DOM to modify
    headerInViewUp.style.top = `${-(offset)}px`;
    headerSticky.style.top = `${ (headerInViewUpHeight - offset) - 1 }px`;
    contentSticky.style.top = `${ (headerInViewUpHeight + contentStickyHeight) - 1 }px`;
}

export default {
    run
};

