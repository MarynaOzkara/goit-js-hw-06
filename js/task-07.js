const rengeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

rengeEl.addEventListener('input', onInput);

function onInput() {
    textEl.style.fontSize = rengeEl.value + 'px'; 

}
