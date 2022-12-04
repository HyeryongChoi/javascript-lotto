const Budget = require('./Budget');

class LottoGame {
  #budget;

  constructor(money) {
    this.#budget = new Budget(money);
  }
}

module.exports = LottoGame;
