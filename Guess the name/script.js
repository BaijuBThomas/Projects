
const userInputRef = document.querySelector('.num');
const formRef = document.querySelector('form');
const resultRef = document.querySelector('.result');
const allGuessesRef = document.querySelector('.all-guess');
const submitRef = document.querySelector('.submit');
const stGameRed = document.querySelector('.stgame');



function game () {
    const allGuessesArray = [];
    let randomNumber = Math.round(Math.random() *100);
    
    formRef.addEventListener('submit', (e) => {
        e.preventDefault();
        const userValue = parseInt(userInputRef.value);
        if( userValue < randomNumber ){
            resultRef.innerText = 'Too Low!';
            
        }
        else if(userValue > randomNumber){
            resultRef.innerText = 'Too High!';
        }
        else{
            resultRef.innerText = ' you got it congrats!!!';
            stGameRed.disabled=false;
            submitRef.disabled=true;
        }
        allGuessesArray.push(userValue);
        allGuessesRef.innerText = 'Your guesses:' + allGuessesArray.join(', ')
        formRef.reset();
    });
    
    stGameRed.addEventListener('click',() => {
        resultRef.innerText="";
        allGuessesRef.innerText="";
        stGameRed.disabled=true;
        submitRef.disabled=false;
        randomNumber = Math.round(Math.random() *100);
    
    })
}

game();