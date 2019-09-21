module.exports = {
  trailingComma: 'es5',
  bracketSpacing: false,
  singleQuote: true,
  overrides: [
    {
      files: '*.json',
      options: {
        parser: 'json',
      },
    },
  ],
};
