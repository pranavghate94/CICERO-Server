var fs = require("fs");
var path = require("path");

module.exports = {
  devtool : 'inline-source-map',
  entry : path.resolve(__dirname, 'server/app/index.js'),
  output : {
    filename: 'bundle.js'
  },
  module:{
    loaders : [
      {
        test : /.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'server/report/app'),
        exclude : /node_modules/,
        query : {
          presetsL ['es2015', 'env', 'react']
        }
      }
    ]
  }
};
