const LottoGame = require('../models/LottoGame');
const { readBudget } = require('../views/InputView');

class LottoGameController {
  #lottoGame;

  playGame() {
    readBudget(this.onReadBudget.bind(this));
  }

  onReadBudget(input) {
    this.#lottoGame = new LottoGame(input);
  }
}

module.exports = LottoGameController;
