
console.log('hola')
const header = document.querySelector("header"); 

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 0); 
}); 

let menu = document.querySelector('#menu-icon'); 
let navlist = document.querySelector('.navlist'); 


/*menu.addEventListener('click', () => alert('you pressed'))*/

menu.onclick = () => {
    menu.classList.toggle('bx-x'); 
    navlist.classList.toggle('active');
    
}

window.onscroll = () => {
    menu.classList.remove('bx-x'); 
    navlist.classList.remove('active');
}

const sr =ScrollReveal({
    distance: '145px', 
    duration: 3700, 
    reset: true
})
sr.reveal('.home-text', {delay:350, origin: 'left'})
sr.reveal('.home-img', {delay:350, origin: 'bottom'})



sr.reveal('.sub-service, .about, .portfolio, .service, .cta, .contact ', {delay:200, origin: 'right'})
