
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
//en font knapp og en font+farge knapp

window.onload=function(){
  const btn = document.querySelector(".fargeknapp");
  const theme = document.querySelector("#tema-link");
   
  btn.addEventListener("click", function() {
    if (theme.getAttribute("href") == "stilark.css") {
      theme.href = "fargemodus.css";
    } 
    else if (theme.getAttribute("href") == "fontmodus.css") {
      theme.href = "fargemodus.css";
    }
    else {
      theme.href = "stilark.css";
    }
  });

   const btnen = document.querySelector(".fontknapp");
   btnen.addEventListener("click", function() {
     if (theme.getAttribute("href") == "stilark.css") {
       theme.href = "fontmodus.css";
     } 
     else if (theme.getAttribute("href") == "fargemodus.css") {
      theme.href = "fontmodus.css";
     }
     else {
       theme.href = "stilark.css";
     }
   });

   const btnto = document.querySelector(".vanligknapp");
   btnto.addEventListener("click", function() {
    if (theme.getAttribute("href") == "fontmodus.css") {
      theme.href = "stilark.css";
    } 
    else if (theme.getAttribute("href") == "fargemodus.css") {
     theme.href = "stilark.css";
    }
    else {
      theme.href = "stilark.css";
    }
  });

  var myLoreVideo=document.getElementById("myLoreVideo");
  function playPause() { 
  if (myLoreVideo.paused) 
    myLoreVideo.play(); 
  else 
    myLoreVideo.pause(); 
  } 
}

