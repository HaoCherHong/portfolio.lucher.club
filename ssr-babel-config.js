const isProd = process.env.NODE_ENV === 'production';

/**
 * @type {import('@babel/core'.PartialConfig)}
 */
module.exports = {
  presets: ['@babel/env', '@babel/react'],
  plugins: [
    ['@babel/plugin-transform-modules-commonjs'],
    [
      'css-modules-transform',
      {
        generateScopedName: isProd ? '[hash:base64]' : '[path][name]__[local]--[hash:base64:5]',
        camelCase: true,
      }
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      }
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
  ]
}