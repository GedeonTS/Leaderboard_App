import './index.css';
import generator from './modules/generator.js';
import Wrapper from './modules/wrapper.js';

Wrapper();

const userName = document.querySelector('.name');
const userScore = document.querySelector('.score');
const submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', () => {
  const player = { user: userName.value, score: userScore.value };
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2icO0AI1TEzSpK5Ba06T/scores/', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(player),
  }).then((res) => {
    if (res.ok) {
      userName.value = '';
      userScore.value = '';
      return res.json();
    }
    throw new Error('Empty request');
  });
});

async function digest() {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2icO0AI1TEzSpK5Ba06T/scores/');
  response.json().then((expected) => {
    const results = expected.result;
    generator(results);
  });
}

digest();

const refresh = document.getElementById('refresh');
refresh.addEventListener('click', () => {
  digest();
  location.reload();
});
