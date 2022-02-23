// entry point
// outpout
const path = require('path');

module.exports = {
	entry: './src/App.js',
	output: { path: path.join(__dirname, 'public'), filename: 'bundle.js' },
	mode: 'development',
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/,
			},
		],
	},
	devtool: 'eval-cheap-module-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		port: 8080,
		hot: 'only',
	},
};
