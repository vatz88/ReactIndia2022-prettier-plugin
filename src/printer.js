const {
  builders: { join, line, group, indent },
} = require('prettier').doc;

module.exports = function printer(path, options, print) {
  const node = path.getValue();
  switch (node.type) {
    case 'ARRAY':
      return group([
        '[',
        indent([line, join([',', line], path.map(print, 'children'))]),
        line,
        ']',
      ]);
    case 'ELEMENT':
      return node.value;
    default:
      console.error('Unknown type');
      break;
  }
};
