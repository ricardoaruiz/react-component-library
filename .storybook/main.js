const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config;
  }
};
