const LottoGame = require('../models/LottoGame');
const { readBudget } = require('../views/InputView');

class LottoGameController {
  #lottoGame;

  playGame() {
    this.#lottoGame = new LottoGame();
    readBudget(this.onReadBudget.bind(this));
  }

  onReadBudget(input) {
    this.#lottoGame.createBudget(input);
  }
}

module.exports = LottoGameController;
