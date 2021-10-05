const path = require('path');
//import path from 'path';

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist'),
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