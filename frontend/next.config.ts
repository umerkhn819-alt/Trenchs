import type { NextConfig } from 'next';
import path from 'path';

const securityHeaders = [
    {
        key: 'X-Frame-Options',
        value: 'DENY',
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
    },
    {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin',
    },
];

/*
 * The repo has a lockfile at the monorepo root *and* one here, so Next would
 * otherwise infer the wrong workspace root and trace/bundle the wrong tree on
 * Vercel. Pin both to this directory.
 */
const projectRoot = path.join(__dirname);

const nextConfig: NextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    turbopack: {
        root: projectRoot
    },
    outputFileTracingRoot: projectRoot,
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: securityHeaders,
            },
        ];
    },
};

export default nextConfig;
