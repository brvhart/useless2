




$(document).ready(function() {
var movementStrength = 25;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$("body").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 50;
          $('body').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
});




let container = document.querySelector('#container');
const RADIUS = 50;

document.addEventListener('mousemove', function (event) {
  let x = event.clientX - container.offsetLeft;
  let y = event.clientY - container.offsetTop;
  
  let circle = `circle(${RADIUS}px at ${x}px ${y}px)`;
  container.style['-webkit-clip-path'] = circle;
  container.style['clip-path'] = circle;
  container.style.display = "block";
});



$(document).ready(function() {
var movementStrength = 25;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$("article").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 50;
          $('article').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
});