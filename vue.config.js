const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录，默认是 'dist'
  // outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录，默认是 ''
  // assetsDir: '',
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  // indexPath: 'index.html',
  // filenameHashing: true,
  // lintOnSave: 'default',
  //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
  // configureWebpack: {},
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  /* 注意sass，scss，less的配置 */
  css: {
    loaderOptions: {
      // sass: {
      //   prependData: `@import "~@/assets/name.scss";`
      // },
      scss: {
        prependData: `
        @import "./src/scss/helpers/_mixins.scss";
        `
      },
      // less:{
      //   globalVars: {
      //     primary: '#fff'
      //   }
      // }
    }, // Enable CSS modules for all css / pre-processor files. // This option does not affect *.vue files.
  },
  // chainWebpack: config => {
  //   config.devServer
  //     .host('0.0.0.0')
  //     .port(8080)
  //     .disableHostCheck(true);
  // },
  devServer: {
    open: false,
    host: 'localhost',
    port: 8080,
    https: false,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {  //配置跨域
      '/posts': {
        target: 'https://jsonplaceholder.typicode.com/posts/',  //这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: true,
        changOrigin: true,  //允许跨域
        pathRewrite: {
          '^/posts': ''  //请求的时候使用这个api就可以
        }
      }
    }
  },
  // 以下是pwa配置
  // pwa: {
  //   iconPaths: {
  //     favicon32: 'favicon.ico',
  //     favicon16: 'favicon.ico',
  //     appleTouchIcon: 'favicon.ico',
  //     maskIcon: 'favicon.ico',
  //     msTileImage: 'favicon.ico'
  //   }
  // }
};
