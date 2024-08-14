
const events = ["load", "resize", "scroll"];

const run = () => {

    // elements DOM
    const navbar = document.querySelector(".sidebar");
    const menubar = document.querySelector(".menu-sticky");

    /** 
     * offset (traducción: compensar) - indicates the distance (offset) between the navbar and
     * the position of the scroll with respect to the height of the screen
     **/

    let offset = 0;
    let previousScrollY = 0;

    for (let event of events) {
        window.addEventListener(event, () => {

            // responsive design mobile 
            if (window.innerWidth < 730) {
                const navbarHeight = navbar.clientHeight;
                const currentScrollY = document['documentElement' || 'body'].scrollTop;
                const currentPositionScroll = currentScrollY - previousScrollY;

                previousScrollY = currentScrollY;
                offset += currentPositionScroll;

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
                menubar.style.top = `${navbarHeight - offset}px`;

            } else {

                // remove property top when is full screen
                navbar.style.removeProperty('top');
                menubar.style.removeProperty('top');
            }
        })
    }
}

export default {
    run
};

