module.exports={
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import '@/assets/css/variables.scss';`
      },
      scss: {
        additionalData: `@import '@/assets/css/variables.scss';`
      },
    }
  },
  productionSourceMap:false,
  devServer: {
    port:3200,
  }
}