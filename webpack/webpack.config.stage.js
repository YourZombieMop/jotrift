const {merge} = require('webpack-merge');
const prodConfig = require('./webpack.config.prod.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(
  prodConfig,
  {
    devServer: {
      port: 1111,
    },
    plugins: [
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
        analyzerMode: 'static',
      }),
    ]
  }
);