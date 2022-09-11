module.exports = function parser(rqlString) {
  const array = rqlString
    .trim()
    .substring(1, rqlString.length - 1)
    .split(',')
    .map((el) => ({
      type: 'element',
      value: el,
    }));

  return {
    type: 'ARRAY',
    children: array,
  };
};
