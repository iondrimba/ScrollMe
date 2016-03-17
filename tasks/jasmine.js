var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

module.exports = function() {
    return gulp.src('spec/*.js')
        // gulp-jasmine works on filepaths so you can't have any plugins before it
        .pipe(jasmine());
};
