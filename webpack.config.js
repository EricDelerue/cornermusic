const path = require('path');

const webpack = require('webpack');


const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const devMode = process.env.NODE_ENV !== 'production';

let entry = './src/index.js';
let outputPath = path.resolve(__dirname, 'dist');
let outputFilename = '[name].[hash].js';
let publicPath = '/dist/';

// The path(s) that should be cleaned
let pathsToClean = [
  'dist' // Directory is removed
]

// The clean options to use
let cleanOptions = {
  root:     path.resolve(__dirname)
}

module.exports = {
	mode : devMode ? 'development' : 'production',
  entry: { main: entry },
  output: {
    path: outputPath,
    filename: outputFilename
  },
  devtool: devMode ? "none" : "source-map",
  devServer: {
    contentBase: './dist',
    compress: true,
    historyApiFallback: true,
    open: true,
    port: 9000,
    hot: true, 
    watchContentBase: true
  },
  module: {
     rules: [
       {
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         use: [
           {
             loader: "babel-loader"
           }
         ]
       },
       {
         test: /\.html$/,
         use: [
           {
             loader: "html-loader",
             options: { minimize: true }
           }
         ]
       },
       {
         test: /\.s?[ac]ss$/,
         use: [
           MiniCssExtractPlugin.loader,
           { loader: 'css-loader', options: { url: false, sourceMap: true } },
           { loader: 'sass-loader', options: { sourceMap: true } }
         ]
       }/*,
       {
         test: /\.css$/,
           use: [
             MiniCssExtractPlugin.loader,
             'css-loader'
           ]
       },
       {
        test: /\.(svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true
            }
          }
        ]
       },
       {
         test: /\.(gif|png|jpe?g)$/i,
         use: [
           {
             loader: 'url-loader',
             options: {
               limit: 5000
             }
           }
         ]
       },  
       {
         test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
         use: [
           {
             loader: "file-loader",
             options: {
               name: "[name].[ext]",
               outputPath: "./styles/fonts/"
             }
           }
         ]
       } */    
     ] 
  }, 
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true 
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }, 
  plugins: [
    // It will remove the 'dist' directory when cleaning
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new HtmlWebPackPlugin({
      inject: 'body', // true
      hash: true,
      template: './src/index.html',
      //filename: './index.html',
      favicon:  './src/favicon.ico'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
    	filename: '[name].[hash].css'
    }),
    new WebpackMd5Hash()
  ]
};  