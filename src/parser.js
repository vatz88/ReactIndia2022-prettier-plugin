const tokenizeRQL = require('./tokenizer');

module.exports = function parser(rqlString) {
  const tokenizedRQL = tokenizeRQL(rqlString);
  const parsedNodes = rqlTokensToAST(tokenizedRQL);
  return {
    type: 'PROGRAM',
    children: parsedNodes,
  };
};

/**
 * @param {string} rqlString
 * @return {object} rqlAST
 */
function rqlTokensToAST(tokenizedRQL) {
  const nodes = [];

  for (let index = 0; index < tokenizedRQL.length; index++) {
    const token = tokenizedRQL[index];
    switch (token.type) {
      case 'FUNCTION': {
        const childrenStartIndex = index + 1;
        const childrenEndIndex = tokenizedRQL.findIndex(
          ({ type: t, value: v }, i) => v === ')' && i > childrenStartIndex
        );
        const children = tokenizedRQL.slice(
          childrenStartIndex,
          childrenEndIndex + 1
        );
        nodes.push({
          type: token.type,
          value: token.value,
          children: rqlTokensToAST(children),
        });
        index = childrenEndIndex;
        break;
      }
      case 'OPERATOR': {
        nodes.push({
          type: token.type,
          value: token.value,
        });
        break;
      }
      case 'CONSTANT':
      case 'VARIABLE': {
        nodes.push({
          type: token.type,
          value: token.value,
        });
        break;
      }
      case 'SYMBOL': {
        if (token.value === '[' || token.value === '(') {
          const isArray = token.value === '[';
          const childrenStartIndex = index;
          const childrenEndIndex = tokenizedRQL.findIndex(
            ({ type: t, value: v }, i) =>
              v === (isArray ? ']' : ')') && i > childrenStartIndex
          );
          const children = tokenizedRQL.slice(
            childrenStartIndex + 1,
            childrenEndIndex
          );
          nodes.push({
            type: isArray ? 'ARRAY' : 'EXPRESSION',
            children: rqlTokensToAST(children),
          });
          index = childrenEndIndex;
        }
        break;
      }
      default:
        nodes.push({
          type: token.type,
          value: token.value,
        });
        break;
    }
  }
  return nodes;
}
