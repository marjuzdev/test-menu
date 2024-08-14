
import AboutTemplate from '@layout/about/about.html?raw';

const main = () => {
    window.addEventListener('DOMContentLoaded', () => {
        const main = document.querySelector('main');
        // main.innerHTML = AboutTemplate;
        main.insertAdjacentHTML('beforeend', AboutTemplate);
    });
}
main();



