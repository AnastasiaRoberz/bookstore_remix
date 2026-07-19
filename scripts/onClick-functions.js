function likeCard(i) {
  let statusLiked = hobbys[i].liked;
  let statusDisliked = hobbys[i].disliked;

  let buttonLike = document.getElementById(`icon-like-card${i}`);
  let buttonDislike = document.getElementById(`icon-disliked-card${i}`);

  let likes = document.getElementById(`likes-card${i}`);
  let dislikes = document.getElementById(`dislikes-card${i}`);

  if (statusLiked === false) {
    hobbys[i].liked = true;
    buttonLike.classList.add("icon-like-checked");
    hobbys[i].likes = hobbys[i].likes + 1;
    likes.innerText = hobbys[i].likes;

    if (statusDisliked === true) {
      hobbys[i].disliked = false;
      buttonDislike.classList.remove("icon-dislike-checked");
      hobbys[i].dislikes = hobbys[i].dislikes - 1;
      dislikes.innerText = hobbys[i].dislikes;
    }
  } else {
    hobbys[i].liked = false;
    buttonLike.classList.remove("icon-like-checked");
    hobbys[i].likes = hobbys[i].likes - 1;
    likes.innerText = hobbys[i].likes;
  }
}

function dislikeCard(i) {  
  let statusLiked = hobbys[i].liked;
  let statusDisliked = hobbys[i].disliked;

  let buttonLike = document.getElementById(`icon-like-card${i}`);
  let buttonDislike = document.getElementById(`icon-disliked-card${i}`);

  let likes = document.getElementById(`likes-card${i}`);
  let dislikes = document.getElementById(`dislikes-card${i}`);

  if (statusDisliked === false) {
    hobbys[i].disliked = true;
    buttonDislike.classList.add("icon-dislike-checked");
    hobbys[i].dislikes = hobbys[i].dislikes + 1;
    dislikes.innerText = hobbys[i].dislikes;

    if (statusLiked === true) {
      hobbys[i].liked = false;
      buttonLike.classList.remove("icon-like-checked");
      hobbys[i].likes = hobbys[i].likes - 1;
      likes.innerText = hobbys[i].likes;
    }
  } else {
    hobbys[i].disliked = false;
    buttonDislike.classList.remove("icon-dislike-checked");
    hobbys[i].dislikes = hobbys[i].dislikes - 1;
    dislikes.innerText = hobbys[i].dislikes;
  }
}