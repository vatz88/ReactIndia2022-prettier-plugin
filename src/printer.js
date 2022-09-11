const {
  builders: { join, line, group, softline, indent },
} = require('prettier').doc;

module.exports = function printer(path, options, print) {
  const node = path.getValue();

  switch (node.type) {
    case 'PROGRAM':
    case 'EXPRESSION':
      return group(join([',', line], path.map(print, 'children')));
    case 'FUNCTION':
      return group([
        node.value,
        ' ',
        '(',
        indent([line, join([',', line], path.map(print, 'children'))]),
        softline,
        ')',
      ]);
    case 'CONSTANT':
      return '"' + node.value + '"';
    case 'VARIABLE':
      return node.value;
    case 'ARRAY':
      return group([
        '[',
        indent([line, join([',', line], path.map(print, 'children'))]),
        line,
        ']',
      ]);
    default:
      console.log('Unkown type', node.type);
      return '';
  }
};
