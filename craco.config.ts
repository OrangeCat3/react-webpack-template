const path = require("path");

const resolve = (dir: string) => path.resolve(__dirname, dir);
const CracoLessPlugin = require('craco-less');

module.exports = {
  webpack: {
    alias: {
      '@': resolve("src"),
      '@components': resolve("src/components"),
      "@assets":resolve("src/assets"),
      "@pages":resolve("src/pages"),
      "@router":resolve("src/router"),
      "@services":resolve("src/services"),
      "@store":resolve("src/store"),
      "@utils":resolve("src/utils"),
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
