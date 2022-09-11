const parser = require('./src/parser');
const printer = require('./src/printer');

const languages = [
  {
    name: 'rql',
    extensions: ['.rql'],
    parsers: ['rql-parse'],
  },
];

const parsers = {
  'rql-parse': {
    parse: parser,
    astFormat: 'rql-ast',
  },
};

const printers = {
  'rql-ast': {
    print: printer,
  },
};

const defaultOptions = {
  // useTabs: true,
  // tabWidth: 4,
};

module.exports = {
  languages,
  parsers,
  printers,
  defaultOptions,
};
