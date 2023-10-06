window.addEventListener('scroll', reveal);
function reveal(){
   var reveals = document.querySelectorAll('.reveal');
   for(var i = 0; i < reveals.length; i++){
      var windowheigth = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if(revealtop < windowheigth - revealpoint){
         reveals[i].classList.add('active');
      } else{
         reveals[i].classList.remove('active');
      }
   }
}
  
  