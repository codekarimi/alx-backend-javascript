export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = amount;

    if (typeof currency !== 'object') {
      throw new TypeError('currency must be an object');
    }
    this._currency = currency;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be an number');
    }
    this._amount = amount;
  }

  set currency(currency) {
    if (typeof currency !== 'object') {
      throw new TypeError('currency must be an object');
    }
    this._code = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
