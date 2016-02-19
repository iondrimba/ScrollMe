var gulp = require('gulp');
var watch = require('gulp-watch');

module.exports = function() {
    gulp.watch('./src/js/*.js', ['lint',  'browserify']),
    gulp.watch('./src/scss/*.scss', ['sass','scsslint']);
    gulp.watch('./*.html', ['browserify']);
};