const input = document.querySelector('input');

const outputs = {
  lower: document.querySelector('#lowercase span'),
  upper: document.querySelector('#uppercase span'),
  camel: document.querySelector('#camelcase span'),
  pascal: document.querySelector('#pascalcase span'),
  snake: document.querySelector('#snakecase span'),
  kebab: document.querySelector('#kebabcase span'),
  trimmed: document.querySelector('#trim span'),
};

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const toCamelCase = str => {
  return str
    .toLowerCase()
    .split(/\s+/)
    .map((word, i) => (i === 0 ? word : capitalize(word)))
    .join('');
};

const toPascalCase = str => {
  return str
    .toLowerCase()
    .split(/\s+/)
    .map(capitalize)
    .join('');
};

const toSnakeCase = str => str.toLowerCase().replace(/\s+/g, '_');

const toKebabCase = str => str.toLowerCase().replace(/\s+/g, '-');

const removeSpaces = str => str.replace(/\s+/g, '');

function updateScreen() {
  const text = input.value.trim();

  outputs.lower.textContent = text.toLowerCase();
  outputs.upper.textContent = text.toUpperCase();
  outputs.camel.textContent = toCamelCase(text);
  outputs.pascal.textContent = toPascalCase(text);
  outputs.snake.textContent = toSnakeCase(text);
  outputs.kebab.textContent = toKebabCase(text);
  outputs.trimmed.textContent = removeSpaces(text);
}

updateScreen();
input.addEventListener('input', updateScreen);
