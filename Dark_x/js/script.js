const headerMenu = document.getElementById('headerMenu');

function openBurgerMenu(){
   headerMenu.classList.toggle('open');
   document.body.classList.toggle('closed');
}