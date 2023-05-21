/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['rango-types' , '@rango-dev/widget-embedded']); // pass the modules you would like to see transpiled

const nextConfig = {
  // reactStrictMode: true,
  transpilePackages: ['rango-types' , '@rango-dev/widget-embedded']

}

module.exports = withTM(nextConfig)
