//#region BERECHNUNGEN
function roundNumber(value, digits) {
  let roundedNumber = value.toLocaleString("de-DE", {
    maximumFractionDigits: digits,
  });
  return roundedNumber;
}

function formatPrice(value) {
    let formattedPrice = value.toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR"
    });
    formattedPrice = formattedPrice.replace(/\s/, "");

    return formattedPrice;
}

function getAverage(i, value) {
    let sum = 0;
    let commentsLength = hobbys[i].comments.length;

    if (commentsLength === 0) {
      return 0;
    }

    for (let j = 0; j < commentsLength; j++) {
        sum += hobbys[i].comments[j][value];
    }

    return sum / commentsLength;
}

function renderInfoTable(i) {
  let avgCosts = formatPrice(getAverage(i, "costs"));
  let avgDuration = Math.trunc(getAverage(i, "duration"));
  let avgLevel = roundNumber(getAverage(i, "euphoriaLevel"), 1);

  return infoTableTemplate(avgCosts, avgDuration, avgLevel);
}
//#endregion

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

function updateLikesContent(i, btnSave, btnLike, btnDislike, txtLikes, txtDislikes) {
  if (btnSave) {
    btnSave.classList.toggle("icon-save-checked", hobbys[i].saved);
  }
  btnLike.classList.toggle("icon-like-checked", hobbys[i].liked);
  btnDislike.classList.toggle("icon-dislike-checked", hobbys[i].disliked);
  txtLikes.innerText = hobbys[i].likes;
  txtDislikes.innerText = hobbys[i].dislikes;
}

function getLikeElements(container) {
  let elements = {
    btnSave: container.querySelector(".icon-save"),
    btnLike: container.querySelector(".icon-like"),
    btnDislike: container.querySelector(".icon-dislike"),
    txtLikes: container.querySelector(".like-number"),
    txtDislikes: container.querySelector(".dislike-number")
  }
  return elements;
}
//#endregion

//#region CREATE CONTENT
function createNewComment(content) {
  let user = "[unknown user]";
  if (localStorage.getItem("userName")) {
    user = localStorage.getItem("userName");
  }
  return {
    userName: user,
    commentContent: content,
    costs: 68,
    duration: 30,
    euphoriaLevel: 6,
  };
}
//#endregion

//#region STORAGE & BUBBLING
function saveToLocalStorage() {
  localStorage.setItem("hobbys", JSON.stringify(hobbys));
}

function getFromLocalStorage() {
  let storageArray = JSON.parse(localStorage.getItem("hobbys"));
  if (storageArray) {
    hobbys = storageArray;
  }
}

function bubblingProtection(event) {
  event.stopPropagation();
}
//#endregion