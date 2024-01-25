const inputEmail = document.querySelector('#input-email');
const btnEmail = document.querySelector ('#btn-email');

inputEmail.addEventListener('keyup', (e) => {
    if (e.target.value == '') {
        btnEmail.setAttribute('disabled', 'true')
    } else {
        btnEmail.removeAttribute('disabled')
    }
})