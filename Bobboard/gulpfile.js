var bowerFiles = require('main-bower-files');
var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('default', function() {
  // place code for your default task here
  var target = gulp.src('./public/views/index.html');
  var sources = gulp.src(bowerFiles(), {read: false}, {name:'bower'});
  return target.pipe(inject(sources)).pipe(gulp.dest('./public/views/'));
});
