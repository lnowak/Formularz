document.addEventListener('DOMContentLoaded', function() {

    const email = document.querySelector('.form__input__email');
    const name = document.querySelector('.form__input__name');
    const check = document.querySelector('.checkbox');
    const form = document.querySelector('.form');
    const alertText = document.querySelector('.alert');
    const mainForm = document.querySelector('.main__form');
    const thankYouPage = document.querySelector('.thankYouPage');
    const thankYouName = document.querySelector('.thankYouPage__name');


    form.addEventListener('submit', e => {
        e.preventDefault();
        if (name.value.length > 0 && email.value.indexOf('@') && email.value.length > 0 && check.checked) {
            thankYouName.innerHTML = `${name.value}!`;
            thankYouPage.style.display = 'flex';
            mainForm.style.display = 'none';
        }
        if (Number(name.value.length) === 0) {
            alert('Podaj imię');
        } if ( email.value.indexOf('@') === -1 || Number(email.value.length) === 0) {
            alert('Podaj poprawny adres e-mail');
        } if (!check.checked) {
            alert('Zaznacz zgodę');
        }
    })

});