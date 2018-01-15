const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(rootDir, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [
      path.resolve(rootDir, 'src/'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.jsx$/,
        loader: 'eslint-loader',
        exclude: /node-modules/,
        enforce: 'pre',
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.scss$/,
        include: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        exclude : [
          /\.html$/,
          /\.jsx?$/,
          /\.scss$/,
        ],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'data/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  devServer: {
    contentBase: path.resolve(rootDir, 'build'),
  },
};
