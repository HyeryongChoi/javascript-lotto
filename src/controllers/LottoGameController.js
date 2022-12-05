const LottoGame = require('../models/LottoGame');
const { readBudget, readWinningNumbers, readBonusNumber } = require('../views/InputView');
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
    readBonusNumber(this.onReadBonusNumber.bind(this));
  }

  onReadBonusNumber(bonusNumber) {
    this.#lottoGame.initBonusNumber(bonusNumber);
  }
}

module.exports = LottoGameController;
