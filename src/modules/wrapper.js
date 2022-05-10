const Wrapper = () => {
  document.body.innerHTML = `<section class="container">
    <h1>Leaderboard</h1>
    <section class="wrapper">
    <section class="output-section"><div class="content-header"><h2>Recent Scores</h2><button class="refresh">Refresh</button></div><div id="content" class="content"></div></h2></section>
    <section class="input-section"><h2 class="add">Add your score</h2><input type="text" placeholder="your name">
    <input type="text" placeholder="your score"><button type="submit" class="refresh submit">submit</button></section>
    </section></section>`;
};

export default Wrapper;