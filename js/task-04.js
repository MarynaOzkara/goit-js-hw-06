let counterValue = 0;
const buttons = document.querySelector('#counter');

const value = document.querySelector('#value');
counterValue = value.textContent;

function onClick(event) {

    if(event.target.dataset.action === "increment") {
        value.textContent++;
    } else {
       --value.textContent;
    }
   
}

buttons.addEventListener('click', onClick);

