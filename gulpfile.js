const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')
const prefix = require('gulp-autoprefixer')
const pug = require('gulp-pug')
const reload = browserSync.reload

gulp.task('browser-sync', function () {
  browserSync.init({
    notify: false,
    server: {
      baseDir: './'
    }
  })
  gulp.watch('./views/**/*.pug', gulp.parallel(['html']))
  gulp.watch('./scss/**/*.scss', gulp.parallel(['css']))
  gulp.watch('./js/**/*.js', reload)
})

gulp.task('css', () => {
  return gulp.src('./scss/style.scss')
  .pipe(sass())
  .pipe(prefix())
  .pipe(gulp.dest('./'))
  .pipe(browserSync.stream())
})

gulp.task('html', () => {
  return gulp.src('./views/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./'))
  .on('end', reload)
})

gulp.task("default", gulp.series(['html', 'css','browser-sync']))
