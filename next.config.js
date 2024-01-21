/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',
    ...require(`./config/${process.env.APP_ENV} || 'default'}.json`),
};
