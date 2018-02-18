var gulp = require('gulp');
var modernizr = require('gulp-modernizr');

gulp.task('modernizr', function () {
    return gulp.src([
            './app/styles/**/*.css',
            './app/assets/**/*.js'
        ])
        .pipe(modernizr({
            'options': [
                'setClasses'
            ]
        }))
        .pipe(gulp.dest('./app/assets/scripts/'));
});
