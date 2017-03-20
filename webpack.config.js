// You shouldn't have to touch this webpack file. 
const webpack = require('webpack');
const path = require('path');
const BabiliPlugin = require('babili-webpack-plugin');

// Removes Deprecation Warning
process.noDeprecation = true;

// Build directory is where the bundle file will be placed
const BUILD_DIR = path.resolve(__dirname, 'client/dist');
// App directory is where all of your raw JSX files will be placed
const SRC_DIR = path.resolve(__dirname, `client/src`);
//Public directory is where all of are html/css files will be placed
const PUBLIC_DIR = path.resolve(__dirname, 'client/public');

const config = {
  entry: [ path.resolve(SRC_DIR, 'index.jsx')
  ],
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.png$/,
        use: {
          loader: 'url-loader',
          options: { limit: 10000 } }
      },
      {
        test: /\.(jsx|js)?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: SRC_DIR,
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-class-properties'],
        },
      },
    ],
    loaders: [
      {
        test: /\.(jsx|js)?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new BabiliPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
  ],
  watch: true,
  stats: { colors: true },
  devServer: {
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    contentBase: './',
    hot: false
  }
};

module.exports = config;