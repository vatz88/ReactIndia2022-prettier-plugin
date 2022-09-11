const FUNCTIONS = new Set(['SELECT']);
const SYMBOLS = new Set(['(', ')', '[', ']', ' ', ',', "'", '"', '\n', '\t']);
const OPERATORS = new Set(['>', '<', '-', '+', '=']);

module.exports = { FUNCTIONS, SYMBOLS, OPERATORS };
