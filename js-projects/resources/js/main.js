"use strict";
//4. When the page has finished loading the section must fade in. Hint: Use JavaScript, Browser Events, and CSS3
//4.2 Set a function to the event onload of window object
window.onload = function (){
 	//4.3 get the section element by its id
 	var sectionHello = document.getElementById("greeting-section");
 	//4.4 add a css class to my section-hidden Object  
 	sectionHello.classList.add("show");
};

/*6. Attach a click event to the created button which calls a function 
  that gets a response from http://api.icndb.com/jokes/random. 
  Write the response to the section element. Hint: use the XMLHttpRequest to fetch data from the service*/

//6.1 Attach a click event to the created button which calls a function
document.getElementById("btn-joke").addEventListener("click", function(){
   
	//6.2 Get a response with XMLHttpRequest
	//6.2.1 Create an object XMLHttpRequest
	var xhr = new XMLHttpRequest();
	
	//6.2.2 Set a function to the event of xhr object 
	xhr.onreadystatechange = function() {
		//6.2.5 if the request was success
	    if (xhr.readyState == 4 && xhr.status == 200) {
	    	var data = JSON.parse(xhr.responseText);
	    	console.log(data);
			document.getElementById("norris-jokes").innerHTML = data.value.joke;
	    }	
	};
	//6.2.3 Open a channel comunication specifing the http method and url of the rest service
	xhr.open("Get","http://api.icndb.com/jokes/random");
	//6.2.4 Send the request
	xhr.send();
});
