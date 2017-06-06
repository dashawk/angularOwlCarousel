var gulp = require('gulp');
var $ = require('gulp-load-plugins')({ lazy: true });

gulp.task('minify', function () {
	return gulp
		.src('./src/angular-carousel.js')
		.pipe();
});

gulp.task('default', function () {

});
