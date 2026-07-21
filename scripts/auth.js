function addUser() {
  const userInputRef = document.getElementById("user-input");
  const loginRef = document.getElementById("login");
  if (userInputRef.value != "") {
    currentUser = userInputRef.value;
    localStorage.setItem("userName", currentUser);
    loginRef.innerHTML = welcomeTemplate(currentUser);
  }
}

function renderHeader() {
  const loginRef = document.getElementById("login");
  if (currentUser != "[unknown user]") {
    loginRef.innerHTML = welcomeTemplate(currentUser);
  } else {
    loginRef.innerHTML = loginTemplate();
  }
}