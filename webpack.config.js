const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildPath = 'build';

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, buildPath),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
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
    new ExtractTextPlugin({
      filename: 'index.css'
    }),
    new OptimizeCssAssetsPlugin({
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
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      Api: path.resolve(__dirname, 'src/api/'),
      Components: path.resolve(__dirname, 'src/components/'),
      Config: path.resolve(__dirname, 'src/config/'),
      Store: path.resolve(__dirname, 'src/store/'),
      Pages: path.resolve(__dirname, 'src/pages/'),
      Resource: path.resolve(__dirname, 'src/resource/'),
      Utils: path.resolve(__dirname, 'src/utils/')
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, buildPath),
    compress: true,
    port: 9000
  },
  mode: 'development'
};
