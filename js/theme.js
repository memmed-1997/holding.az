var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}




// $(".btnNav").on("click",function(){
//     $(".openNav").stop().slideToggle(300)
// })


// tilt START
$(document).ready(function(){
    $('.tilt').tilt({
      maxtilt:7,
      // glare: true,
      // scale: 1.1
    })
  })
      // tilt END
      


      // Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("home-li");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}