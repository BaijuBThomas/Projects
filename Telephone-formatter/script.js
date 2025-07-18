//this was a test file there are some error on this file

let input = document.querySelector('.number');

let previousValue ="";
let firstThreeNumber="" ;
input.addEventListener('input',(e)=>{
   let inputValue = e.target.value; 
   
   if((inputValue.length === 4 ) && (previousValue.length < inputValue.length)){
    firstThreeNumber = inputValue.substring(0,3);
    input.value = `+(${firstThreeNumber}) - ${inputValue[inputValue.length-1]}`;
   }else if((inputValue.length === 9 ) && (previousValue.length > inputValue.length)){
    input.value = firstThreeNumber;
   }

   previousValue = inputValue;
});


// const phoneInput = document.querySelector('.number')
// phoneInput.addEventListener("input", () => {
//     let digits = phoneInput.value.replace(/\D/g, "");
//     phoneInput.value = digits.length <= 3 ? digits : `+(${digits.slice(0, 3)}) - ${digits.slice(3)}`;
// });