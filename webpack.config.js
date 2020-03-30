const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/js/index.js',
    contact: './src/js/contact.js'
  }, 
  output: {
    filename: './js/[name].bundle.js',
    path: path.resolve(__dirname, './dist/')
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'img/',
          name: '[name].[ext]',
          publicPath: '../img/'
        },
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ExtractTextPlugin({
      filename: './css/[name].bundle.css',
    }),
    new HtmlWebpackPlugin({ template: 'index.html' }),
  ]
};