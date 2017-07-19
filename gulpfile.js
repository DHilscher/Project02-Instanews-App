var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('scripts', function(){
    gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js'}))
    .pipe(gulp.dest('./build/js'))
});

gulp.task('say_hello', function() {
    console.log('hello');
});

gulp.task('default', ['browser-sync', 'watch']);

gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts']);
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('build/js/*.js').on('change', browserSync.reload);
});
