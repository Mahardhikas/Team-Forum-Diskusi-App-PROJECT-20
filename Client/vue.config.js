// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  devServer: {
    port: 8082,
    proxy: 'http://localhost:8081', // Proxy ke server backend Anda
  },
};
