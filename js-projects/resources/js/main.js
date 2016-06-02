/*$(document).ready(function(){
	$("section#hidden").hide();
	$("section#hidden").fadeIn(1000);
});*/

document.onreadystatechange = function () {
	if (document.readyState == "complete") {
		var element = document.getElementById("gretting-section");
	  	fadeIn(element);
	}
}

function fadeIn(element) {
	element.style.opacity = 0;
	var show = function() {
		element.style.opacity = +element.style.opacity + 0.01;
		if (+element.style.opacity < 1) {
	    	(window.requestAnimationFrame && requestAnimationFrame(show)) || setTimeout(show , 16)
		}
	};

	show();
}

function myFunction() {
	var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://api.icndb.com/jokes/random", false);
  xhttp.send();
  document.getElementById("joke").innerHTML = xhttp.responseText;
}


