import withLinaria from "next-with-linaria";

/** @type {import('next-with-linaria').LinariaConfig} */
const nextConfig = {
  basePath: "/nlb-sets",
  output: "export",
  reactStrictMode: true,
};

export default withLinaria(nextConfig);
