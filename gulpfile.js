var gulp = require('gulp'),
	notify = require("gulp-notify"),
	sass = require('gulp-ruby-sass');

var config = {
    sassPath: './assets/sass',
}

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(config.sassPath + '/**/*.scss', ['css']);
});
gulp.task('css', function() {
    return gulp.src(config.sassPath + '/style.scss')
        .pipe(sass({
            //style: 'compressed',
            loadPath: [
                './assets/sass',
            ]
        })
		.on("error", notify.onError(function (error) {
			return "Error: " + error.message;
		})))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('default', ['css', 'watch']);


