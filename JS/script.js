const menu = document.querySelector('menu');
const hamburger = document.querySelector('.hamburger');


document.body.addEventListener('click',showMenu)

function showMenu(e) {
    // console.log(e.target)
    if(e.target.matches('.hamburger')) {
        // menu.toggle.classList('menu-show');
        if(menu.classList.contains('menu-show') === false) {
            menu.setAttribute('class','menu-show');
            // console.log(menu);
        }
        if(menu.classList.contains('menu-show') === true) {
            hamburger.style.display = 'none'
        }  
    }
    else if(menu.classList.contains('menu-show') === true &&
            e.target !== menu) {
        menu.removeAttribute('class','menu-show');
        hamburger.style.display = 'block'
    }  
}