/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
  images: {
    domains: ['ik.imagekit.io']
  },
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "./styles/mixin.scss";`,
},
  i18n,
}

module.exports = nextConfig