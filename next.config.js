/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    if (!options.isServer) {
      //config.cache=false
      config.plugins.push(
        new NextFederationPlugin({
          name: "property",
          remotes: {},
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./index": "./pages/index.tsx",
          },
          shared: {},
          extraOptions: {},
        })
      );
    }

    return config;
  },
};

module.exports = nextConfig;
