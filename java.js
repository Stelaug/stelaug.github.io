
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

let farger = [
  {navn:"vanlig",     bgimage:"background-image: linear-gradient(to bottom right, #090737, #390026, #640000);", bgcolor:"#390026;", tekstfarge:"white", tekstfont:"Pixel UniCode"},
  {navn:"betterfont", bgimage:"background-image: linear-gradient(to bottom right, #090737, #390026, #640000);", bgcolor:"#390026;", tekstfarge:"white", tekstfont:"Arial, Helvetica, sans-serif"},
  {navn:"dark",       bgimage:"none", bgcolor:"black", tekstfarge:"white", tekstfont:"Pixel UniCode"},
  {navn:"light",      bgimage:"none", bgcolor:"white", tekstfarge:"black", tekstfont:"Pixel UniCode"}
  
  //{navn:"",           bgimage:"", bakgrunn:"", tekstfarge:"", tekstfont:""}
]

function riktigeFarger() {
  var i = temaVelger.selectedIndex;
  document.body.style.color = farger[i].tekstfarge;
  document.body.style.fontFamily = farger[i].tekstfont;
  document.getElementsByClassName("knapper").style.fontFamily = farger[i].tekstfont;
  document.body.style.backgroundImage = farger[i].bgimage;
  document.body.style.backgroundColor = farger[i].bgcolor;
  
}

window.onload = function() {
  var myLoreVideo=document.getElementById("myLoreVideo");
  function playPause() { 
  if (myLoreVideo.paused) 
    myLoreVideo.play(); 
  else 
    myLoreVideo.pause(); 
  } 
}
  


