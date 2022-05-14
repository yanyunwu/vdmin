// const TerserPlugin = require("terser-webpack-plugin");

const port = process.env.port || 80;
const outputDir = process.env.outputDir + "/" + process.env.outFileName + "-" + process.env.version;
const isProd = process.env.NODE_ENV === "production";
const baseUrl = process.env.VUE_APP_BASE_API;
// const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

module.exports = {
  // 设置打包目录
  outputDir: outputDir,
  // 设置静态资源的存储(相对于打包目录)
  assetsDir: "static",
  // 模式node_modules里的高级语法不编译，在这里设置允许编译
  // transpileDependencies: ["vuetify"],
  // 动态设置打包地址
  publicPath: isProd ? "./" : "/",

  // 设置代理以可以跨域请求
  devServer: {
    host: "0.0.0.0",
    // 设置本地代理端口
    port: port,
    // 设置是否自动打开浏览器
    open: true,
    proxy: {
      [baseUrl]: {
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
  }

  /*  configureWebpack: (config) => {
    if (isProd) {
      return {
        plugins: [
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
        ]
      };
    }

  }, */
  // configureWebpack: {
  //   plugins: [
  //     new VuetifyLoaderPlugin({
  //       /**
  //        * 将为每个vue组件中使用的每个标记调用此函数
  //        * 它应该返回一个数组，第一个元素将被插入到组件数组中，第二个元素应该是相应的导入
  //        *
  //        * originalTag - 最初在模板中使用的标记
  //        * kebabTag    - 标签序列化为kebab-case
  //        * camelTag    - 标签序列化为PascalCase
  //        * path        - 指向到当前 .vue 文件的相对路径
  //        * component   - 表示解析后的当前组件
  //        */
  //       match(originalTag, { kebabTag, camelTag, path, component }) {
  //         if (kebabTag.startsWith("core-")) {
  //           return [camelTag, `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`];
  //         }
  //       }
  //     })
  //   ]
  // }
};
