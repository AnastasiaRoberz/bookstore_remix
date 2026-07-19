function cardTemplate(i, cardInfos) {
  return /*html*/ `
  <article class="card" id="card${i}">
    <h2>${hobbys[i].title}</h2>
    <hr>
    <div class="img-wrapper">
      <img class="hobby-img" src="./assets/pngs/${hobbys[i].imgName}" alt="${hobbys[i].alt}">
      <svg class="icon-save" onclick="saveCard(${i}, this)">
        <use href="./assets/icons/icons.svg#icon-save"></use>
      </svg>
    </div>
    <hr>
    <table class="infos" id="info-card${i}">${cardInfos}</table>
    <hr>
    <div class="bottom-section">
      ${likesTemplate(i)}
      <div class="open-comments">
        <p>
          ${hobbys[i].comments.length} Gleichgesinnte rechtfertigen hier ihre Fehlinvestitionen.
        </p>
        <button class="btn-open-comments" id="btn-dialog-card${i}" onclick="openDialog(${i})">Akte der Schande öffnen</button> 
      </div>
    </div>
  </article>
  `;
}

function infoTableTemplate(avgCosts, avgDuration, avgLevel) {
  return /*html*/ `
    
      <tr>
        <th>⌀ Dopamin-Steuer</th>
        <td>${avgCosts}</td>
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
      <div class="like">
        <svg class="icon-like" id="icon-like-card${i}" onclick="likeCard(${i}, 'like', this)">
          <use href="./assets/icons/icons.svg#icon-like"></use>
        </svg>
        <p class="like-number" id="likes-card${i}">${hobbys[i].likes}</p>
      </div>
      <div class="like">
        <svg class="icon-dislike" id="icon-dislike-card${i}" onclick="likeCard(${i}, 'dislike', this)">
          <use href="./assets/icons/icons.svg#icon-dislike"></use>
        </svg>
        <p class="dislike-number" id="dislikes-card${i}">${hobbys[i].dislikes}</p>
      </div>
    </div>
    `;
}

function getDialogTemplate(i, cardInfos, comments) {
  return /*html*/`
    <button class="icon-close" onclick="closeDialog()">
      <svg class="icon-close-svg">
        <use href="./assets/icons/icons.svg#icon-close"></use>
      </svg>
    </button>
    <div class="dialog-content" id="dialog-content${i}" onclick=event.stopPropagation()>
      <div class="content-left">
        <h2>${hobbys[i].title}</h2>
        <hr>
        <p class="description">${hobbys[i].description}</p>
        <hr>
        <table class="infos" id="info-card${i}">${cardInfos}</table>
        <hr>
          ${likesTemplate(i)}
      </div>

      <div class="content-right">
        <h3>Kommentare</h3>
        <div class="comments-wrapper" id="comments-wrapper">
          ${comments}
        </div>
        <div class="send-comment">
          <input type="text" class="send-comment-input" name="" id="send-comment-input${i}" placeholder="Hinterlasse auch eine Warnung">
            <svg class="send-comment-btn" onclick="addComment(${i})">
              <use href="./assets/icons/icons.svg#icon-send"></use>
            </svg>
        </div>
      </div>
    </div>
  `
}

function commentsTemplate(i, j) {
  return /*html*/`
    <article class="comment">
      <p class="user">${hobbys[i].comments[j].userName}</p>
      <p class="comment-content">${hobbys[i].comments[j].commentContent}</p>
      <table class="comment-table">
        <tr>
          <th>Dopamin-Steuer</th>
          <th>Lebenserwartung</th>
          <th>Euphorie-Level</th>
        </tr>
        <tr>
          <td>${hobbys[i].comments[j].costs}</td>
          <td>${hobbys[i].comments[j].duration}</td>
          <td>${hobbys[i].comments[j].euphoriaLevel}</td>
        </tr>
      </table>
    </article>
  `
}

function loginTemplate() {
  return /*html*/`
    <div class="login" id="login">
      <input
        type="text"
        id="user-input"
        placeholder="enter an username"
      />
      <button class="btn-add-user" onclick="addUser()">User speichern</button>
    </div>
  `
}

function welcomeTemplate(userName) {
  return /*html*/`
    <p>Willkommen ${userName}!</p>
  `
}
