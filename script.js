function calcAvgCosts(i) {
  let sumCosts = 0;
  let counter = 0;
  let avgCosts = 0;

  for (let j = 0; j < hobbys[i].comments.length; j++) {
    sumCosts = sumCosts + hobbys[i].comments[j].costs;
    counter++;
  }
  avgCosts = sumCosts / counter;
  avgCosts = formatPrice(avgCosts);
  return avgCosts;
}

function calcAvgDuration(i) {
  let sumDuration = 0;
  let counter = 0;
  let avgDuration = 0;

  for (let j = 0; j < hobbys[i].comments.length; j++) {
    if (hobbys[i].comments[j].duration > 0) {
      sumDuration = sumDuration + hobbys[i].comments[j].duration;
      counter++;
    }
  }
  avgDuration = sumDuration / counter;
  avgDuration = Math.trunc(avgDuration);
  return avgDuration;
}

function calcAvgEuphoriaLevel(i) {
  let sumLevel = 0;
  let counter = 0;
  let avgLevel = 0;

  for (let j = 0; j < hobbys[i].comments.length; j++) {
    sumLevel = sumLevel + hobbys[i].comments[j].euphoriaLevel;
    counter++;
  }
  avgLevel = sumLevel / counter;
  avgLevel = roundNumber(avgLevel, 1);
  return avgLevel;
}

function renderInfoTable(i) {
  let avgCosts = calcAvgCosts(i);
  let avgDuration = calcAvgDuration(i);
  let avgLevel = calcAvgEuphoriaLevel(i);
  let infoContent = "";

  infoContent = infoTableTemplate(
    avgCosts,
    avgDuration,
    avgLevel,
  );

  return infoContent;
}

function renderCard() {
  const cardWrapperRef = document.getElementById("card-wrapper");

  for (let i = 0; i < hobbys.length; i++) {
    const cardInfos = renderInfoTable(i);
    cardWrapperRef.innerHTML += cardTemplate(i, cardInfos);
    initialLikeStatus(i);
  }
}

function initialLikeStatus(i) {
    let btnLike = document.getElementById(`icon-like-card${i}`);
    let btnDislike = document.getElementById(`icon-disliked-card${i}`); 

    if (hobbys[i].liked === true) {
      btnLike.classList.add("icon-like-checked");
    } else if (hobbys[i].disliked === true) {
      btnDislike.classList.add("icon-dislike-checked");
    }
}