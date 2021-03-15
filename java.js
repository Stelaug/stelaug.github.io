/*const dataSplitting = document.querySelector("data-splitting")
Splitting();
ScrollOut({
   targets: '[data-splitting]'
});*/

var infobokser = document.getElementsByClassName("infobokser");

document.getElementsByClassName("infobokser").onscroll = function() {scrollFunction()};

   function scrollFunction() {
    if (document.infobokser.scrollTop > 15) {
       document.getElementById("header").className = "stor";
    } else {
      document.getElementById("header").className = "";

      }
   }
