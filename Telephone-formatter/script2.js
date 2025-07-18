let input = document.querySelector('.number');

let firstThreeNumber ='';
let previousValue ='';

input.addEventListener('input', (e)=>{
    let rawValue = e.target.value.replace(/\D/g, "");
    // e.target.value = rawValue;
    // console.log(rawValue);
    
    if(rawValue.length === 4 && previousValue.length < rawValue.length){
         firstThreeNumber = rawValue.slice(0,3);
         let lastValue = rawValue.charAt(3);
         input.value = `+(${firstThreeNumber}) - ${lastValue}`;   
    }
    else if(rawValue.length > 4){
        firstThreeNumber = rawValue.slice(0,3);
         let last = rawValue.slice(3);
         input.value = `+(${firstThreeNumber}) - ${last}`;   
    }
    else if(rawValue.length <= 3){
        firstThreeNumber = rawValue;
        input.value = rawValue;
    }
    previousValue = rawValue;
});