var gulp = require('gulp');
var eslint = require('gulp-eslint');

module.exports =function () {
    return gulp.src(['./src/js/*.js'])
        .pipe(eslint({
          'globals': {
            'jQuery':false,
            '$':true
          },
          'env': {
            'browser': true,
            'node': true
          },
          'rules': {
              'eqeqeq': 1,
              'curly': 2,
              'quotes': [2, 'single']
          }
        }))
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
};