var bowerFiles = require('main-bower-files');
var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('default', function() {
  // place code for your default task here
  var target = gulp.src('./public/views/index.html');
  var jsFileSrcs = gulp.src(bowerFiles(), {read: false}, {name:'bower'});
  var cssFileSrcs = gulp.src(['./bower_components/**/dist/css/*.min.css'], {read: false});
  return target.pipe(inject(jsFileSrcs))
  .pipe(inject(cssFileSrcs))
  .pipe(gulp.dest('./public/views/'));
});
