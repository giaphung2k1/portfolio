const path = require("path");

const nextConfig = {
    output: "standalone",
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "media.dev.to",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "media2.dev.to",
                pathname: "**",
            },
        ],
    },
};

module.exports = nextConfig;
