const span = document.querySelector('span');
const wordsList = ["Developer.", "BodyBuilder.", "Footballer.", "PeaceLover."];

// const word = 'Ballionaire'
let wordIndex = 0;
let characterIndex = 0;
let reverseLetter = false;


const intervalId = setInterval(() => {
    
    if(!reverseLetter){
    span.innerText = span.innerText + wordsList[wordIndex][characterIndex]; // word[characterIndex];  we are replcing word with wordslist
    characterIndex++;
    }else{
      span.innerText = span.innerText.slice(0, span.innerText.length-1)  
    }

     if(characterIndex === wordsList[wordIndex].length){
        reverseLetter = true
    }

    if(span.innerText.length === 0 && reverseLetter){
        reverseLetter = false;
        characterIndex = 0;
        wordIndex++;
    }
    if(wordIndex === wordsList.length){
        wordIndex = 0;
    }
   
    
    
}, 200);