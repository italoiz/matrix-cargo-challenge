module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: [
      require('@babel/preset-env'),
      require('@babel/preset-react'),
      require('@babel/preset-typescript'),
    ],
    plugins: [
      require('@babel/plugin-transform-runtime'),
      ...(!api.env('production') && ['react-refresh/babel'] ),
    ]
  }
}
