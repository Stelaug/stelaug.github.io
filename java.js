

/*test1*/
/*var infobokser = document.getElementsByClassName("infobokser");

document.getElementsByClassName("infobokser").onscroll = function() {scrollFunction()};

function scrollFunction() {
   console.log("kjører");
   if (document.infobokser.scrollTop > 15) {
      document.getElementById("header").className = "stor"; } 
   else {
      document.getElementById("header").className = ""; }
   }*/





/*ny test*/
var infobokser = document.getElementsByClassName("infobokser");
document.getElementsByClassName("infobokser").onScroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.infobokser.scrollTop > 50 || document.documentElement.scrollTop > 50) {
   document.getElementById("header").classList.add('liten');
   document.getElementById("header").classList.remove('liten');
  } else {
    document.getElementById("header").classList.add = ("");
    document.getElementById("header").classList.remove("");
  }
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