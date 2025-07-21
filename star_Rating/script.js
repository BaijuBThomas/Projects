let stars = document.querySelectorAll('.star');
let starContainer = document.querySelector('.star-container');
console.log("stars", stars);

stars.forEach((star, index)=>{
    star.addEventListener("mouseover", ()=>{
        highLightStars(index);
    });
    star.addEventListener("click", ()=>{
        saveStar(index);
    });
});
starContainer.addEventListener("mouseleave", () => {
  resetStars();
});

let currentRating = -1;

const highLightStars = (index)=>{
    stars.forEach((star,i) =>{
        star.classList.toggle("highLight",i <= index);
    });
};

const resetStars = () =>{
    stars.forEach((star,i)=>{
        star.classList.toggle("highLight",i <= currentRating);
    });
};

const saveStar = (index) =>{
    currentRating = index;
    resetStars();
};