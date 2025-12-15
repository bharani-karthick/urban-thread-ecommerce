var sidenavbar =document.querySelector('.side-navbar');
 function openSideNavbar(){
    sidenavbar.style.left="0%";
 }

 var sidenavbarclose=document.querySelector('.side-navbar-close');
 sidenavbarclose.addEventListener("click",function(){
    sidenavbar.style.left="-50%";
    
 })



//   selecting search bar 


var searchbar  =document.getElementById("searchbarinput")
var searchinput =document.querySelector(".products")
var elements =searchinput.querySelectorAll("div")
  

searchbar.addEventListener("keyup",function(){
   
   var enteredvalue =event.target.value.toUpperCase()

   for(count=0;count<elements.length;count=count+1){

      var productname =elements[count].querySelector("h5").textContent


      if(productname.toUpperCase().indexOf(enteredvalue)<0){
         elements[count].style.display="none"
      
      }
      else{
         elements[count].style.display="block"
      }
   }

})



