
const events = ["scroll", 'load'];

let menubarHeight = 0;
let lastWidthScreen = 0;

// get last Width screen
((e) => {

    const events = ["load", "resize"];

    for (const event of events) {
        window.addEventListener(event, () => {
            lastWidthScreen = window.innerWidth;
        });
    }
})();


const run = () => {

    // get all sections

    const sections = document.querySelectorAll("section");
    menubarHeight = document.querySelector(".menu-sticky").clientHeight;


    for (const event of events) {

        window.addEventListener(event, () => {

            // scroll down - up
            const detectSection = (getDirectionScroll()) ? 400 : 500;

            const currentScrollY = window.pageYOffset;

            for (const [index, section] of sections.entries()) {

                // selectors DOM 
                const sectionId = section.getAttribute("id");
                const selector = document.querySelector(
                    `.navigation a[name*=${sectionId}]`
                );

                const paddingSection = 40;

                // height and top sections
                const sectionHeight = (lastWidthScreen < 730) ? 
                section.offsetHeight + menubarHeight: 
                section.offsetHeight + paddingSection;

                const sectionTop = section.offsetTop - detectSection;

                /**
                 * Gets the section that is displayed on the screen at the time of scrolling 
                 * and adds the corresponding styles - (intersects the menu options 
                 * with the section that is currently displayed)
                 */

                if (currentScrollY <= sectionTop + sectionHeight
                    && currentScrollY > sectionTop
                ) {
                    selector.classList.add("active");
                    localStorage.setItem('currentSection', index);
                }
                /**
                 * removes the styles when there is no longer an 
                 * intersection with the section that is 
                 * visible on the screen (intersect between menu and sections)
                 */
                else {
                    selector.classList.remove("active");
                }
            }
        });
    }

    let lastScroll = 0;
    /**
     * Get the direction of the scroll,
     * that is, if the scroll goes (down or up)
     * @returns boolean
     */

    const getDirectionScroll = () => {

        // get current scroll value
        const currentScroll = document['documentElement' || 'body'].scrollTop;
        //  when you scroll down
        if (currentScroll > 0 && lastScroll <= currentScroll) {
            lastScroll = currentScroll;
            return true;
        }
        // when you scroll up
        else {
            lastScroll = currentScroll;
            return false;
        }
    };
};

export default {
    run
};


