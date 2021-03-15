/*const dataSplitting = document.querySelector("data-splitting")
Splitting();
ScrollOut({
   targets: '[data-splitting]'
});*/

var infobokser = document.getElementsByClassName("infobokser");

document.getElementsByClassName("infobokser").onscroll = function() {scrollFunction()};

function scrollFunction() {
   console.log("kjører");
   if (document.infobokser.scrollTop > 15) {
      document.getElementById("header").className = "stor"; } 
   else {
      document.getElementById("header").className = ""; }
   }







/*Original fra W3S
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").className = "liten";
  } else {
    document.getElementById("header").className = "";
  }
}
*/