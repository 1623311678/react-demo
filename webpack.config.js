const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src/index.tsx")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: `[name].js`,
    chunkFilename: `[name].chunk.js`,
    sourceMapFilename: "sourcemaps/[file].map",
    pathinfo: false
  },
  resolve: {
    extensions: ["ts", ".js", ".tsx", ".jsx,"],
    modules: [
      path.resolve(__dirname, "node_modules"),
      path.resolve(__dirname, "src")
    ]
  },

  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "[name].[hash:10].[ext]"
          }
        }]
      },
      {
        test: /\.(eot|ttf|woff)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "[name].[hash:10].[ext]"
          }
        }]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{
            loader: "babel-loader"
          },
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: path.resolve(__dirname, "dist/index.html"),
      inject: true,
      xhtml: true,
      chunks: ["index"],
      chunksSortMode: "manual",
      alwaysWriteToDisk: true
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8055
  },
  devtool: "source-map"
};