const inputs = document.querySelectorAll('input');

inputs.forEach((input,index)=>{
input.addEventListener("input",(e)=>{
    const value = e.target.value;
    if(index < inputs.length-1){
        inputs[index+1].focus();
    }
    
});
input.addEventListener('keydown', (e) => {
  if (e.key === "Backspace") {
    if (input.value === "") {
      if (index > 0) {
        inputs[index - 1].focus();
        inputs[index - 1].value = ""; // 🧹 Clear previous input
      }
    } else {
      input.value = ""; // 🧹 Clear current input if not empty
    }

    // Prevent default so that only one deletion happens
    e.preventDefault();
  }
});
 input.addEventListener("keypress", (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  });
});

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  inputs.forEach((input) => {
    input.value = "";
  });
  inputs[0].focus(); // Optional: set focus back to first
});