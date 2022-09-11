const prettier = require('prettier');
const plugin = require('../index');
const colorize = require('./colorize').default;

function formatRql(rqlText) {
  return prettier.format(rqlText, {
    parser: 'rql-parse',
    plugins: [plugin],
  });
}

document.getElementById('btn-formatRql').addEventListener('click', function () {
  const rqlText = document.getElementById('rql-string').value;

  const formattedRql = formatRql(rqlText);
  document.getElementById('formatted-rql').innerHTML = colorize(formattedRql);
});
