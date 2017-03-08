var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('default', function() {
  // place code for your default task here
  var target = gulp.src('./public/views/index.html');
  var sources = gulp.src(['./bower_components/angular/angular.min.js'], {read: false}, {relative: true});
  return target.pipe(inject(sources)).pipe(gulp.dest('./public/views/'));
});
