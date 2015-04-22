'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['./*.html', './*.js'], ['html']);
});

gulp.task('default', ['connect', 'watch']);
