import type { NextConfig } from 'next';
import { name as projectName } from './package.json';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: `/${projectName}`,
};

export default nextConfig;
