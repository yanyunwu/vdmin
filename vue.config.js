const TerserPlugin = require("terser-webpack-plugin");

const port = process.env.port || 80;
const outputDir = process.env.outputDir + "/" + process.env.outFileName + "-" + process.env.version;
const IS_PRODUCTION = process.env.NODE_ENV === "production";
const BASE_API = process.env.VUE_APP_BASE_API;

module.exports = {
  // 设置打包目录
  outputDir: outputDir,
  // 设置静态资源的存储(相对于打包目录)
  assetsDir: "static",
  // 模式node_modules里的高级语法不编译，在这里设置允许编译
  // transpileDependencies: ["vuetify"],
  // 动态设置打包地址
  publicPath: IS_PRODUCTION ? "./" : "/",

  // 设置代理以可以跨域请求
  devServer: {
    host: "0.0.0.0",
    // 设置本地代理端口
    port: port,
    // 设置是否自动打开浏览器
    open: true,
    proxy: {
      [BASE_API]: {
        // 服务器的地址
        target: "http://api.test.com/",
        // 如果是https请设置为true
        // secure: true,
        changeOrigin: true
        // pathRewrite: {
        //   [`^${baseUrl}`]: ""
        // }
      }
    }
  },

  chainWebpack: (config) => {
    if (process.env.ANALYZE == "true") {
      /**
       * 分析器，可以查看打包之后的效果
       * npm run build:analyzer
       * 运行后会打开一个网址
       *
       */
      config.plugin("webpack-bundle-analyzer").use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    }
  },

  configureWebpack: () => {
    let config = {};
    if (IS_PRODUCTION) {
      config.plugins = [
        //打包环境去掉console.log
        new TerserPlugin({
          cache: true,
          sourceMap: false,
          // 多进程
          parallel: true,
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {
              drop_console: true,
              drop_debugger: false,
              // 移除console
              pure_funcs: ["console.log"]
            }
          }
        })
      ];
      return config;
    }
  }
};
