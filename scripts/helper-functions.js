//#region LIKE STATUS
function updateLikeStatus(i) {  
  if (hobbys[i].liked === false) {
    hobbys[i].liked = true;
    hobbys[i].likes++;
    if (hobbys[i].disliked === true) {
      hobbys[i].disliked = false;
      hobbys[i].dislikes--;
    }
  } else {
    hobbys[i].liked = false;
    hobbys[i].likes--;
  }
}

function updateDislikeStatus(i) {
  if (hobbys[i].disliked === false) {
    hobbys[i].disliked = true;
    hobbys[i].dislikes++;
    if (hobbys[i].liked === true) {
      hobbys[i].liked = false;
      hobbys[i].likes--;
    }
  } else {
    hobbys[i].disliked = false;
    hobbys[i].dislikes--;
  }
}

function updateLikesContent(i) {
  const btnLike = document.getElementById(`icon-like-card${i}`);
  const txtLikes = document.getElementById(`likes-card${i}`);
  const btnDislike = document.getElementById(`icon-dislike-card${i}`);
  const txtDislikes = document.getElementById(`dislikes-card${i}`);
  const btnSave = document.getElementById(`icon-save-card${i}`);
  
  btnSave.classList.toggle("icon-save-checked", hobbys[i].saved);
  btnLike.classList.toggle("icon-like-checked", hobbys[i].liked);
  btnDislike.classList.toggle("icon-dislike-checked", hobbys[i].disliked);
  txtLikes.innerText = hobbys[i].likes;
  txtDislikes.innerText = hobbys[i].dislikes;
}
//#endregion

//#region CREATE CONTENT
function createNewComment(content) {
  if (localStorage.getItem("userName")) {
    currentUser = localStorage.getItem("userName");
  }
  return {
    userName: currentUser,
    commentContent: content,
  };
}

function getCommentButtons(i, commentIndex) { 
  if (hobbys[i].comments[commentIndex].userName === currentUser && currentUser != "[unknown user]") {
    return commentButtonsTemplate(i, commentIndex);
  }
  return "";
}
//#endregion

//#region LOCAL STORAGE
function saveToLocalStorage() {
  localStorage.setItem("hobbys", JSON.stringify(hobbys));
}

function getFromLocalStorage() {
  let storageArray = JSON.parse(localStorage.getItem("hobbys"));
  let storageUser = localStorage.getItem("userName");
  if (storageArray) hobbys = storageArray;
  if (storageUser) currentUser = storageUser;
}
//#endregion