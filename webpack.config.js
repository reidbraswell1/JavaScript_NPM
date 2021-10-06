const path = require('path');
//import path from 'path';

module.exports = {
  mode: 'development',
  target: "node",
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist'),
    publicPath: "/",
  },
  //Setup loaders
  /*
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
        }
      }
    ]
  },
  */
};
//environment: { module: true },