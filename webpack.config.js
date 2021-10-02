//const path = require('path');
import path from 'path';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    environment: { module: true },
  },
};