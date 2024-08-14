
import BtnHamburger from '@layout/menu/nav-side-bar/btn-hamburger';
import MenuSticky from '@layout/menu/nav-side-bar/menu-sticky';
import HighlightLink from '@layout/menu/menu-highlight/highlight-link';


let sections = [];
let navbarHeight = 0;
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


// update data of the sections when change the size screen
((e) => {

    const events = ["load", "resize"];

    for (const event of events) {
        window.addEventListener(event, () => {

            sections = Array.from(document.querySelectorAll("section")).map(section => {
                return {
                    name: section.getAttribute('id'),
                    top: section.offsetTop
                }
            });
            navbarHeight = document.querySelector(".sidebar").clientHeight;
        });
    }
})();


const smoothScrollContent = () => {

    const options = document.querySelectorAll(".navigation a");

    for (const option of options) {
        option.addEventListener('click', (e) => {

            const optionSelect = option.getAttribute('name');
            const index = sections.findIndex(
                element => element.name === optionSelect
            );

            if (index !== -1) {

                const currentSection = Number(localStorage.getItem('currentSection'));
                const getDirectionScroll = detectDirectionScroll(index, currentSection);

                let top = 0;
                // responsive design mobile
                if (lastWidthScreen < 730) {
                    if (getDirectionScroll){
                        //down
                        top = sections[index].top + navbarHeight;
                    }  
                    else{ // up
                        top = sections[index].top;
                    }
                } else {
                    //  full screen
                    top = sections[index].top;
                }

                window.scroll({
                    top,
                    left: 0,
                    behavior: "smooth"
                });
                // closeMenuNav();
            }
        });
    }
};

const closeMenuNav = () => {

    const menuHamburger = document.querySelector(".btn-hamburger");
    const nav = document.querySelector("nav");

    menuHamburger.classList.remove("open");
    nav.classList.remove("show-nav");
};

/**
* The function detects the direction of a scroll based on the current and previous options.
* @param currentOption - The current scroll position or option being considered for direction
* detection.
* @param previusOption - The previous option refers to the previous value of an option or parameter
* that is being compared to the current option in order to detect the direction of scroll.
* @returns The function `detectDirectionScroll` is returning a boolean value indicating whether the
* `currentOption` is greater than or equal to the `previusOption`.
*/
const detectDirectionScroll = (
    currentOption,
    previusOption
) => {
    return currentOption >= previusOption;
};

const main = () => {

    // window.addEventListener('load', () => {

    BtnHamburger.run();
    MenuSticky.run();
    HighlightLink.run();
    smoothScrollContent();
    // const div = document.createElement('div');
    // div.innerHTML = PortfolioTemplate;
    // document.body.appendChild(div);
    // });
}
main();


window.addEventListener('load', () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
});