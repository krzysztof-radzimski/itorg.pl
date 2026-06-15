/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — produces ./out, deployed verbatim to Cloudflare Pages.
  // Brak backendu: strona jest w pełni statyczna (HTML/CSS/JS na brzegu sieci).
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
