$(document).ready(function() {
var movementStrength = 25;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
var images = [
	'img/car.png', 'img/footsize.png', 'img/money.png', 'img/sex.png', 'img/clothes.png', 'img/height.png', 'img/image.png', 'img/size.png', 'img/success.png', 'img/muscles.png', 'img/power.png'];
var container = document.getElementById('text');


$("article").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 50;
          $('article').css("background-position", newvalueX+"px     "+newvalueY+"px");
});

$("#text").on('click', function (){
	changeImage(getRandomImage());
});

//$(img).on("click",function(){
//  var x = "";
//	imgChangeTo(x)});

function changeImage(targetImage){
	container.src = targetImage;

}


function getRandomImage(){
	var imageNumber = Math.random() * images.length;
	imageNumber = Math.round(imageNumber);
	return images[imageNumber];

}

});










