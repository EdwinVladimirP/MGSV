
console.log('hola')
const header = document.querySelector("header"); 

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 0); 
}); 

let menu = document.querySelector('#menu-icon'); 
let navlist = document.querySelector('.navlist'); 


/*menu.addEventListener('click', () => alert('you pressed'))*/

menu.onclick = () => {
    menu.classList.toggle('bx-xxxxxx'); 
    navlist.classList.toggle('active');
    
}

window.onscroll = () => {
    menu.classList.remove('bx-x'); 
    navlist.classList.remove('active');
}


