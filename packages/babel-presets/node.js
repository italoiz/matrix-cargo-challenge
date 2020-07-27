module.exports = () => ({
  presets: [
    [
      require('@babel/preset-env'),
      { 
        targets: {
          node: 'current'
        }
      }
    ],
    require('@babel/preset-typescript'),
  ],
  plugins: [
    [require('babel-plugin-module-resolver'), {
      alias: {
        '#': './src',
      },
    }],
    require('babel-plugin-transform-typescript-metadata'),
    [require('@babel/plugin-proposal-decorators'), { legacy: true }],
    [require('@babel/plugin-proposal-class-properties'), { loose: true }],
  ]
});
