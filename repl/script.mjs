const prettier = require('prettier');
const plugin = require('../index');
const rqlTokenizer = require('../src/tokenizer');
const rqlParser = require('../src/parser');
const colorize = require('./colorize').default;

function formatRql(rqlText) {
  return prettier.format(rqlText, {
    parser: 'rql-parse',
    plugins: [plugin],
  });
}

document.getElementById('btn-formatRql').addEventListener('click', function () {
  const rqlText = document.getElementById('rql-string').value;

  const tokenizedRql = rqlTokenizer(rqlText);
  document.getElementById('tokenized-rql').innerHTML = JSON.stringify(
    tokenizedRql,
    null,
    4
  );

  const rqlAST = rqlParser(rqlText);
  document.getElementById('ast-rql').innerHTML = JSON.stringify(
    rqlAST,
    null,
    4
  );

  const formattedRql = formatRql(rqlText);
  document.getElementById('formatted-rql').innerHTML = colorize(formattedRql);
});
