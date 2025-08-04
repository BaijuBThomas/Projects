const generateMeme = document.querySelector('.generate-button');
const memeTitle = document.querySelector('.meme-title');
const image = document.querySelector('.meme-image');
const authors = document.querySelector('.author');

function getMeme() {
fetch('https://meme-api.com/gimme/wholesomememes')
.then((response) =>{
    if(!response.ok){
        throw new console.error('Network response was not ok.');
  
    }
 return response.json();
})
.then((data) => {
const {author, title, url} = data;
 memeTitle.textContent = title;
 image.src = url;
 authors.textContent = `Author: ${author}`;
})
};

getMeme()
generateMeme.addEventListener('click',()=>{

getMeme();
})