module.exports = {
  entry: './app/js/app.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },

  module: {

    loaders: [{
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader?resolve url'
    }, {
      test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'url-loader?limit=50000&name=app/img/[name].[ext]'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]

  },
};
