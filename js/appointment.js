var currentUserTag = localStorage.getItem("currentUser");
var clientName = document.querySelector("[name=name]");
var clientNumber = document.querySelector("[name=phone]");
var serviceType = document.querySelector("[name=offer-list]");
var day = document.querySelector("[name=day]");
var currentUser = localStorage.getItem("currentUser");
var currentPassword = localStorage.getItem("currentPass");

document.querySelector(".current-account").innerHTML = currentUserTag;

function makeApp() {
	var newApp = currentUser + serviceType.value + day.value;
	var serviceTypeValue = serviceType.options[serviceType.selectedIndex].text;
	var dayValue = day.options[day.selectedIndex].text;
	if (localStorage.getItem(newApp)) {
		alert("Вы уже записаны на данную процедуру в этот день.");
	}
	else {
		localStorage.setItem(newApp, newApp);
		alert("Вы записались на " + dayValue.toLowerCase() + " на услугу " + serviceTypeValue.toLowerCase() + "! \nМы свяжемся с Вами в ближайшее время");
	}
}

function logOut() {
	localStorage.removeItem("currentUser");
	localStorage.removeItem("currentPass");
	document.location.href = "index.html";
}