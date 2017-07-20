var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create(),
    eslint = require('gulp-eslint');

gulp.task('scripts', ['eslint'], function(){
    gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js'}))
    .pipe(gulp.dest('./build/js'))
});

// gulp.task('say_hello', function() {
//     console.log('hello');
// });

gulp.task('eslint', () => { 
    return gulp.src(['js/*.js','!node_modules/**']) 
        .pipe(eslint())
        .pipe(eslint.format()) 
        .pipe(eslint.failAfterError());
});

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

gulp.task('default', ['watch','browser-sync']);