var gulp = require('gulp');
var browserSync = require('browser-sync').create();

module.exports = function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("./index.html").on('change', browserSync.reload);
    gulp.watch("./demo.js").on('change', browserSync.reload);
    gulp.watch("./dist/*.js").on('change', browserSync.reload);
};