function addUser() {
  const userInputRef = document.getElementById("user-input");
  const loginRef = document.getElementById("login");
  if (userInputRef.value != "") {
    let userName = userInputRef.value;
    localStorage.setItem("userName", userName);
    loginRef.innerHTML = "";
    loginRef.innerHTML = welcomeTemplate(userName);
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