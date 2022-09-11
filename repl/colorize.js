import rqlTokenizer from '../src/tokenizer';

export default function colorize(rqlString) {
  const tokenizedRql = rqlTokenizer(rqlString);
  return tokenizedRql
    .map((token) => `<span class="${token.type}">${token.value}</span>`)
    .join('');
}
