var gulp = require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify');

gulp.task('coreJs', function() {
	return gulp.src([
		'./app/assets/libs/Jquery_2.2.4/jquery_2.24.min.js',
		'./app/assets/libs/UIToTop/ui-to-top.js',
		'./app/assets/libs/Swiper_3.4.2/Swiper.js',
		'./app/assets/libs/WOW/wow.js'
		])
	.pipe(concat('core.min.js'))
	// .pipe(uglify()) // minimize
	.pipe(gulp.dest('./app/temp/scripts/'))
	
});