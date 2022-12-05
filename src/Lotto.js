const { LOTTO, ERROR_MESSAGE } = require('./utils/constants');
const LottoValidator = require('./utils/LottoValidator');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    LottoValidator.validateLotto(numbers);
  }

  getNumbers() {
    return Object.freeze(this.#numbers);
  }

  match(winningNumbers) {
    let matchCount = 0;
    this.#numbers.forEach((num) => {
      if (winningNumbers.has(num)) matchCount += 1;
    });
    return matchCount;
  }

  hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

module.exports = Lotto;
