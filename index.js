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

// SCRIPT for image slider