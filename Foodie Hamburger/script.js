const hamburgerIcon = document.querySelector('.hamburger-menu-container');
const headerContent = document.querySelector('.header-content');
const closedIcon = document.querySelector('.close-icon')

hamburgerIcon.addEventListener('click', () => {
    headerContent.classList.add('menu-open');
})
closedIcon.addEventListener('click', () => {
    headerContent.classList.remove('menu-open');
})