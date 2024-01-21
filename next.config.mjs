/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',
    ...require(`./config/${process.env.APP_ENV} || 'default'}.json`),
};

export default nextConfig;
