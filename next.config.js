/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");

// let hostCommon = "http://localhost:3001";
// let hostItems = "http://localhost:3002";

// if (process.env.NODE_ENV === "production") {
//   hostCommon = "https://common-omega.vercel.app";
//   hostItems = "https://items-lilac.vercel.app";
// }

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    if (!options.isServer) {
      //config.cache=false
      config.plugins.push(
        new NextFederationPlugin({
          name: "property",
          remotes: {
            // common: `common@${hostCommon}/_next/static/chunks/remoteEntry.js`,
            // items: `items@${hostItems}/_next/static/chunks/remoteEntry.js`,
          },
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./Property": "./features/property/Property.tsx",
            "./symbols": "./features/index.ts",
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
