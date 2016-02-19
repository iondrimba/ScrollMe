var gulp = require('gulp');
var sass = require('gulp-sass');

module.exports = function() {
    gulp.src('./src/scss/demo.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
};