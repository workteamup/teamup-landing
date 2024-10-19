import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const withNextIntl = createNextIntlPlugin('./i18n.js');

const nextConfig = withNextIntl({
  output: "npx serve@latest out",
  images: { unoptimized: true },
});

export default nextConfig;
