import './style.scss';

const body = document.querySelector('body');

// import MenuBar from '@layout/MenuBar/MenuBar';
// import MenuBarTemplate from '@layout/MenuBar/MenuBar.html?raw';
// import '@layout/MenuBar/MenuBar.scss';
// body.insertAdjacentHTML('afterbegin', MenuBarTemplate);
// MenuBar.run();


import MenuBar from '@layout/MenuBar-2/MenuBar';
import MenuBarTemplate from '@layout/MenuBar-2/MenuBar.html?raw';
import '@layout/MenuBar-2/MenuBar.scss';
body.insertAdjacentHTML('afterbegin', MenuBarTemplate);
MenuBar.run();









