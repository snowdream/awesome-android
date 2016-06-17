var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
 
gulp.task('deploy', function() {
  return gulp.src('./website/**/*')
    .pipe(ghPages({message:"Create gh-pages branch via GitHub https://travis-ci.org/ [timestamp]"}));
});
  
