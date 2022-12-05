const LottoGame = require('../models/LottoGame');
const { readBudget, readWinningNumbers } = require('../views/InputView');
const { printPurchasedLottos } = require('../views/OutputView');

class LottoGameController {
  #lottoGame;

  playGame() {
    readBudget(this.onReadBudget.bind(this));
  }

  onReadBudget(budget) {
    this.#lottoGame = new LottoGame(budget);
    printPurchasedLottos(this.#lottoGame.getPurchasedLottos());
    readWinningNumbers(this.onReadWinningNumbers.bind(this));
  }

  onReadWinningNumbers(winningNumbers) {
    this.#lottoGame.initWinningNumbers(winningNumbers);
  }
}

module.exports = LottoGameController;
