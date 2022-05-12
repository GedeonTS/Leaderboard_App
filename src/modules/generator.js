import medal from '../images/trophy.png';

const generator = (partcipants) => {
  partcipants.forEach((a) => {
    let back;
    if (partcipants.indexOf(a) % 2 !== 0) {
      back = 'grey';
    } else {
      back = 'white';
    }
    const content = document.getElementById('content');
    content.innerHTML += `<div class="Board ${back}" id=${partcipants.indexOf(a)}><div class="itemId"><img src=${medal} class="img"><div class="itemId">${a.user} :</div></div class="itemId"><div class="itemId">  ${a.score}</div class="itemId"></div>`;
  });
};

export default generator;