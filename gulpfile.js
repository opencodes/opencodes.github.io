var gulp = require('gulp'),
	notify = require("gulp-notify"),
	uglify = require('gulp-uglifyjs'),
	sass = require('gulp-ruby-sass');

var config = {
    sassPath: './assets/sass',
    bowerDir: './bower_components',
	jsPath : './assets/js'
}

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(config.sassPath + '/**/*.scss', ['css']);
});
gulp.task('css', function() {
    return gulp.src(config.sassPath + '/style.scss')
        .pipe(sass({
            style: 'compressed',
            loadPath: [
                './assets/sass',
            ]
        })
		.on("error", notify.onError(function (error) {
			return "Error: " + error.message;
		})))
        .pipe(gulp.dest('./assets/css'));
});
gulp.task('js', function() {
  gulp.src([config.jsPath+'/**/*.js'])
    .pipe(uglify('app.min.js', {
      mangle: false,
	  outSourceMap: true,
      output: {
        beautify: true
      }
    }))
    .pipe(gulp.dest('./assets/js'));
});
gulp.task('default', ['sass', 'watch', 'js']);


