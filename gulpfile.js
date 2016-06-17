var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
 
gulp.task('deploy', function() {
  return gulp.src('./website/**/*')
    .pipe(ghPages({remoteUrl:"git@github.com:snowdream/awesome-android.git",message:"Create gh-pages branch via GitHub https://travis-ci.org/"}));
});
  
