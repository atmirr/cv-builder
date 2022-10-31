const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@components": "./src/components",
          "@images": "./src/assets/images",
          "@templates": "./src/templates",
          "@hooks": "./src/hooks",
          "@utils": "./src/utils",
          "@slices": "./src/store/slices",
          "@contexts": "./src/contexts",
          "@assets": "./src/assets",
        },
      },
    },
  ],
};
