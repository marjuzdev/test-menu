
import PortfolioTemplate from '@layout/portfolio/portfolio.html?raw';

const main = () => {
    window.addEventListener('DOMContentLoaded', () => {
        const main = document.querySelector('main');
        // main.innerHTML = PortfolioTemplate;
        main.insertAdjacentHTML('beforeend', PortfolioTemplate);
    });
}
main();



