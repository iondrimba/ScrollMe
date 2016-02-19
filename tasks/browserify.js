var gulp = require('gulp');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var browserify = require('browserify');


module.exports = function() {
    var bundleStream = browserify('./src/js/demo.js').bundle();

    bundleStream
        .pipe(source('demo.js'))
        .pipe(gulp.dest('./dist/js/'))
};