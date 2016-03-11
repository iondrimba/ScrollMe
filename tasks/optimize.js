var gulp = require('gulp');
var gzip = require('gulp-gzip');

module.exports = function() {
  return gulp.src('./dist/js/scrollme.js')
    .pipe(gzip())
    .pipe(gulp.dest('./dist/'));
};