var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssimport = require('postcss-import');
var mixins = require('postcss-mixins');
var hexrgba = require('postcss-hexrgba');

gulp.task('styles', function () {
	gulp.src('./app/styles/styles.css')
		.pipe(
			postcss([
				cssimport,
				mixins,
				cssvars,
				nested,
				hexrgba,
				autoprefixer
			]
		))
		.on('error', function (errorInfo) {

			console.log(errorInfo.toString());

			this.emit('end');
		})
		.pipe(gulp.dest('./app/dist/styles'));
});
