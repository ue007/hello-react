const webpack = require("webpack");
const path = require("path");

const config = {
	entry: ["react-hot-loader/patch", "./src/index.tsx"],
	output: {
		path: path.resolve(__dirname, "docs"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.ts(x)?$/,
				loader: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.(js|jsx)$/,
				use: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.less$/,
				use: ["style-loader", "css-loader", "less-loader"],
			},
			{
				test: /\.png$/,
				use: [
					{
						loader: "url-loader",
						options: {
							mimetype: "image/png",
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		alias: {
			"react-dom": "@hot-loader/react-dom",
		},
	},
	devServer: {
		static: {
			directory: "./docs",
		},
	},
};

module.exports = config;
