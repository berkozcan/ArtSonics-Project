
var registerBtn = document.getElementById("register-btn");
registerBtn.addEventListener("click", function() {
	var clientData = document.getElementById("client-data").value;
	if (clientData.trim() !== "") {
		var registerSection = document.getElementById("register-client");
		registerSection.style.display = "block";
	}
});


window.addEventListener("load", function() {
	var angle = (Math.PI / 2) * (ID % 4);
	drawShield(angle);
});


function drawShield(angle) {
	var canvas = document.getElementById("shield-canvas");
	var ctx = canvas.getContext("2d");
	var gradient
}