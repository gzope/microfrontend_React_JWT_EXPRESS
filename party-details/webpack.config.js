const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;
module.exports={
    mode:"development",
    devServer :
    {
        port:1001
    },
	resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
      module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

    plugins :[

        new HtmlWebpackPlugin({ template : "./public/index.html"}),
        new ModuleFederationPlugin(
          {
              name:"party",
              filename : "remoteEntry.js",
              exposes : {
                  "./PartyModule":"./src/App"
              },
              shared: {
                ...deps,
                react: {
                  singleton: true,
                  requiredVersion: deps.react,
                  eager: true,
                },
                "react-dom": {
                  singleton: true,
                  requiredVersion: deps["react-dom"],
                  eager: true,
                },
              },
          }
        )

    ]
}