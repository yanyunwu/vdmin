module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  /** 用于解决开发环境打包慢问题 */
  env: {
    development: {
      plugins: ["dynamic-import-node"]
    }
  }
};
