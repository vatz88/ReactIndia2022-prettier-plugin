const { FUNCTIONS, SYMBOLS, OPERATORS } = require('./constants');

module.exports = function tokenizeRQL(rqlString) {
  let rqlStringChars = rqlString.split('');
  rqlStringChars = rqlStringChars.map((el) => el.replace('\\', '')); // replace any escape char
  const tokenizedRql = [];
  let currentWord = '';
  let isConstant = false;
  for (char of rqlStringChars) {
    if (SYMBOLS.has(char) || OPERATORS.has(char)) {
      if (currentWord.length > 0) {
        tokenizedRql.push({
          type: isConstant ? 'CONSTANT' : 'VARIABLE',
          value: currentWord,
        });
        currentWord = '';
      }
      if (char === "'" || char === `"`) {
        isConstant = !isConstant;
      }
    }

    currentWord += char;

    if (FUNCTIONS.has(currentWord)) {
      tokenizedRql.push({ type: 'FUNCTION', value: currentWord });
      currentWord = '';
      continue;
    }
    if (SYMBOLS.has(currentWord)) {
      tokenizedRql.push({ type: 'SYMBOL', value: currentWord });
      currentWord = '';
      continue;
    }
    if (OPERATORS.has(currentWord)) {
      tokenizedRql.push({ type: 'OPERATOR', value: currentWord });
      currentWord = '';
      continue;
    }
  }

  return tokenizedRql;
};
