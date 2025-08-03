// Element Selectors
const amountInputField = document.querySelector('#bill-amount');
const tipContainer = document.querySelector('.tip-container');
const tipButtons = document.querySelectorAll('.tip');
const tipInputField = document.querySelector('.custom-tip');
const numberOfPeople = document.querySelector('.number-of-people');
const generateBillBtn = document.querySelector('.generate-bill-btn');
const resetButton = document.querySelector('.reset-btn');

const tipAmountDisplay = document.querySelector('.tip-amount span');
const totalAmountDisplay = document.querySelector('.total span');
const perPersonAmountDisplay = document.querySelector('.each-person-bill span');

let selectedTip = '';

// Helper function: Enable or disable input fields
function toggleInputs(enabled) {
    tipContainer.classList.toggle('disabled', !enabled);
    tipInputField.disabled = !enabled;
    numberOfPeople.disabled = !enabled;
    generateBillBtn.disabled = !enabled;
}

// On bill amount input
amountInputField.addEventListener('input', () => {
    const billAmount = parseFloat(amountInputField.value);
    if (!isNaN(billAmount) && billAmount >= 0) {
        toggleInputs(true);
    } else {
        toggleInputs(false);
    }
});

// On tip button click
tipButtons.forEach(button => {
    button.addEventListener('click', () => {
        tipButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedTip = parseFloat(button.textContent.replace('%', ''));
        tipInputField.value = '';
    });
});

// On custom tip input
tipInputField.addEventListener('input', () => {
    selectedTip = parseFloat(tipInputField.value);
    tipButtons.forEach(btn => btn.classList.remove('selected'));
});

// Generate bill
generateBillBtn.addEventListener('click', () => {
    const billAmount = parseFloat(amountInputField.value);
    const peopleCount = parseInt(numberOfPeople.value);
    
    if (isNaN(billAmount) || isNaN(selectedTip) || isNaN(peopleCount) || peopleCount <= 0) {
        alert('Please enter valid inputs (bill amount, tip, and number of people).');
        return;
    }

    const tipAmount = (billAmount * selectedTip) / 100;
    const totalAmount = billAmount + tipAmount;
    const perPerson = totalAmount / peopleCount;

    tipAmountDisplay.textContent = tipAmount.toFixed(2);
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
    perPersonAmountDisplay.textContent = perPerson.toFixed(2);

    resetButton.disabled = false;
});

// Reset everything
resetButton.addEventListener('click', () => {
    amountInputField.value = '';
    tipInputField.value = '';
    numberOfPeople.value = '';

    tipAmountDisplay.textContent = '';
    totalAmountDisplay.textContent = '';
    perPersonAmountDisplay.textContent = '';

    selectedTip = '';
    tipButtons.forEach(btn => btn.classList.remove('selected'));
    toggleInputs(false);

    resetButton.disabled = true;
});
