const LottoGame = require('../models/LottoGame');
const { readBudget } = require('../views/InputView');
const { printPurchasedLottos } = require('../views/OutputView');

class LottoGameController {
  #lottoGame;

  playGame() {
    readBudget(this.onReadBudget.bind(this));
  }

  onReadBudget(budget) {
    this.#lottoGame = new LottoGame(budget);
    printPurchasedLottos(this.#lottoGame.getPurchasedLottos());
  }
}

module.exports = LottoGameController;
