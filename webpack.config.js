const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    publicPath: "/fraction-golf/",
    path: path.resolve(__dirname, 'dist'),
  },
};