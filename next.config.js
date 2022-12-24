/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  basePath: process.env.GITHUB_ACTIONS && "/ail-mo-leti-cep.github.io",
  trailingSlash: true,
};
