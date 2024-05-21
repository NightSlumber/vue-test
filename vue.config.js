const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js'
    }
  },
  lintOnSave: false,  // 关闭语法检查

  // 开启代理服务器一
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  // 开启代理服务器二
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite: {
          '^/api' : ''
        },
        ws: true,
        changeOrigin: true
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: {
          '^/demo' : ''
        },
        ws: true,
        changeOrigin: true
      }
    }
  }
})
