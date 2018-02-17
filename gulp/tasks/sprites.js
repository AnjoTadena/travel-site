var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');
var config = {
	mode: {
		css: {
			sprite: 'sprite.svg',
			render: {
				css: {
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}
};
var del = require('del');

gulp.task('beginClean', function() {
	return del(['./app/dist/sprite', './app/assets/images/sprites']);
});

gulp.task('createSprite', ['beginClean'], function () {
	return gulp.src('./app/assets/images/icons/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('./app/dist/sprite/'));
});

gulp.task('copySpriteGraphic', ['createSprite'], function () {
	return gulp.src('./app/dist/sprite/css/*.svg')
		.pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCSS', ['createSprite'], function () {
	return gulp.src('./app/dist/sprite/css/*.css')
		.pipe(rename('_sprite.css'))
		.pipe(gulp.dest('./app/styles/modules'));
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function () {
	return del('./app/dist/sprite');
});

gulp.task('icons', [
	'beginClean',
	'createSprite',
	'copySpriteGraphic',
	'copySpriteCSS',
	'endClean'
]);
