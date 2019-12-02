const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  productionSourceMap: false,
  // publicPath: './',
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-vertical-table/' : './',
  configureWebpack: config => {
    const plugins = [
      new TerserPlugin({
        terserOptions: {
          compress: {
            warnings: false,
            drop_debugger: false,
            drop_console: true
          }
        },
        sourceMap: false,
        parallel: true
      })
    ]
    if (process.env.NODE_ENV !== 'development') {
      config.plugins = [...config.plugins, ...plugins]
    }
  }
}
