let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devServer: {
    contentBase: './dist',
    port: 3000
  },
  entry: './src/js/app.js',
  output: {
    path: "./dist",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader"),
      },
      { test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2017', 'es2016', 'es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      }
    ]
  },
  devtool: '#inline-source-map',
  plugins: [
    new ExtractTextPlugin("style.css")
  ]
};
