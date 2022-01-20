// 需要安装Eslint插件开启写代码时检测
// 如果觉得麻烦可以在.eslintignore文件中设置
module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
    parserOptions: {
        parser: "babel-eslint",
    },
    // 0代表不管 1代表警告 2代表报错
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        // 声明但未使用的变量
        "no-unused-vars":0,
        // 空的代码块
        "no-empty":0,
        "no-prototype-builtins":0
    },
};
