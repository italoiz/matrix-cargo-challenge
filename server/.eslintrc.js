const path = require('path');

module.exports = {
  extends: ['@tsmonorepo/eslint-config/node'],
  parserOptions: {
    project: path.resolve(__dirname, 'tsconfig.json'),
  },
};
