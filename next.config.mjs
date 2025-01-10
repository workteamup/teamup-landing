/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  trailingSlash: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            // Optional SVGR config, e.g.:
            // icon: true,
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
