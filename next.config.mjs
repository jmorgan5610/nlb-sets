import { withPigment } from '@pigment-css/nextjs-plugin';

/** @type {import('next').NextConfig} */
export default withPigment({
    basePath: "/nlb-sets",
    output: "export",
    reactStrictMode: true
});
