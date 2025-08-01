const amountInputField = document.querySelector('#bill-amount');
const tipContainer = document.querySelector('.tip-container');
const tipButton = document.querySelectorAll('.tip');
const tipInputField = document.querySelector('.custom-tip');
const numberOfPeople = document.querySelector('.number-of-people');
const generateBill = document.querySelector('.generate-bill-btn');

const tipAmount = document.querySelector('.tip-amount span');
const finalAmount = document.querySelector('.total span');
const eachPersonAmount = document.querySelector('.each-person-bill span');
const resetButton = document.querySelector('.reset-btn');

let selectedTip = '';

amountInputField.addEventListener('input', ()=>{
    let initialAmount = amountInputField.value;
    if(initialAmount >=0){
        tipContainer.classList.remove('disabled');
        tipInputField.disabled = false;
        numberOfPeople.disabled = false;
        generateBill.disabled = false;
    }
});

tipButton.forEach(button =>{
    button.addEventListener('click',(e)=>{
     selectedTip =e.target;
    
     
     
})
})

