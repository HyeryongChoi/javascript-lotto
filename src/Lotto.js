const { LOTTO, ERROR_MESSAGE } = require('./utils/constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== LOTTO.size) {
      throw new Error(ERRORMESSAGE.invalidLotto);
    }
  }

  // TODO: 추가 기능 구현
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
