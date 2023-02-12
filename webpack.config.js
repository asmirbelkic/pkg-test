const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
	mode: "production",
	entry: "./src/index.js",
	target: "node",
	devtool: 'source-map',
	watch: true,
	output: {
		path: path.resolve(__dirname, 'bundle'),
		filename: "bundle.js"
	},
	resolve: {
    extensions: ['*', '.js']
  },
	module: {
		rules: [{
			test: /\.(js)$/,
			exclude: /node_modules/,
			use: ['babel-loader']
		}]
	},
	externals: nodeExternals()
}