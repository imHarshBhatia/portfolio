var navBar;
var navBarYPos;
$(document).ready(function() {
  $("body").fadeIn(2000);
  navBar = document.getElementsByClassName('header-nav')[0];
  navBarYPos = navBar.offsetTop;
  console.log(navBarYPos);
});

window.onscroll = function() {scrollHandler()}

function scrollHandler() {
  if (window.pageYOffset >= navBarYPos) {
    console.log('If');
    navBar.classList.add("fixed");
  } else {
    console.log('Else');
    navBar.classList.remove("fixed");
  }
}