module.exports = {
  entry: ['babel-polyfill', './app.js'],

  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        plugins: ["syntax-async-functions", "transform-regenerator"],
        presets: ["es2015", "react"]
      }
    }]
  }
};
