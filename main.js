let menu = document.querySelector("#headerContainer nav ul");
let menuButton = document.querySelector("#headerContainer nav img");
let isMenu;

function toggleMenu() {
    if (menu.style.display === 'block' || menu.style.display === 'flex') {
        isMenu = false;
        menu.style.display = 'none'
    } else {
        isMenu = true;
        menu.style.display = 'flex'
        menu.style.flexDirection = 'column';
        menu.style.position = 'absolute'
        menu.style.backgroundColor = 'rgb(0,123,191)';
        menu.style.padding = '10px';
    }
}

function closeMenuIfClickedOutside(event) {
    if (isMenu && menu != event.target && menuButton != event.target && window.innerWidth < 600) {
        isMenu = false;
        menu.style.display = 'none'
    }
}

function handleResize() {
    if (window.innerWidth > 600) {
        menu.style.display = '';
        menu.style.position = '';
        menu.style.backgroundColor = '';
        menu.style.padding = '';
        menu.style.flexDirection = '';
    }
}

document.addEventListener('click', closeMenuIfClickedOutside)
menuButton.addEventListener('click', toggleMenu);
window.addEventListener('resize', handleResize)