const { readBudget } = require('../views/InputView');

class LottoGameController {
  playGame() {
    readBudget(this.onReadBudget.bind(this));
  }

  onReadBudget(input) {
    console.log(input);
  }
}

module.exports = LottoGameController;
