// vue.config.js
const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '' : '',
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    // 移除 preload 插件
    config.plugins.delete('preload')
  },
  configureWebpack: config => {
    // 开发环境不需要gzip
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new CompressionWebpackPlugin({
          // 正在匹配需要压缩的文件后缀
          test: /\.(js|css|svg|woff|ttf|json|html)$/,
          // 大于10kb的会压缩
          threshold: 10240
          // 其余配置查看compression-webpack-plugin
          // deleteOriginalAssets: true // 删除原文件
          // minRatio:0.8, // 只有压缩率小于这个值的资源才会被处理
          // filename: '[path].gz[query]',
        })
      )
    }
    // 是否开启分析
    if (process.env.npm_config_report) {
      config.plugins.push(new BundleAnalyzerPlugin())
    }
  },

  transpileDependencies: [
    'vue-echarts',
    'resize-detector',
    'ep-ui'
  ],
  // pluginOptions: {
  //   dll: {
  //     // 入口配置
  //     entry: {
  //       // viewcss: ['./src/base/viewDesign.js'],
  //       viewDesign: ['view-design'],
  //       EPUI: ['ep-ui'],
  //       echarts: ['./src/base/echarts.js'],
  //       css: ['./src/base/css.js'],
  //       cryptoJs: ['./src/base/cryptoJs.js']
  //     },
  //     // 输出目录
  //     output: path.join(__dirname, './public/dll'),
  //     // 是否开启 DllReferencePlugin,
  //     // 默认情况下，插件没有检测到 vendor (执行 `npm run dll` 指令生成的 chunk 包)，会自动关闭。
  //     // 在有需要的情况下可以手动关闭插件，例如：
  //     // 1. 为了在开发环境使用vue代码中的提示，可配置只在生产环境开启分包模式，`open : process.env.NODE_ENV === 'production'`。
  //     // 2. 在构建目标(`target`)为 `node`，需要手动关闭 dll 插件。
  //     open: process.env.NODE_ENV === 'production',
  //     // open: true,

  //     // 自动注入到 index.html
  //     // 在执行 `dev` , `build` 等其他指令时，程序会自动将 `dll` 指令生成的 `*.dll.js` 等文件自动注入到 index.html 中。
  //     inject: true
  //   }
  // },

  productionSourceMap: false,

  css: {
    sourceMap: false,
    extract: true
  }
}
