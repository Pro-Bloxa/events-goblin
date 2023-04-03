const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  target: 'web',
  devtool: 'source-map', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        // use: [  // ????
        //   'file-loader',
        //   {
        //      loader: 'image-webpack-loader',
        //      options: {
        //         //disable: argv.mode === 'development'
        //         mozjpeg: {
        //           progressive: true,
        //         },
        //         // optipng.enabled: false will disable optipng
        //         optipng: {
        //           enabled: false,
        //         },
        //         pngquant: {
        //           quality: [0.65, 0.90],
        //           speed: 4
        //         },
        //         gifsicle: {
        //           interlaced: false,
        //         },
        //         // the webp option will enable WEBP
        //         webp: {
        //           quality: 75
        //         }
        //      }
        //   }
        // ]
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
