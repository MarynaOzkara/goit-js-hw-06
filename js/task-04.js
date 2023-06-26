let counterValue = 0;
const buttons = document.querySelector('#counter');
const value = document.querySelector('#value');

function udateCounterValue() {
    value.textContent = counterValue;
}

function onClick(event) {

    if(event.target.dataset.action === "increment") {
        counterValue++;
        udateCounterValue();
    } else {
        --counterValue;
       udateCounterValue();
    }
    // if(counterValue <= 0) {
    //     counterValue = 0;
    //     udateCounterValue();
    // }
   
}

buttons.addEventListener('click', onClick);

