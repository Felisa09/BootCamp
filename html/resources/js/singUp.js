window.onload = function(){
	showFunc();
}

function save() {
	var nameTxt = document.getElementById("txt-name").value;
	var lastnameTxt = document.getElementById("txt-last").value;
	var emailTxt = document.getElementById("txt-email").value;
	var dateTxt = document.getElementById("txt-date").value;
	var sportTxt = document.getElementById("slct-sport").value;
	var bioTxt = document.getElementById("txt-bio").value;

	localStorage.setItem("Name", nameTxt); 
	localStorage.setItem("Last", lastnameTxt);
	localStorage.setItem("Email", emailTxt);
	localStorage.setItem("Date", dateTxt);
	localStorage.setItem("Sport", sportTxt);
	localStorage.setItem("Bio", bioTxt);

	localStorage.setItem("isDataSaved", "true");
}

function showFunc() {
	if ( localStorage.getItem("isDataSaved") == "true" ) {
		document.getElementById("txt-name").value = localStorage.getItem("Name");
		document.getElementById("txt-last").value = localStorage.getItem("Last");
		document.getElementById("txt-email").value = localStorage.getItem("Email");
		document.getElementById("txt-date").value = localStorage.getItem("Date");
		document.getElementById("slct-sport").value = localStorage.getItem("Sport");
		document.getElementById("txt-bio").value = localStorage.getItem("Bio");
	}
	
	
	
}

function clearFunc () {
   	localStorage.removeItem("Name"); 
	localStorage.removeItem("Last");
	localStorage.removeItem("Email");
	localStorage.removeItem("Date");
	localStorage.removeItem("Sport");
	localStorage.removeItem("Bio");

	localStorage.setItem("isDataSaved", "false"); 
}
