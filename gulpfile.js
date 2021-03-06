var gulp = require('gulp'),
    prettyError = require('gulp-prettyerror'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create(),
    eslint = require('gulp-eslint'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano');

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
    gulp.watch('sass/*.scss', ['sass']);
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(['build/js/*.js','build/css/*.css']).on('change', browserSync.reload);
});

gulp.task('sass', function() {
   gulp.src('./sass/style.scss')
      .pipe(prettyError())
      .pipe(sass())
      .pipe(autoprefixer({
         browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest('./build/css'))
      .pipe(cssnano())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('./build/css'));
});

gulp.task('default', ['watch','browser-sync']);