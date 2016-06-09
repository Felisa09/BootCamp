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

	let parametersData = ["q=JavaScript"];
	let configGitRepos = new Config("Get", "https://api.github.com/search/repositories", parametersData);
 	let promiseGitRepos = ajaxRequest(configGitRepos);
 	promiseGitRepos.then(
		function(data){
			let dataJson = JSON.parse(data);
			console.log(dataJson);
		}
	).catch(
		function(data) {
	    	console.log(data);
		}
	);
 };

/*6. Attach a click event to the created button which calls a function 
  that gets a response from http://api.icndb.com/jokes/random. 
  Write the response to the section element. Hint: use the XMLHttpRequest to fetch data from the service*/
//6.1 Get the button-Joke element
buttonJoke = document.getElementById("btn-joke");
//6.2 Attach a click event to the created button which calls a function
buttonJoke.addEventListener("click", function(){
	let httpMethod = "Get";
	let url = "http://api.icndb.com/jokes/random";
	let configJoke = new Config(httpMethod, url);
 	let promiseJoke = ajaxRequest(configJoke);

 	let norrisSection = document.getElementById("norris-jokes");
 	promiseJoke.then(
		function(data){
			let dataJson = JSON.parse(data);
			norrisSection.innerHTML = dataJson.value.joke;
			//If the section contains error class, then remove it.
			if (norrisSection.classList.contains("error")) {
				norrisSection.classList.remove("error");
			}
		}
	).catch(
		function(data) {
	    	norrisSection.innerHTML = "Ooooops a wild error apperars!" + data;
	    	norrisSection.classList.add("error");
		}
	);

});

//8. Show section content in red when a server error occurs.
//8.1 Get the button Error element
buttonError = document.getElementById("btn-error");
//8.2 Add the error-event to the button. 
buttonError.addEventListener("click", function () {
	let configError = new Config("Get","http://error.come");
	let promiseError = ajaxRequest(configError);
	let norrisSection = document.getElementById("norris-jokes");
	promiseError.then(
		function(data){
			let dataJson = JSON.parse(data);
			norrisSection.innerHTML = dataJson.value.joke;
			//If the section contains error class, then remove it.
			if (norrisSection.classList.contains("error")) {
				norrisSection.classList.remove("error");
			}
		}
	).catch(
		function(data) {
	    	norrisSection.innerHTML = "Ooooops a wild error apperars!" + data;
	    	norrisSection.classList.add("error");
		}
	);
});

//7.2 Create a config object
//9.2 set parametersData [optional] to my function
function Config (httpMethod, url, parametersData) {
	this.httpMethod = httpMethod;
	this.url = url;
	this.parametersData = parametersData;

	this.completeCall = function () {
		let uri = this.url;
		//if the parameters data at least has one parameter then
		if (this.parametersData != null && this.parametersData.length > 0) {
			// i do concat
			uri += "?" + this.parametersData[0];
			//an later i add the another parameters
			for (var i =  1; i < this.parametersData.length; i++) {
				uri += "&" + this.parametersData[i];
			}
		}
		console.log(uri);
		return uri;
	}
};

//7.From the previous exercise create a reusable function to perform AJAX calls. The function must accept a config object and return an ES6 Promise.
//7.1 Add a reusable function to perform AJAX calls. 
function ajaxRequest (config) {

	let myPromise = new Promise(
		function(resolve, reject){
			//6.2 Get a response with XMLHttpRequest
			//6.2.1 Create an object XMLHttpRequest
			let xhr = new XMLHttpRequest();
			//6.2.3 Open a channel comunication specifing the http method and url of the rest service
			xhr.open(config.httpMethod, config.completeCall());
			//6.2.4 Send the request
			xhr.send();

			//6.2.2 Set a function to the event of xhr object 
			xhr.onload = function() {				
				//6.2.5 if the request was success
			    if (this.readyState == 4 && this.status == 200) {
			    	resolve(this.responseText);
			    }
			};

			//If the request failed.
			xhr.onerror = function () {
				//reject(xhr.status + " : " + xhr.statusText);
				reject(this.responseText);
			}; 
		}
	);
	//7.3 return a ES6 Promise
	return myPromise;
};
































































