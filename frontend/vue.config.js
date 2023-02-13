const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        Components: path.resolve(__dirname, "src/components"),
        Views: path.resolve(__dirname, "src/views"),
        Utils: path.resolve(__dirname, "src/utils"),
        Model: path.resolve(__dirname, "src/model"),
        Styles: path.resolve(__dirname, "src/styles"),
        Router: path.resolve(__dirname, "src/router"),
        Store: path.resolve(__dirname, "src/store"),
        "@": path.resolve(__dirname, "src"),
        Assets: path.resolve(__dirname, "src/assets"),
      },
    },
  },
});
