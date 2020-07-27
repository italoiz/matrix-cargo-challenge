module.exports = {
  extends: ['@tsmonorepo/eslint-config/react'],
  parserOptions: {
    project: path.resolve(__dirname, 'tsconfig.json'),
  },
};
