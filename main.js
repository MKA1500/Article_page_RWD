var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function (){
   document.querySelector(".page-header").classList.toggle("nav-opened");	
   /* 'toggle' doda po kliknieciu nav-opened na page-headerze, jesli go tam wczesniej nie ma */
}, false);