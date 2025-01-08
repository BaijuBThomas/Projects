
const countRef = document.querySelector('.count');
const minusRef = document.querySelector('.minus');
const plusRef = document.querySelector('.plus');
const changeByRef = document.querySelector('.changeBy');
const resetRef = document.querySelector('.reset');


minusRef.addEventListener('click',() => {
    const countValue = parseInt(countRef.innerText);
    const changeByValue = parseInt(changeByRef.value);
    countRef.innerText = countValue -changeByValue;
});
plusRef.addEventListener('click',() => {
    const countValue = parseInt(countRef.innerText);
    const changeByValue = parseInt(changeByRef.value);
    countRef.innerText = countValue + changeByValue;
});

resetRef.addEventListener('click',() => {
    countRef.innerText = 0;
});