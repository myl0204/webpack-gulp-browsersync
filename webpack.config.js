var webpack = require ('webpack');
var path = require ('path');

module.exports = {

	entry:['./src/js/index','webpack/hot/dev-server','webpack-hot-middleware/client?reload=true'],

	output:{

		publicPath:'/js',

		filename:'bundle.js'
	},

	module:{

		loaders:[{

			loader:['babel-loader'],

			test:/\.js$/,

			exclude:/node_modules/
		}]
	},

	plugins:[

		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
	
}