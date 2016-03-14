'use strict';
var Promise = require('es6-promise').Promise;
var gulp = require('gulp');


//eslint task
gulp.task('lint', require('./tasks/eslint.js'));

//uglify task
gulp.task('uglify', require('./tasks/uglify.js'));

//GZIP task
gulp.task('optimize', require('./tasks/optimize.js'));

//watch js/scss/teplate files
gulp.task('watch', require('./tasks/watch.js'));

// copy
gulp.task('copy', require('./tasks/copy.js'));

//local server
gulp.task('browser-sync', require('./tasks/browser-sync.js'));

//coveralls
gulp.task('coveralls', require('./tasks/coveralls.js'));

// Default Task
gulp.task('default', ['lint', 'copy', 'browser-sync', 'watch']);

// Publish Task
gulp.task('deploy', ['lint', 'copy', 'uglify', 'optimize']);