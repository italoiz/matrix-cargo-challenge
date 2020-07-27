module.exports = {
  extends: [require.resolve('./base'), 'plugin:react/recommended', 'airbnb'],
  plugins: ['react', 'react-hooks'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'import/prefer-default-export': 'off',
  },
};
