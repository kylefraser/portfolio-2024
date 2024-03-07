/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.wasm$/,
      use: ['url-loader'],
    });

    return config;
  },
};
