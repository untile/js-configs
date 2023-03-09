
/**
 * Export babel configuration.
 */

module.exports = {
  plugins: [
    ['module-resolver', {
      alias: {
        test: './test'
      },
      root: ['./src']
    }]
  ],
  presets: [
    '@babel/preset-env'
  ]
};
