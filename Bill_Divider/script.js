
const inputValue = document.querySelector("#bill-amount");
const tipButton = document.querySelectorAll('.tip');
const tipContainer = document.querySelector('.tip-container')
const inputTip = document.querySelector('.custom-tip');
const numberOfPeople = document.querySelector('.number-of-people');
const billGenerator = document.querySelector('.generate-bill-btn');

const tipAmountFull = document.querySelector('.tip-amount span');
const totalAmountFull = document.querySelector('.total span'); 
const eachPersonAmountFinal = document.querySelector('.each-person-bill span'); 
const resetButton = document.querySelector('.reset-btn');

let selectedTip ="";

inputValue.addEventListener("input",()=>{
    const inputValueCheck = parseFloat(inputValue.value);
    
    if(inputValueCheck > 0){
        tipContainer.classList.remove("disabled");
    
        inputTip.disabled = false;
        numberOfPeople.disabled = false;
        billGenerator.disabled = false;
    }else {
      
        inputTip.disabled = true;
        numberOfPeople.disabled = true;
         billGenerator.disabled = true;
    }

});


tipButton.forEach(button => {
    button.addEventListener('click', ()=>{
        tipButton.forEach(btn =>{
            btn.classList.remove('selected');
        })
        button.classList.add('selected');
        selectedTip = parseFloat(button.textContent.replace("%",""));
        inputTip.value ="";
    })
})

inputTip.addEventListener('input',()=>{
    tipButton.forEach(btn => btn.classList.remove('selected'));
    selectedTip = parseInt( inputTip.value);
})

billGenerator.addEventListener('click',()=>{
    let inputAmount= parseFloat(inputValue.value)
    let people = parseInt(numberOfPeople.value)

    if(!inputAmount || !people || people <= 0 || selectedTip === null || isNaN(selectedTip) ){
        alert("Enter a valid response");
        return;
    }

    let tipAmount = (inputAmount*selectedTip) / 100;
    let total = inputAmount + tipAmount;
    let split =  total / people;

    tipAmountFull.textContent = `${tipAmount.toFixed(2)}`;
    totalAmountFull.textContent = `${total.toFixed(2)}`;
    eachPersonAmountFinal.textContent = `${split.toFixed(2)}`;

    resetButton.disabled = false;
})


resetButton.addEventListener('click', ()=>{
    inputValue.value = '';
    numberOfPeople.value = '';
    tipAmountFull.textContent='';
    totalAmountFull.textContent = '';
    eachPersonAmountFinal.textContent = '';

    tipButton.forEach(btn => btn.classList.remove('selected'));
    selectedTip =""

    tipContainer.classList.add("disabled");
    inputTip.disabled = true;
    numberOfPeople.disabled = true;
     billGenerator.disabled = true;
})