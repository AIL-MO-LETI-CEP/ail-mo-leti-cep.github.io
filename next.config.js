/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withExportImages = require('next-export-optimize-images');

module.exports = withExportImages({
  basePath: process.env.GITHUB_ACTIONS && "/ail-mo-leti-cep.github.io",
  trailingSlash: true,
});
