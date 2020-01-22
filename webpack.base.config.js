const path = require('path');
const webpack = require('webpack');
// merge takes in one configuration and another one and merges them both together to give us one
const merge = require("webpack-merge");

const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, './src');

module.exports = env => {
    const { PLATFORM, VERSION } = env;
    return merge([
        {
            entry: ['@babel/polyfill', APP_DIR],
            module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.csv$/,
                    loader: 'csv-loader',
                    options: {
                      dynamicTyping: true,
                      header: true,
                      skipEmptyLines: true
                    }
                },
                {
                    test: /\.(png|jpg|gif|svg|pdf)$/,
                    use: [
                      {
                        loader: 'file-loader',
                        options: {
                          outputPath: 'images/',
                          name: '[name][hash].[ext]',
                        },
                      },
                    ],
                },
                {
                    test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                    exclude: /images/,  /* dont want svg images from image folder to be included */
                    use: [
                      {
                        loader: 'file-loader',
                        options: {
                          outputPath: 'fonts/',
                          name: '[name][hash].[ext]',
                        },
                      },
                    ],
                }
            ]
            },
            devtool: 'source-map',
            plugins: [
                new HtmlWebpackPlugin({ 
                    template: './index.html', 
                    filename: './index.html' 
                }),
                // The DefinePlugin allows you to create global constants which can be configured at compile time
                new webpack.DefinePlugin({ 
                    'process.env.VERSION': JSON.stringify(env.VERSION),
                    'process.env.PLATFORM': JSON.stringify(env.PLATFORM),
                    'process.env.API_URL': JSON.stringify(env.API_URL),
                    'process.env.WEB_URL': JSON.stringify(env.WEB_URL),
                    'process.APP_DIR': JSON.stringify(APP_DIR)
                }),
                new CopyWebpackPlugin([ 
                    { 
                        from: 'src/static' 
                    },
                    {
                        from: 'node_modules/pdfjs-dist/build/pdf.worker.js',
                        to: 'pdf.worker.js'
                    }
                ]), 
            ]
        }
    ])
}