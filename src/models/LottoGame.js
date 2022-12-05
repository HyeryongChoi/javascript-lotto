const Player = require('./Player');
const Lotto = require('../Lotto');
const LottoValidator = require('../utils/LottoValidator');
const LottoMachine = require('./LottoMachine');
const { LOTTO } = require('../utils/constants');

class LottoGame {
  #player;
  #winningNumbers;
  #bonusNumber;

  constructor(budget) {
    this.#player = new Player(budget);
    this.issueLottos(this.#player.getLottoQuantity(LOTTO.price));
  }

  issueLottos(quantity) {
    const lottos = Array.from({ length: quantity }, () => {
      return new Lotto(LottoMachine.issue());
    });
    this.#player.buy(lottos);
  }

  getPurchasedLottos() {
    return Object.freeze(this.#player.getLottos());
  }

  initWinningNumbers(winningNumbers) {
    LottoValidator.validateWinningNumbersInput(winningNumbers);
    LottoValidator.validateWinningNumbers(winningNumbers.split(',').map(Number));
    this.#winningNumbers = winningNumbers.split(',').map(Number);
  }

  initBonusNumber(bonusNumber) {
    LottoValidator.validateBonusNumber(bonusNumber, Object.freeze(this.#winningNumbers));
    this.#bonusNumber = parseInt(bonusNumber, 10);
  }
}

module.exports = LottoGame;