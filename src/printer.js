module.exports = function printer(path, options, print) {
  return JSON.stringify(path.getValue());
};
