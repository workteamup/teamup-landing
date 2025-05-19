/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["teamup-data.s3.eu-west-3.amazonaws.com"],
    unoptimized: true
  },
  staticPageGenerationTimeout: 180, // Increase timeout to 3 minutes (180 seconds)
  output: "export",
  trailingSlash: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
