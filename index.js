//SCRIPT for loader
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
    document.querySelector(
    "body").style.visibility = "hidden";
    document.querySelector(
    "#loader").style.visibility = "visible";
  } else {
    document.querySelector(
    "#loader").style.display = "none";
    document.querySelector(
    "body").style.visibility = "visible";
  }
};

// SCRIPT for Navigation bar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// SCRIPT for FADE
// FADE
$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});
