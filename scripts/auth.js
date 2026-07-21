function addUser() {
  const userInputRef = document.getElementById("user-input");
  const loginRef = document.getElementById("login");
  if (userInputRef.value != "") {
    currentUser = userInputRef.value;
    localStorage.setItem("userName", currentUser);
    loginRef.innerHTML = "";
    loginRef.innerHTML = welcomeTemplate(currentUser);
  } else {
    alert("Du hast da wohl etwas vergessen.");
  }
}

function renderHeader() {
  const loginRef = document.getElementById("login");
  const userName = localStorage.getItem("userName");
  if (userName) {
    loginRef.innerHTML = welcomeTemplate(userName);
  } else {
    loginRef.innerHTML = loginTemplate();
  }
}