// JavaScript Document

var year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;

function valid() {
	var name = documant.forms["email"]["fname"].value;
	var email = documant.forms["email"]["femail"].value;
	var text = documant.forms["email"]["ftext"].value;
	
	if (name == "" || name == null) {
		alert("Fill In Name Box");
		return false;
	}
	if (email == "" || email == null) {
		alert("Fill In Email Box");
		return false;
	}
	if (text == "" || text == null) {
		alert("Fill In Text Box");
		return false;
	}
}