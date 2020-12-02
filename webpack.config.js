var path = require("path");

module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: 'app.js',
    },
    module: {
          rules: [
              {
                test:/\.css$/,
                use:['style-loader','css-loader']
              },
              {
                test:    /\.html$/,
                exclude: /node_modules/,
                loader:  'file-loader?name=[name].[ext]',
              },
              {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
          ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    devtool:'inline-source-map' 
};