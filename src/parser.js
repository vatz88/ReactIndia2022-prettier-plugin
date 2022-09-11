module.exports = function parser(rqlString) {
  const array = rqlString
    .trim()
    .substring(1, rqlString.length - 1)
    .split(',')
    .map((el) => ({
      type: 'ELEMENT',
      value: el.trim(),
    }));

  return {
    type: 'ARRAY',
    children: array,
  };
};
