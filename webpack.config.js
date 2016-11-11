module.exports = {
  devServer: {
    contentBase: './src',
    port: 3000
  },
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
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
  devtool: '#inline-source-map'
};
