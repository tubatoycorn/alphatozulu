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
          content: [
            "./src/**/*.html",
            "./src/**/*.jsx",
            "./src/**/*.js",
            "./src/**/*.tsx",
            "./src/**/*.ts",
          ],
          defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        }),
      ],
    },
  },
  webpack: {
    plugins: [
      new CompressionPlugin({
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8,
        algorithm: "brotliCompress",
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        openAnalyzer: false,
        reportFilename: "bundle-report.html",
      }),
    ],
    configure: (webpackConfig) => {
      webpackConfig.output.filename = "static/js/[name].[contenthash:8].js";
      webpackConfig.output.chunkFilename =
        "static/js/[name].[contenthash:8].chunk.js";

      webpackConfig.optimization = {
        splitChunks: {
          chunks: "all",
          maxInitialRequests: 10,
          maxAsyncRequests: 20,
          cacheGroups: {
            default: false,
            vendors: false,
            vendor: {
              name: "vendor",
              chunks: "all",
              test: /[\\/]node_modules[\\/]/,
              priority: 20,
            },
            common: {
              name: "common",
              chunks: "all",
              minChunks: 2,
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
        runtimeChunk: "single",
        minimizer: [new TerserPlugin()],
      };

      return webpackConfig;
    },
  },
  devServer: {
    compress: true,
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
};
