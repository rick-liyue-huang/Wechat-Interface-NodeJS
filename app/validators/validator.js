
// store the validators methods
const { LinValidator, Rule } = require('../../core/lin-validator');

class PositiveIntergerValidator extends LinValidator {
  constructor() {
    // super();
    this.id = [ // && relation for multiple rules
      new Rule('isInt', ' need positive integer', {min: 1})
    ]
  }
}

module.exports = {
  PositiveIntergerValidator
}