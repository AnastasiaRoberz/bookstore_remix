//#region GLOBALE VARIABLEN
const cardWrapperRef = document.getElementById("card-wrapper");
const headingRef = document.getElementById("main-heading");
let currentView = "all";
let currentUser = "[unknown user]";
//#endregion

//#region INITIALISIERUNG
function init() {
  getFromLocalStorage();
  renderHeader();
  renderAllCards("all");
}
//#endregion

//#region RENDER MAIN GALLERY
function setHeading(viewType) {
  if (viewType === "all") {
    headingRef.innerText = "Die Galerie der teuren Staubfänger";
  } else if (viewType === "saved") {
    headingRef.innerText = "Meine Favoriten des finanziellen Ruins";
  }
}

function renderAllCards(viewType) {
  currentView = viewType;
  cardWrapperRef.innerHTML = "";
  setHeading(viewType);

  for (let i = 0; i < hobbys.length; i++) {
    if (viewType === "saved" && !hobbys[i].saved) continue;
    renderSingleCard(i);
  }
}

function renderSingleCard(i) {
  let cardInfos = infoTableTemplate(hobbys[i].avgCosts, hobbys[i].avgDuration, hobbys[i].avgLevel);
  cardWrapperRef.innerHTML += cardTemplate(i, cardInfos, renderComments(i));
  updateLikesContent(i);
}

function renderComments(i) {
  let comments = "";

  for (let j = hobbys[i].comments.length - 1; j >= 0; j--) {
    let commentButtons = getCommentButtons(i, j);  
    comments += commentTemplate(hobbys[i].comments[j], commentButtons);
  }
  return comments;
}
//#endregion

//#region USER INTERACTIONS
function likeCard(i, type) {
  if (type === "like") {
    updateLikeStatus(i);
  } else if (type === "dislike") {
    updateDislikeStatus(i);
  }
  saveToLocalStorage();
  updateLikesContent(i);
}

function saveCard(i, elementRef) {
  hobbys[i].saved = !hobbys[i].saved;
  saveToLocalStorage();

  if (currentView === "saved") {
    renderAllCards("saved");
  } else {
    elementRef.classList.toggle("icon-save-checked");
  }
}

function addComment(i) {
  const inputRef = document.getElementById(`send-comment-input${i}`);
  const commentsRef = document.getElementById(`comments-wrapper-card${i}`);
  let content = inputRef.value;

  if (content === "") {
    alert("Ein leerer Kommentar schützt niemanden vor Fehlkäufen!");
    return;
  } 

  hobbys[i].comments.push(createNewComment(content));
  saveToLocalStorage();
  commentsRef.innerHTML = renderComments(i);
  commentsRef.scrollTop = 0;
  inputRef.value = "";
}

function editComment(i, commentIndex) {
  const commentsRef = document.getElementById(`comments-wrapper-card${i}`);
  let oldText = hobbys[i].comments[commentIndex].commentContent;
  let newText = prompt("Bearbeite deinen Kommentar:", oldText);

  if (newText !== null) {
    hobbys[i].comments[commentIndex].commentContent = newText;
    saveToLocalStorage();
    commentsRef.innerHTML = renderComments(i);
  }
}

function deleteComment(i, commentIndex) {
  const commentsRef = document.getElementById(`comments-wrapper-card${i}`);
  hobbys[i].comments.splice(commentIndex, 1);
  saveToLocalStorage;
  commentsRef.innerHTML = renderComments(i);
}
//#endregion

init();