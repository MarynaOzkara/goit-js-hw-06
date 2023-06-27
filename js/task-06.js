const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener('blur', onBlur);

function onBlur(event) {
    const minLength = parseInt(inputEl.dataset.length);
    const currentLength = event.currentTarget.value.length;
    
    
    if(currentLength === minLength) {
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.add('invalid');
    }
   
}