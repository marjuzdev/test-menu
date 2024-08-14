const snackbarHTML = `
    <div id="snackbar" class="snackbar">
        <span>Copied to clipboard!</span>
        <button id="closeSnackbar">✖</button>
    </div>
`;

let timeout = null;
// Insertar el snackbar en el body
document.body.insertAdjacentHTML('beforeend', snackbarHTML);

const snackbar = document.getElementById('snackbar');
const closeSnackbar = document.getElementById('closeSnackbar');

const hideSnackbar = () =>{
    snackbar.classList.add('hide');
    clearTimeout(timeout);
}

const open = async (text, time) => {

    const textSnackbar = snackbar.querySelector('span');
    textSnackbar.textContent = text || 'message';

    snackbar.classList.remove('show', 'hide');
    // Forzar el reflujo/repaint
    setTimeout( () => {
        snackbar.classList.add('show');
    })

    clearTimeout(timeout);
    timeout = setTimeout(() => {
        snackbar.classList.add('hide');
    }, time);
}

closeSnackbar.addEventListener('click', hideSnackbar)


export default {
    open
}

