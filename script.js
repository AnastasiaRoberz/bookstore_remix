//#region GLOBALE VARIABLEN
const dialogRef = document.getElementById("card-dialog");
const cardWrapperRef = document.getElementById("card-wrapper");
const headingRef = document.getElementById("main-heading");
let currentView = "all";
//#endregion

//#region INITIALISIERUNG
function init() {
  getFromLocalStorage();
  renderHeader(); // Aus auth.js
  renderCard("all");
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

function renderSingleCard(i) {
  let cardInfos = renderInfoTable(i); // Nutzt Helper-Funktion
  cardWrapperRef.innerHTML += cardTemplate(i, cardInfos);
  let cardContainer = document.getElementById(`card${i}`);
  let elements = getLikeElements(cardContainer);

  updateLikesContent(
    i,
    elements.btnSave,
    elements.btnLike,
    elements.btnDislike,
    elements.txtLikes,
    elements.txtDislikes
  );
}

function renderCard(viewType) {
  currentView = viewType;
  cardWrapperRef.innerHTML = "";
  setHeading(viewType);

  for (let i = 0; i < hobbys.length; i++) {
    if (viewType === "saved" && !hobbys[i].saved) continue;
    renderSingleCard(i);
  }
}
//#endregion

//#region RENDER DIALOG
function openDialog(i) {
  dialogRef.showModal();
  dialogRef.classList.add("opened");
  document.body.classList.add("dialog-open");
  renderDialog(i);
}

function closeDialog() {
  dialogRef.close();
  dialogRef.classList.remove("opened");
  document.body.classList.remove("dialog-open");
  renderCard(currentView);
}

function renderComments(i) {
  let comments = "";
  let currentComments = hobbys[i].comments;

  for (let j = currentComments.length - 1; j >= 0; j--) {
    comments += commentsTemplate(currentComments[j]);
  }
  return comments;
}

function renderDialog(i) {
  dialogRef.innerHTML = "";
  const infos = renderInfoTable(i);
  const comments = renderComments(i);
  dialogRef.innerHTML += getDialogTemplate(i, infos, comments);
  let elements = getLikeElements(dialogRef);

  updateLikesContent(
    i,
    null,
    elements.btnLike,
    elements.btnDislike,
    elements.txtLikes,
    elements.txtDislikes
  );
}
//#endregion

//#region USER INTERACTIONS
function addComment(i) {
  const commentInputRef = document.getElementById(`send-comment-input${i}`);
  const commentsRef = document.getElementById("comments-wrapper");
  let content = commentInputRef.value;

  if (content === "") {
    alert("Ein leerer Kommentar schützt niemanden vor Fehlkäufen!");
    return;
  } 

  hobbys[i].comments.push(createNewComment(content)); // Nutzt Helper-Funktion
  saveToLocalStorage();
  commentsRef.innerHTML = renderComments(i);
  commentInputRef.value = "";
}

function likeCard(i, type, elementRef) {
  let parentWrapper = elementRef.closest(".likes-wrapper");
  let elements = getLikeElements(parentWrapper);

  if (type === "like") {
    updateLikeStatus(i);
  } else if (type === "dislike") {
    updateDislikeStatus(i);
  }

  saveToLocalStorage();
  updateLikesContent(
    i,
    elements.btnSave,
    elements.btnLike,
    elements.btnDislike,
    elements.txtLikes,
    elements.txtDislikes
  );
}

function saveCard(i, elementRef) {
  hobbys[i].saved = !hobbys[i].saved;
  saveToLocalStorage();

  if (currentView === "saved") {
    renderCard("saved");
  } else {
    elementRef.classList.toggle("icon-save-checked");
  }
}
//#endregion

init();