let inputButton = document.querySelector('.input');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let reset = document.querySelector('.reset');

let count = 0;

plus.addEventListener('click' ,()=>{
    count = inputButton.value;
     count++;
    inputButton.value = count;  
   
});
minus.addEventListener('click' ,()=>{
    count = inputButton.value;
   if(count> 0){
     count--;
    inputButton.value = count;  
   
   }
});
reset.addEventListener('click' ,()=>{
    count = 0;
    inputButton.value = count;  
   
});

