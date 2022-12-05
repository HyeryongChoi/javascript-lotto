const { LOTTO, ERROR_MESSAGE } = require('../utils/constants');
const Validator = require('../utils/validator');

class Player {
  #budget;
  #lottos;

  constructor(budget) {
    this.#budget = parseInt(budget, 10);
    this.validate(budget);
  }

  validate(budget) {
    if (
      !Validator.isNumeric(budget) ||
      Validator.isZeroStart(budget) ||
      !Validator.isDivisibleBy(budget, LOTTO.price)
    ) {
      throw new Error(ERROR_MESSAGE.invalidBudget);
    }
  }

  getLottoQuantity(price) {
    return parseInt(this.#budget / price, 10);
  }

  buy(lottos) {
    this.#lottos = lottos;
  }

  getLottos() {
    return Object.freeze(this.#lottos);
  }
}

module.exports = Player;
