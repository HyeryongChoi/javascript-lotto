const Budget = require('./Budget');
const Lotto = require('../Lotto');
const LottoMachine = require('./LottoMachine');
const { LOTTO } = require('../utils/constants');

class LottoGame {
  #budget;
  #lottos;

  constructor(money) {
    this.#budget = new Budget(money);
    this.buyLotto(this.#budget.getQuantity(LOTTO.price));
  }

  buyLotto(quantity) {
    this.#lottos = Array.from({ length: quantity }, () => {
      return new Lotto(LottoMachine.issue());
    });
  }
}

module.exports = LottoGame;
