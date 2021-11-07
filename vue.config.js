const path = require('path')

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

    config.plugin('define').tap(args => {
      args[0]['process.env']['NODE_ANALYTICS'] = '"development"'
      args[0].meta = {
        viewport: 'width=device-width,initial-scale=1,user-scalable=no'
      }
      args[0].inject = true
      args[0].filename = 'index.html'
      args[0].favicon = './public/favicon.ico'
      return args
    })
  },
  css: {
    sourceMap: process.env.NODE_ENV !== 'production'
  },
  productionSourceMap: process.env.NODE_ENV !== 'production',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
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
