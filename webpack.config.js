const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildPath = 'build';

module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, buildPath),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(c|sc|sa)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(js|ts)x?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|gif|woff|svg|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html'),
      title: 'TW',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css'
    }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /index\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true
    }),
    new UglifyJsPlugin({
      sourceMap: false,
      uglifyOptions: {
        ecma: 8,
        compress: {
          unused: false
        },
        output: {
          comments: false,
          beautify: false
        }
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '@api': path.resolve(__dirname, 'src/api/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@config': path.resolve(__dirname, 'src/config/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@resource': path.resolve(__dirname, 'src/resource/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@utils': path.resolve(__dirname, 'src/utils/')
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, buildPath),
    compress: true,
    port: 9000
  },
  mode: 'development'
};
