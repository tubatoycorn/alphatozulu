const purgecss = require("@fullhuman/postcss-purgecss");
const CompressionPlugin = require("compression-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    style: {
        postcss: {
            plugins: [
                require("autoprefixer"),
                purgecss({
                    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
                    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
                }),
            ],
        },
    },
    webpack: {
        plugins: [
            new CompressionPlugin({
                test: /\.(js|css|html|svg)$/,
                threshold: 8192,
                minRatio: 0.8,
                algorithm: "brotliCompress",
            }),
            process.env.ANALYZE &&
                new BundleAnalyzerPlugin({
                    analyzerMode: "static",
                    openAnalyzer: false,
                    reportFilename: "bundle-report.html",
                }),
        ].filter(Boolean),

        configure: (webpackConfig) => ({
            ...webpackConfig,
            output: {
                ...webpackConfig.output,
                filename: "static/js/[name].[contenthash:8].js",
                chunkFilename: "static/js/[name].[contenthash:8].chunk.js",
            },
            optimization: {
                ...webpackConfig.optimization,
                splitChunks: {
                    chunks: "all",
                    maxInitialRequests: 10,
                    maxAsyncRequests: 20,
                    cacheGroups: {
                        vendor: {
                            name: "vendor",
                            test: /[\\/]node_modules[\\/]/,
                            chunks: "all",
                            priority: 20,
                        },
                        common: {
                            name: "common",
                            minChunks: 2,
                            chunks: "all",
                            priority: 10,
                            reuseExistingChunk: true,
                            enforce: true,
                        },
                    },
                },
                runtimeChunk: "single",
                minimizer: [
                    new TerserPlugin({
                        terserOptions: {
                            compress: {
                                ecma: 5,
                                warnings: false,
                                comparisons: false,
                                inline: 2,
                            },
                            mangle: { safari10: true },
                            output: {
                                ecma: 5,
                                comments: false,
                                ascii_only: true,
                            },
                        },
                    }),
                ],
            },
        }),
    },
    devServer: {
        compress: true,
        port: 3000,
        historyApiFallback: true,
        hot: true,
    },
};
