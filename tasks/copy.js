var gulp = require('gulp');

module.exports = function() {
    return gulp.src('./src/js/scrollme.js')
        .pipe(gulp.dest('./dist/'));
};
