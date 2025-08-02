const amountInputField = document.querySelector('#bill-amount');
const tipContainer = document.querySelector('.tip-container');
const tipButton = document.querySelectorAll('.tip');
const tipInputField = document.querySelector('.custom-tip');
const numberOfPeople = document.querySelector('.number-of-people');
const generateBill = document.querySelector('.generate-bill-btn');

const tipAmountM = document.querySelector('.tip-amount span');
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
    button.addEventListener('click',()=>{ 
     tipButton.forEach(btn => btn.classList.remove('selected'));
     button.classList.add('selected');
     selectedTip = button.textContent.replace('%','');
     tipInputField.value='';
});
});

tipInputField.addEventListener('input',()=>{
    selectedTip =  tipInputField.value;
    tipButton.forEach(btn => btn.classList.remove('selected'));
});

generateBill.addEventListener('click',()=>{
    let initialAmount = parseFloat(amountInputField.value)
    let eachPersonBill = parseInt(numberOfPeople.value)

    let tipAmount = (initialAmount*selectedTip)/100
    console.log(tipAmount);
    let total = tipAmount + initialAmount; 
    console.log(total);
    let split = total/eachPersonBill;
    console.log(split);

    

    tipAmountM.textContent = `${tipAmount.toFixed(2)}`;
    finalAmount.textContent = `${total.toFixed(2)}`;
    eachPersonAmount.textContent = `${split.toFixed(2)}`;

    resetButton.disabled = false;
});