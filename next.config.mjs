// /** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
          config.externals = config.externals || [];
          config.externals.push({
            "@nutrient-sdk/viewer": "@nutrient-sdk/viewer",
          });
        }
      return config;
    },
    images: {
      domains: ['localhost'], // Add your domains here
    },

    experimental: {
        turbo: {
          resolveAlias: {
            "@nutrient-sdk/viewer": "@nutrient-sdk/viewer",
          },
        },
      },
  };
  
  export default nextConfig;
  //   module.exports = nextConfig;
