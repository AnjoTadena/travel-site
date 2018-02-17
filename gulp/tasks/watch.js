var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch', function () {

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	console.log('Watching file changes.');

	watch('./app/index.html', function () {
		// gulp.start('html');
		browserSync.reload();
	});

	watch('./app/styles/**/*.css', function () {
		// gulp.start('styles');
		gulp.start('cssInject');
	});

	watch('./app/assets/**/*.js', function () {
		gulp.start('reloadScripts');
	});
});

gulp.task('cssInject', ['styles'], function () {
	return gulp.src('./app/dist/styles/styles.css')
		.pipe(browserSync.stream());
});

gulp.task('reloadScripts', ['scripts'], function () {
	browserSync.reload();
});
