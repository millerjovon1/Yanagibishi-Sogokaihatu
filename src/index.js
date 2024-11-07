window.onscroll = function() { myFunction() };

var banner = document.getElementById("myBanner");
var sticky = banner.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    banner.classList.add("sticky");
  } else {
    banner.classList.remove("sticky");
  }
}
