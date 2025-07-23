const fullDarkModeCheckbox = document.querySelector('#full-dark-mode');
const containerDarkModeCheckbox = document.querySelector('#contained-dark-mode')
const container = document.querySelector('.container');

const isFullDarkMode = JSON.parse(localStorage.getItem('fullDarkModeCheckbox'));
const isContainedDarkMode = JSON.parse(localStorage.getItem('containerDarkModeCheckbox'));

if(isFullDarkMode){
    fullDarkModeCheckbox.checked = true
}
if(isContainedDarkMode) {
    containerDarkModeCheckbox.checked = true
}

    changeFullDarkModeCheckbox();
    changeContainerDarkModeCheckbox();


fullDarkModeCheckbox.addEventListener('change',()=>{
    changeFullDarkModeCheckbox()
    changeContainerDarkModeCheckbox();
   
});

function changeFullDarkModeCheckbox(){
  if(fullDarkModeCheckbox.checked){
        document.body.classList.add('dark');
        localStorage.setItem("fullDarkModeCheckbox",true);
    }else{
       document.body.classList.remove('dark'); 
        localStorage.setItem("fullDarkModeCheckbox",false);
    }
}

function changeContainerDarkModeCheckbox() {
//  containerDarkModeCheckbox.checked = fullDarkModeCheckbox.checked;
    if(containerDarkModeCheckbox.checked){
        container.classList.add('dark');
         localStorage.setItem("containerDarkModeCheckbox",true);
    }else{
       container.classList.remove('dark');  
        localStorage.setItem("containerDarkModeCheckbox",false);
    }
}

containerDarkModeCheckbox.addEventListener('change',changeContainerDarkModeCheckbox)