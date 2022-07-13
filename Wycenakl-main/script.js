
// burger menu

const menuBtn = document.querySelector('.burger');
const popUp = document.querySelector('.popUpMenu');

let menuOpen = false;

menuBtn.addEventListener('click', ()=>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        popUp.classList.add('open');
        popUp.style.display='flex';
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        popUp.classList.remove('open');
        popUp.style.display='none';
        menuOpen = false;
    }
    
   
});



Array.from(document.getElementsByClassName('querry')).forEach((e)=> e.addEventListener('click', ()=>{
    if(menuOpen){
        menuBtn.classList.remove('open');
        popUp.classList.remove('open');
        popUp.style.display='none';
        menuOpen = false;
    }
}) );



// koniec burger menu

window.addEventListener('resize',CheckScreenWidth )

function CheckScreenWidth() {
    if(window.innerWidth > 1199.98){
        popUp.style.display='none';
    } else {
        popUp.style.display='flex';
    }
}



