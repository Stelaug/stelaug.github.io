/*const dataSplitting = document.querySelector("data-splitting")
Splitting();
ScrollOut({
   targets: '[data-splitting]'
});*/


window.onscroll = function() {scrollFunction()};

   function scrollFunction() {
    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
       document.getElementById("headeren").className = "stor";
       document.getElementById("overskriftbilde").className = "stor";
       document.getElementById("imgknapp").className = "stor";
    } else {
      document.getElementById("headeren").className = "";
      document.getElementById("overskriftbilde").className = "";
      document.getElementById("imgknapp").className = "";

      }
   }



   /*var myVideo=document.getElementById("video");
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
    });*/
   