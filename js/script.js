var existUser = localStorage.getItem("currentUser");

function existCheck() {
	if (existUser) {
		document.location.href = "profile.html";
	}
	else {
		document.location.href = "login.html";
	}
}

function checkReg() {
	var logEmail = document.querySelector("[name=getEmail]");
	var logPass = document.querySelector("[name=getPassword]");
	var emailRegExp = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
	var existEmail = localStorage.getItem(logEmail.value);
	if (!logEmail.value || !logPass.value) {		
		alert("Не введен логин/пароль");		
	}
	else if (!(emailRegExp.test(logEmail.value))) {
		alert("Неверный формат e-mail");
	}
	else if (logEmail.value === existEmail) {
		alert("Пользователь уже существует");
	}
	else {
		localStorage.setItem(logEmail.value, logEmail.value);
		localStorage.setItem(logPass.value+logEmail.value, logPass.value);
		alert("Вы успешно зарегистрированы!");
	}
};

function checkAuth() {
	var exEmail = document.querySelector("[name=email]");
	var exPass = document.querySelector("[name=password]");
	var storedEmail = localStorage.getItem(exEmail.value);
	var storedPass = localStorage.getItem(exPass.value+exEmail.value);
	if ((storedEmail == exEmail.value) && (storedPass == exPass.value)) {
		localStorage.setItem("currentUser",exEmail.value);
		localStorage.setItem("currentPass",exPass.value);		
		window.open("profile.html");
		window.close();
	}
	else {
		alert("Невалидные значения! Проверьте введенные данные");
	}	
};