var gulp = require('gulp');
var watch = require('gulp-watch');

module.exports = function() {
    gulp.watch('./src/js/scrollme.js', ['lint',  'copy'])
};