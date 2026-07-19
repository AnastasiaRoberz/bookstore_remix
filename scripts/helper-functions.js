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

    for (let j = 0; j < hobbys[i].comments.length; j++) {
        sum += hobbys[i].comments[j][value];
    }

    return sum / hobbys[i].comments.length;
}

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
