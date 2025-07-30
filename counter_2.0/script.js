let inputField  = document.querySelector('.input');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let reset = document.querySelector('.reset');

let count = 0;

plus.addEventListener('click' ,()=>{
    count = inputField .value;
     count++;
    inputField .value = count;  
   
});
minus.addEventListener('click' ,()=>{
    count = inputField .value;
   if(count> 0){
     count--;
    inputField .value = count;  
   
   }
});
reset.addEventListener('click' ,()=>{
    count = 0;
    inputField .value = count;  
   
});

