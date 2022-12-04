const Budget = require('./Budget');

class LottoGame {
  #budget;

  createBudget(input) {
    this.#budget = new Budget(input);
  }
}

module.exports = LottoGame;
