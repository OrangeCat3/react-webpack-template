const path = require("path");

const resolve = (dir: string) => path.resolve(__dirname, dir);
const CracoAlias = require("craco-alias");
const CracoLessPlugin = require('craco-less');

module.exports = {
  webpack: {

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
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.extend.json",
      }
    }
  ],
}
