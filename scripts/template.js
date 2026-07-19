function cardTemplate(i, cardInfos) {
  return /*html*/ `
  <article class="card" id="card${i}">
    <h2>${hobbys[i].title}</h2>
    <hr>
    <div class="img-wrapper">
      <img class="hobby-img" src="./assets/pngs/${hobbys[i].imgName}" alt="${hobbys[i].alt}">
      <svg class="icon-save" onClick="saveCard()">
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
        <button class="btn-open-comments" id="btn-dialog-card${i}" onClick="openDialog(${i}, 'dialog')">Akte der Schande öffnen</button> 
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
        <svg class="icon-like" id="icon-like-card${i}" onclick="likeCard(${i})">
          <use href="./assets/icons/icons.svg#icon-like"></use>
        </svg>
        <p class="like-number" id="likes-card${i}">${hobbys[i].likes}</p>
      </div>
      <div class="like">
        <svg class="icon-dislike" id="icon-disliked-card${i}" onclick="dislikeCard(${i})">
          <use href="./assets/icons/icons.svg#icon-dislike"></use>
        </svg>
        <p class="dislike-number" id="dislikes-card${i}">${hobbys[i].dislikes}</p>
      </div>
    </div>
    `;
}