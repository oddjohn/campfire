var gulp = require('gulp');
var livereload = require('gulp-livereload');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var less = require('gulp-less');
var copy = require('gulp-copy');
var path = require('path');

gulp.task('compress', function() {
	return gulp.src('src/**/*.js')
		.pipe(uglify({
			mangle: true
		}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./app/js'));
});

gulp.task('less', function() {
	return gulp.src('view/less/**/*.less')
		.pipe(less({
			paths: [path.join(__dirname, 'less', 'includes')]
		}))
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./app/css'));
});

gulp.task('copy', function() {
	return gulp.src('view/res/**/*')
		.pipe(copy('./app', {prefix: 2}));
});

gulp.task('lint', function() {
	return gulp.src('src/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('default', function() {
	gulp.start(['lint', 'compress', 'less']);

	gulp.watch(['src/**/*.js'], function() {
		gulp.run(['lint', 'compress', 'less']);
	});
});