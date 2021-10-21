const path = require('path')
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/sever-zoe/'
    : '/',
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')

    config.plugin('define').tap(definitions => {
      definitions[0]['process.env']['NODE_ANALYTICS'] = '"development"'
      return definitions
    })
  },
  css: {
    sourceMap: process.env.NODE_ENV !== 'production'
  },
  productionSourceMap: process.env.NODE_ENV !== 'production',
  configureWebpack: {
    plugins: [
      new ImageminWebpWebpackPlugin({
          config: [{
            test: /\.(jpe?g|png)/,
            options: {
              quality: 75
            }
          }],
          overrideExtension: true,
          detailedLogs: false,
          silent: false,
          strict: true
        }
      )
    ]
  }
}

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styles/imports.styl')
      ]
    })
}
