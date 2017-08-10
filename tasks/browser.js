var gulp = require('gulp');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var bc = require('browser-sync');

var webpackConfig = require('../webpack.config');
var bundler = webpack(webpackConfig);

gulp.task('browser',()=>{
			bc({
			server: {

				baseDir:'app',

				middleware:[
					webpackDevMiddleware(bundler,{

						publicPath:webpackConfig.output.publicPath,

						stats:{ color:true},

					}),

					webpackHotMiddleware(bundler)
				]
			},

			files:['app/css/*.css','app/*.html']
		})
	}
)