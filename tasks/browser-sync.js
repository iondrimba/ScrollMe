var gulp = require('gulp');
var browserSync = require('browser-sync').create();

module.exports = function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("./dist/css/demo.css").on('change', browserSync.reload);
    gulp.watch("./dist/js/*.js").on('change', browserSync.reload);
};