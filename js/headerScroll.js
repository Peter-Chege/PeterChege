// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("sticky","scrolled");
   
  } 

  
}
// pageYOffset or scrollY
//if (window.pageYOffset > 0) {
   // navbar.classList.add('scrolled')
  //} else {
  //  navbar.classList.remove('scrolled')
 // }