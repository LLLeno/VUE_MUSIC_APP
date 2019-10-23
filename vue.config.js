module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/styles/variables.sass";'
      }
    }
  },
  devServer: {
    proxy: 'http://localhost:3000',
    compress: true,
    open: true
  },
  transpileDependencies: [
    'vuetify'
  ]
}
