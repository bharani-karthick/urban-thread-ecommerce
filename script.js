//adding alert button

    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.product-box button').forEach(button => {
        button.addEventListener('click', function () {
            alert('Added to cart!');
        });
    });

// side navbar open and close


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

// product size selection

  const sizeButtons = document.querySelectorAll('.size-btn');

  sizeButtons.forEach(btn => {
    btn.addEventListener('click', () => {

      // remove active from all
      sizeButtons.forEach(b => b.classList.remove('active'));

      // add active to clicked
      btn.classList.add('active');

    });
  });

  // back button functionality
function goBack() {
    window.history.back();
}

// product detail page navigation
function openProduct(imgElement) {

    // get parent product box
    var box = imgElement.parentElement;

    // get details
    var name = box.querySelector("h5").textContent;
    var price = box.querySelector("p").textContent;
    var image = imgElement.src;

    // store in localStorage
    localStorage.setItem("p_name", name);
    localStorage.setItem("p_price", price);
    localStorage.setItem("p_image", image);

    // navigate to the product detail page
    window.location.href = "product-detail-page.html";
}
