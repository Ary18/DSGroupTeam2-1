//jshint ignore: start
var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');

gulp.task('jshint', function() {
    return gulp.src('js/*.js').pipe(jshint()).pipe(jshint.reporter('jshint-stylish'));
});