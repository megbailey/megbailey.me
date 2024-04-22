
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProduction = process.env.NODE_ENV == 'production';
const port = process.env.PORT || 3000;

const project = 'dev-portfolio'
const filename = 'index.js'
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, `build`),
        filename: `${filename}`,
    },
    devServer: {
        port: port,
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    resolve: {
        extensions: [ '.js', '.jsx'],
         alias: {
            react: path.resolve('./node_modules/react'),
            'react-dom': path.resolve('./node_modules/react-dom')
        }  
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /nodeModules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:[
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ],
                        plugins:[
                            "@babel/plugin-transform-class-properties",
                            "@babel/plugin-transform-runtime",
                            "@babel/plugin-proposal-private-property-in-object"
                        ],
                    }
                },
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                // https://webpack.js.org/guides/asset-modules/
                test: /\.(png|jp(e*)g|svg|gif)$/,
                type: "asset/inline",
            },
            {
                test: /\.md/,
                type: 'asset/resource'
            }
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        config.plugins.push(new MiniCssExtractPlugin());
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
