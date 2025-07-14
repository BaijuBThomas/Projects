let inputValue = document.querySelector('.num');
let submit = document.querySelector('.submit');
let sGame = document.querySelector('.game');
let newChild = document.querySelector('.new');
let result = document.querySelector('.result');
let form  = document.querySelector("form");

    let allGuess = [];
let randomNumber = Math.round(Math.random() * 100);



form.addEventListener('submit', (e)=>{
    e.preventDefault();
let  enterValue = Number(inputValue.value);
    if(randomNumber===enterValue){
        newChild.textContent="Winner!!!"  
        sGame.disabled = false;
        submit.disabled = true;
    }
    else if(randomNumber > enterValue){
       newChild.textContent = "TooLow!"; 
    }
    else{
         newChild.textContent = "TooHigh!";
         
    }
    allGuess.push(enterValue);
    result.innerText= 'Your guess: '+ allGuess.join(', ');
    form.reset()
});

sGame.addEventListener('click', ()=>{
        result.innerText='';
        newChild.textContent='';
        sGame.disabled = true;
        submit.disabled = false;
        randomNumber = Math.round(Math.random() * 100);
        allGuess = [];
        
});


