const LottoGame = require('../models/LottoGame');
const { readBudget } = require('../views/InputView');
const { printPurchasedLotto } = require('../views/OutputView');

class LottoGameController {
  #lottoGame;

  playGame() {
    readBudget(this.onReadBudget.bind(this));
  }

  onReadBudget(input) {
    this.#lottoGame = new LottoGame(input);
    printPurchasedLotto(this.#lottoGame.getLottos());
  }
}

module.exports = LottoGameController;
