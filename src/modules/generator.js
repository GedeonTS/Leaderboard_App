const generator = (partcipants) => {
  partcipants.forEach((a) => {
    let back;
    if (partcipants.indexOf(a) % 2 !== 0) {
      back = 'grey';
    } else {
      back = 'white';
    }
    const content = document.getElementById('content');
    content.innerHTML += `<div class="score ${back}" id=${partcipants.indexOf(a)}> ${a.user} : ${a.score}</div>`;
  });
};

export default generator;