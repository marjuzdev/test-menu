import './style.scss';

const body = document.querySelector('body');

// import MenuBar from '@layout/MenuBar/MenuBar';
// import MenuBarTemplate from '@layout/MenuBar/MenuBar.html?raw';
// import '@layout/MenuBar/MenuBar.scss';
// body.insertAdjacentHTML('afterbegin', MenuBarTemplate);
// MenuBar.run();


// import MenuBar from '@layout/MenuBar-2/MenuBar';
// import MenuBarTemplate from '@layout/MenuBar-2/MenuBar.html?raw';
// import '@layout/MenuBar-2/MenuBar.scss';
// body.insertAdjacentHTML('afterbegin', MenuBarTemplate);
// MenuBar.run();

// document.addEventListener('DOMContentLoaded', () => {

//     const sections = document.querySelectorAll('section');
//     const menuLinks = document.querySelectorAll('#menu a');

//     const elements = {
//         options: menuLinks,
//         sections
//     };

//     if ('IntersectionObserver' in window) {
//         setupIntersectionObserver(menuLinks, sections);
//     } else {
//         setupScrollListener(menuLinks, sections);
//     }
// });

// const handleSmoothScroll = (event, link)  => {
//     event.preventDefault();
//     const targetId = link.getAttribute('href').substring(1);
//     const targetSection = document.getElementById(targetId);

//     window.scrollTo({
//         top: targetSection.offsetTop,
//         behavior: 'smooth'
//     });
// }

// script.js

document.addEventListener('DOMContentLoaded', () => {

    const sections = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('#menu a');

    getCurrentSection(sections, ( data ) => {

        const { active, section } = data;
        const sectionName  = section.getAttribute('id');
        const optionMenu = document.querySelector(`#menu li[id = ${sectionName}]`);

        if( active ) {
            optionMenu.classList.add('active');

        } else {
            optionMenu.classList.remove('active');
        }
    });

});

const getCurrentSection = ( sections, callback ) => {

    // const config = {
    //     root: null,
    //     rootMargin: "0px",
    //     threshold: 0.5
    // }
    // getSectionWithIntersectionAPI(config, sections, callback);
  
    getSectionWithListeners(sections, callback);
}


const getSectionWithListeners = ( sections, callback) => { 

    const events =  ['load', 'scroll','resize'];
    // const events =  ['scroll'];
    // const events =  ['load'];


    multiListenWindowEvents(events, (e) => {

        /**
         * elements dom
         */

        const main = document.querySelector('main');
        const sections = main.querySelectorAll('section');

        /**
         *  Determine percent Height viewport for detect section
         */

        const detectSectionPercentage = 0;
        // const detectSectionPixels = (detectSectionPercentage * window.innerHeight );
        // const currentScrollY = window.scrollY + detectSectionPixels; 

        const marginTopMain = parseInt(window.getComputedStyle(main).marginTop);
        let currentScrollY = window.scrollY - marginTopMain;

        sections.forEach((section, index) => {



            const marginTopSection = parseInt(window.getComputedStyle(section).marginTop);
            const heightTotalSection = section.offsetHeight + marginTopSection;

       
            let boundTopSection = section.offsetTop;
            let boundBottomSection = section.offsetTop + heightTotalSection;

            // first element logic when the parent have margin
            if ( index === 0) { 
                boundTopSection = section.offsetTop - marginTopMain;
            }

            const isIntersecting = currentScrollY >= boundTopSection
                                && currentScrollY < boundBottomSection;

            callback( 
                isIntersecting ? 
                { active: true, section }:
                { active: false, section} 
            );
        });

    });
};

const getSectionWithIntersectionAPI = (config, elements, callback ) => {

    const observer = new IntersectionObserver( ([entry]) => {
            if (entry.isIntersecting) {
                callback(entry);
            }
    }, config);
    
    elements.forEach(section => {
        observer.observe(section);
    });
};

const multiListenWindowEvents = (eventsListener, callback) => {
    eventsListener.forEach( eventListener => {
        window.addEventListener( eventListener, callback);
    });
};

let lastScroll = 0;

/**
 * Determine the scroll direction.
 * @returns {boolean} - Returns `true` if scrolling down, `false` if scrolling up.
 */
const getDirectionScroll = () => {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    const isScrollingDown = currentScroll > lastScroll;
    lastScroll = currentScroll;

    return isScrollingDown;
};





