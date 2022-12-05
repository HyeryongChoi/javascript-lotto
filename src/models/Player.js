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

  getRankCount(winningNumbers, bonusNumber) {
    const rankCount = Array.from({ length: LOTTO.prize.length }, () => 0);
    this.#lottos.forEach((lotto) => {
      const matchCount = lotto.match(winningNumbers);
      const hasBonus = lotto.hasBonusNumber(bonusNumber);
      if (matchCount >= LOTTO.three) rankCount[this.matchWithRank(matchCount, hasBonus)] += 1;
    });
    return rankCount;
  }

  matchWithRank(count, hasBonus) {
    if (count === LOTTO.six) return LOTTO.first;
    if (count === LOTTO.five && hasBonus) return LOTTO.second;
    if (count === LOTTO.five && !hasBonus) return LOTTO.third;
    if (count === LOTTO.four) return LOTTO.fourth;
    if (count === LOTTO.three) return LOTTO.fifth;
  }

  getRateOfReturn(rankCount) {
    let totalPrize = 0;
    LOTTO.prize.forEach((value, index) => {
      totalPrize += rankCount[index] * value;
    });
    const rateOfReturn = Number(((totalPrize / this.#budget) * 100).toFixed(1));
    return rateOfReturn;
  }
}

module.exports = Player;
