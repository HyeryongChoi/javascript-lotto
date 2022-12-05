const Player = require('./Player');
const Lotto = require('../Lotto');
const LottoMachine = require('./LottoMachine');
const { LOTTO } = require('../utils/constants');

class LottoGame {
  #player;

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
}

module.exports = LottoGame;
