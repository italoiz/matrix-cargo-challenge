module.exports = {
  extends: ['plugin:react/recommended', 'airbnb', require.resolve('./base')],
  plugins: ['react', 'jsx-a11y', 'react-hooks'],
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
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'react/jsx-one-expression-per-line': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
      },
    },
    'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
  },
};
