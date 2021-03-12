/*const dataSplitting = document.querySelector("data-splitting")
Splitting();
ScrollOut({
   targets: '[data-splitting]'
});*/


window.onscroll = function() {scrollFunction()};

   function scrollFunction() {
    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
       document.getElementById("header").className = "stor";
       document.getElementById("overskrift").className = "stor";
    } else {
      document.getElementById("header").className = "";
      document.getElementById("overskrift").className = "";

      }
   }
