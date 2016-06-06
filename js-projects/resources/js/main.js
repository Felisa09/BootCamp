"use strict";

var buttonJoke;
var buttonError;


//4. When the page has finished loading the section must fade in. Hint: Use JavaScript, Browser Events, and CSS3
//4.2 Set a function to the event onload of window object
window.onload = function (){
 	//4.3 get the section element by its id
 	let sectionHello = document.getElementById("greeting-section");
 	//4.4 add a css class to my section-hidden Object  
 	sectionHello.classList.add("show");
 };

/*6. Attach a click event to the created button which calls a function 
  that gets a response from http://api.icndb.com/jokes/random. 
  Write the response to the section element. Hint: use the XMLHttpRequest to fetch data from the service*/
//6.1 Get the button-Joke element
buttonJoke = document.getElementById("btn-joke");
//6.2 Attach a click event to the created button which calls a function
buttonJoke.addEventListener("click", function(){
	let urlJokes = "http://api.icndb.com/jokes/random";
 	ajaxRequest(urlJokes);
});

//8. Show section content in red when a server error occurs.
//8.1 Get the button Error element
buttonError = document.getElementById("btn-error");
//8.2 Add the error-event to the button. 
buttonError.addEventListener("click", function () {
	let urlError = "http://error.come";
	ajaxRequest(urlError);
});


//7.From the previous exercise create a reusable function to perform AJAX calls. The function must accept a config object and return an ES6 Promise.
//7.1 Add a reusable function to perform AJAX calls. 
function ajaxRequest (url) {
	//6.2 Get a response with XMLHttpRequest
	//6.2.1 Create an object XMLHttpRequest
	let xhr = new XMLHttpRequest();
	
	//6.2.2 Set a function to the event of xhr object 
	xhr.onreadystatechange = function() {
		let norrisSection = document.getElementById("norris-jokes");
		
		//6.2.5 if the request was success
	    if (xhr.readyState == 4 && xhr.status == 200) {
	    	let data = JSON.parse(xhr.responseText);
			norrisSection.innerHTML = data.value.joke;
			//If the section contains error class, then remove it.
			if (norrisSection.classList.contains("error")) {
				norrisSection.classList.remove("error");
			}
	    }
	    //If the request failed.	
	  	else if (xhr.readyState == 4 && xhr.status == 0) {
	    	norrisSection.innerHTML = "Ooooops a wild error apperars!";
	    	norrisSection.classList.add("error");
	    }

	};
	
	//6.2.3 Open a channel comunication specifing the http method and url of the rest service
	xhr.open("Get",url);
	//6.2.4 Send the request
	xhr.send();
};

