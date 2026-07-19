const dialogRef = document.getElementById("card-dialog");

function init() {
  renderHeader();
  renderCard();
}

function calcAvgCosts(i) {
  let avgCosts = getAverage(i, "costs");
  return formatPrice(avgCosts);
}

function calcAvgDuration(i) {
  let avgDuration = getAverage(i, "duration");
  return Math.trunc(avgDuration);
}

function calcAvgEuphoriaLevel(i) {
  let avgLevel = getAverage(i, "euphoriaLevel");
  return roundNumber(avgLevel, 1);
}

function renderInfoTable(i) {
  let avgCosts = calcAvgCosts(i);
  let avgDuration = calcAvgDuration(i);
  let avgLevel = calcAvgEuphoriaLevel(i);
  let infoContent = "";

  infoContent = infoTableTemplate(avgCosts, avgDuration, avgLevel);

  return infoContent;
}

function renderCard() {
  const cardWrapperRef = document.getElementById("card-wrapper");
  cardWrapperRef.innerHTML = "";

  for (let i = 0; i < hobbys.length; i++) {
    let cardInfos = renderInfoTable(i);
    cardWrapperRef.innerHTML += cardTemplate(i, cardInfos);
    let cardContainer = document.getElementById(`card${i}`);
    let btnSave = cardContainer.querySelector(".icon-save");
    let btnLike = cardContainer.querySelector(".icon-like");
    let btnDislike = cardContainer.querySelector(".icon-dislike");
    let txtLikes = cardContainer.querySelector(".like-number");
    let txtDislikes = cardContainer.querySelector(".dislike-number");

    updateLikesContent(i, btnSave, btnLike, btnDislike, txtLikes, txtDislikes);
  }
}

function openDialog(i) {
  dialogRef.showModal();
  dialogRef.classList.add("opened");
  renderDialog(i);
}

function closeDialog() {
  dialogRef.close();
  dialogRef.classList.remove("opened");
  renderCard();
}

function bubblingProtection(event) {
  event.stopPropagation();
}

function renderComments(i) {
  let comments = "";
  let arrayLength = hobbys[i].comments.length;

  for (let j = arrayLength -1; j >= 0; j--) {
    comments += commentsTemplate(i, j);
  }
  return comments;
}

function renderDialog(i) {
  dialogRef.innerHTML = "";
  const infos = renderInfoTable(i);
  const comments = renderComments(i);
  dialogRef.innerHTML += getDialogTemplate(i, infos, comments);
  let btnLike = dialogRef.querySelector(".icon-like");
  let btnDislike = dialogRef.querySelector(".icon-dislike");
  let txtLikes = dialogRef.querySelector(".like-number");
  let txtDislikes = dialogRef.querySelector(".dislike-number");

  updateLikesContent(i, btnLike, btnDislike, txtLikes, txtDislikes);
}

function addComment(i) {
  const commentInputRef = document.getElementById(`send-comment-input${i}`);
  const commentsRef = document.getElementById("comments-wrapper");
  console.log(commentInputRef);
  commentsRef.innerHTML = "";
  let content = commentInputRef.value;
  let user = "[unknown user]";
  if (localStorage.getItem("userName")) {
    user = localStorage.getItem("userName");
  }
  let newComment = {"userName": user, "commentContent": content, "costs": 68, "duration": 30, "euphoriaLevel": 6}
  hobbys[i].comments.push(newComment);
  
  commentsRef.innerHTML = renderComments(i);
  commentInputRef.value = "";
}

function likeCard(i, type, elementRef) {
  let parentWrapper = elementRef.closest(".likes-wrapper");
  let btnLike = parentWrapper.querySelector(".icon-like");
  let txtLikes = parentWrapper.querySelector(".like-number");
  let btnDislike = parentWrapper.querySelector(".icon-dislike");
  let txtDislikes = parentWrapper.querySelector(".dislike-number");

  if (type === "like") {
    updateLikeStatus(i);
  } else if (type === "dislike") {
    updateDislikeStatus(i);
  }
  updateLikesContent(i, btnLike, btnDislike, txtLikes, txtDislikes);
}

function saveCard(i, elementRef) {
  hobbys[i].saved = !hobbys[i].saved;
  elementRef.classList.toggle("icon-save-checked");
}

function renderSavedCards() {
  const cardWrapperRef = document.getElementById("card-wrapper");
  cardWrapperRef.innerHTML = "";

  for (let i = 0; i < hobbys.length; i++) {
    if (hobbys[i].saved === true) {
      let cardInfos = renderInfoTable(i);
      cardWrapperRef.innerHTML += cardTemplate(i, cardInfos);
      let cardContainer = document.getElementById(`card${i}`);
      let btnSave = cardContainer.querySelector(".icon-save");
      let btnLike = cardContainer.querySelector(".icon-like");
      let btnDislike = cardContainer.querySelector(".icon-dislike");
      let txtLikes = cardContainer.querySelector(".like-number");
      let txtDislikes = cardContainer.querySelector(".dislike-number");
  
      updateLikesContent(i, btnSave, btnLike, btnDislike, txtLikes, txtDislikes);
    }
  }
}

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

init();
