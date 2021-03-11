/*const dataSplitting = document.querySelector("data-splitting")
Splitting();
ScrollOut({
   targets: '[data-splitting]'
});*/


window.onscroll = function() {scrollFunction()};

   function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
       document.getElementById("header").className = "stor";
    } else {
      document.getElementById("header").className = "";

      }
   }
