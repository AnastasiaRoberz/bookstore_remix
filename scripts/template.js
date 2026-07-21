//#region HEADER-TEMPLATES
function loginTemplate() {
  return /*html*/ `
    <input
      type="text"
      class="user-name-input"
      id="user-input"
      placeholder="Dein Username"
      onkeydown="if(event.key === 'Enter') addUser()"
    />
    <button class="add-user" onclick="addUser()">
      <span class="add-user-text">User speichern</span>
      <svg class="add-user-btn">
        <use href="./assets/icons/icons.svg#icon-save-user"></use>
      </svg>
    </button>
  `;
}

function welcomeTemplate(userName) {
  return /*html*/ `
    <p>Willkommen ${userName}!</p>
  `;
}
//#endregion

function cardTemplate(i, cardInfos, cardComments) {
  return /*html*/ `
  <article class="card" id="card${i}">
    <h2 class="card-heading">${hobbys[i].title}</h2>
    <hr>
    <img class="hobby-img" src="./assets/pngs/${hobbys[i].imgName}" alt="${hobbys[i].alt}">
    <hr>
    ${cardInfos}
    <hr>
    ${likesTemplate(i)}
    <h3>Kommentare</h3>
    <div class="comments-wrapper" id="comments-wrapper-card${i}">
      ${cardComments}
    </div>
    <div class="send-comment">
      <input type="text" class="send-comment-input" name="" id="send-comment-input${i}" placeholder="Hinterlasse auch eine Warnung" onkeydown="if(event.key === 'Enter') addComment(${i})">
      <svg class="send-comment-btn" onclick="addComment(${i}, )">
        <use href="./assets/icons/icons.svg#icon-send"></use>
      </svg>
    </div>
  </article>
  `;
}

//#region CARD TEMPLATE PARTS
function infoTableTemplate(avgCosts, avgDuration, avgLevel) {
  return /*html*/ `
    <table class="infos">
      <tr>
        <th>⌀ Dopamin-Steuer</th>
        <td>${avgCosts}€</td>
      </tr>
      <tr>
        <th>⌀ Fokus-Dauer</th>
        <td>${avgDuration} Tage</td>
      </tr>
      <tr>
        <th>⌀ Euphorie-Level</th>
        <td>${avgLevel} / 10</td>
      </tr>
    </table>
  `;
}

function likesTemplate(i) {
  return /*html*/ `
    <div class="likes-wrapper">
      <div class="like-buttons">
        <div class="like">
          <svg class="icon-like" id="icon-like-card${i}" onclick="likeCard(${i}, 'like')">
            <use href="./assets/icons/icons.svg#icon-like"></use>
          </svg>
          <p class="like-number" id="likes-card${i}">${hobbys[i].likes}</p>
        </div>
        <div class="like">
          <svg class="icon-dislike" id="icon-dislike-card${i}" onclick="likeCard(${i}, 'dislike')">
            <use href="./assets/icons/icons.svg#icon-dislike"></use>
          </svg>
          <p class="dislike-number" id="dislikes-card${i}">${hobbys[i].dislikes}</p>
        </div>
      </div>
      <div class="save">
        <svg class="icon-save" id="icon-save-card${i}" onclick="saveCard(${i}, this)">
          <use href="./assets/icons/icons.svg#icon-save"></use>
        </svg>
      </div>
    </div>
  `;
}

function commentTemplate(comment, commentButtons) {
  return /*html*/ `
    <article class="comment">
      <div class="comment-infos">
        <p class="user">${comment.userName}</p>
        ${commentButtons}
      </div>
      <p class="comment-content">${comment.commentContent}</p>
    </article>
  `;
}

function commentButtonsTemplate(i, commentIndex) {
  return /*html*/`
    <div class=comment-buttons>
      <svg class="btn-comment-actions" onclick="editComment(${i}, ${commentIndex})">
        <use href="./assets/icons/icons.svg#icon-edit"></use>
      </svg>  
      <svg class="btn-comment-actions" onclick="deleteComment(${i}, ${commentIndex})">
        <use href="./assets/icons/icons.svg#icon-trash"></use>
      </svg>
    </div>
  `
}
//#endregion