var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');
var config = {
	shape: {
		spacing: {
			padding: 1
		}
	},
	mode: {
		css: {
			variables: {
				replaceSvgWithPng: function () {
					return function(sprite, render) {
						return render(sprite).split('.svg').join('.png');
					}
				}
			},
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
var svg2png = require('gulp-svg2png');

gulp.task('beginClean', function() {
	return del(['./app/dist/sprite', './app/assets/images/sprites']);
});

gulp.task('createSprite', ['beginClean'], function () {
	return gulp.src('./app/assets/images/icons/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('./app/dist/sprite/'));
});

gulp.task('createPngCopy', ['createSprite'], function () {
	return gulp.src('./app/dist/sprite/css/*.svg')
		.pipe(svg2png())
		.pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteGraphic', ['createPngCopy'], function () {
	return gulp.src('./app/dist/sprite/css/*.{svg, png}')
		.pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCSS', ['createPngCopy'], function () {
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
	'createPngCopy',
	'copySpriteGraphic',
	'copySpriteCSS',
	'endClean'
]);
