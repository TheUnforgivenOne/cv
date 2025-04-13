import type { NextConfig } from 'next';
import { name as projectName } from './package.json';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: `/${projectName}`,
  assetPrefix: `/${projectName}/`,
};

export default nextConfig;
