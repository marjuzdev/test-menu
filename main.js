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

    multiListenWindowEvents(events, (e) => {


        const elementParent = document.querySelector('main');
        const sections = document.querySelectorAll('section');

        /**
         *  Determine percent Height viewport for detect section
         */

        const detectSectionPercentage = 0;
        // const detectSectionPixels = (detectSectionPercentage * window.innerHeight );
        // const currentScrollY = window.scrollY + detectSectionPixels; 
        const stylesElementParent = window.getComputedStyle(elementParent);

        const marginTopElementParent =  Math.round(parseFloat(stylesElementParent.marginTop));
        const marginBottomElementParent = Math.round(parseFloat(stylesElementParent.marginBottom));

        const currentScrollY =  window.scrollY - marginTopElementParent;

        sections.forEach((section, index) => {

            let topSection = section.offsetTop;

            let boundTopSection = topSection;
            let boundBottomSection = topSection + section.offsetHeight;
           
            // first element logic when the parent have margin top
            if ( index === 0) {
                const firstBoundTopSection =  boundTopSection - marginTopElementParent;
                boundTopSection = firstBoundTopSection;
            }

            // last element logic when the parent have margin bottom
            if( sections.length - 1 === index) {
                const lastBoundBottomSection = boundBottomSection + marginBottomElementParent;
                boundBottomSection = lastBoundBottomSection;
            }

            const isIntersecting = currentScrollY >= boundTopSection
                                && currentScrollY < boundBottomSection;

            callback({ 
                    active: isIntersecting,
                    section
                });
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

document.querySelector('#active').addEventListener('click', () => {

    const y = 3069;
    window.scrollTo({
        top: y,
        behavior: 'smooth'
    });
})





