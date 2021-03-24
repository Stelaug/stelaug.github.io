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
       document.getElementById("imgknapp").className = "stor";
    } else {
      document.getElementById("header").className = "";
      document.getElementById("overskrift").className = "";
      document.getElementById("imgknapp").className = "";

      }
   }



   var myVideo=document.getElementById("video");
   document.addEventListener("keyup", function(event) {
      
      if (event.key === ' ') {
         event.preventDefault();
         myVideo.pause(); 
         
      }
      else if (myVideo.paused) {
      myVideo.play();
      }
      else {myVideo.play();
      }
    });
   