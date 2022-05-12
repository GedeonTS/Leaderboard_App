import trophy from '../images/scoreIcone.png';

const Wrapper = () => {
  document.body.innerHTML = `<section id="container" class="container">
    <div class="header"><h1>Leaderboard</h1><img class="trophy" src="${trophy}"></div>
    <section class="wrapper">
    <section class="input-section"><h2 class="add">Add your score</h2><input type="text" placeholder="your name" class="name">
    <input type="number" placeholder="your score" class="score"><button type="submit" class="submit">submit</button></section>
    <section class="output-section"><div class="content-header"><h2>Recent Scores</h2><button class="refresh" id="refresh">Refresh</button></div><hr><div id="content" class="content"></div></h2></section>

    </section></section>`;
};

export default Wrapper;