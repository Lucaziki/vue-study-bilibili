// vue-cli配置文件，90%的配置都是webpack配置
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  devServer: {
    proxy: {
      // 配置代理
      "/x": {
        //凡是以/x开头的请求，进行代理
        target: "https://api.bilibili.com",
        onProxyReq(proxyReq) {
          proxyReq.setHeader("origin", "https://www.bilibili.com");
          proxyReq.setHeader("referer", "https://www.bilibili.com/v/channel");
        },
      },
    },
  },
};
