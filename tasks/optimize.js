var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglify = require('gulp-gzip');

module.exports = function() {
  return gulp.src('./src/js/scrollme.js')
    .pipe(uglify())
    .pipe(gzip())
    .pipe(gulp.dest('./dist/'));
};