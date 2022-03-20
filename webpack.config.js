const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const { mode = 'development' } = env;
  return {
    entry: {
      index: "./src/index.tsx"
    },
    mode: mode,
    devtool: "inline-source-map",
    devServer: {
      historyApiFallback: true,
      static: './dist',
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "ts-loader"
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          type: 'asset/resource',
          dependency: { not: ['url'] },
        },
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: "Product Catalog",
        template: "./index.html"
      })
    ],

    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
  }
}
