const LottoGameController = require('./controllers/LottoGameController');

class App {
  #lottoGameController;

  play() {
    this.#lottoGameController = new LottoGameController();
    this.#lottoGameController.playGame();
  }
}

const app = new App();
app.play();

module.exports = App;
