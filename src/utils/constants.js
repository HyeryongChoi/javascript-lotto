const INPUT_MESSAGE = Object.freeze({
  enterBudget: '구입금액을 입력해 주세요.\n',
});

const ERROR_MESSAGE = Object.freeze({
  invalidBudget: '[ERROR] 로또 구입 금액은 1,000원 단위로 입력해야 합니다.',
});

const LOTTO = Object.freeze({
  price: 1000,
});

module.exports = {
  INPUT_MESSAGE,
  ERROR_MESSAGE,
  LOTTO,
};
