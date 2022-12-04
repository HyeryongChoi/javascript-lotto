const { LOTTO, ERROR_MESSAGE } = require('../utils/constants');
const Validator = require('../utils/validator');

class Budget {
  #money;

  constructor(money) {
    this.#money = parseInt(money);
    this.validate(money);
  }

  validate(money) {
    if (
      !Validator.isNumeric(money) ||
      Validator.isZeroStart(money) ||
      !Validator.isDivisibleBy(money, LOTTO.price)
    ) {
      throw new Error(ERROR_MESSAGE.invalidBudget);
    }
  }

  getQuantity(unit) {
    return parseInt(this.#money / unit);
  }
}

module.exports = Budget;
