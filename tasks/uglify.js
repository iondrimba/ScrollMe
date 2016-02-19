var gulp = require('gulp');
var uglify = require('gulp-uglify');

module.exports = function() {
  return gulp.src('scrollme.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
};