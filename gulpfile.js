const gulp = require('gulp');
const eslint = require('gulp-eslint');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('lint', () =>
  gulp.src(['**/*.js', '!node_modules/**', '!client/**/*'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

gulp.task('watch', () => {
  gulp.watch('source/scripts/**/*.js', ['eslint']);
  gulp.watch('source/styles/**/*.scss', ['build-css']);
});

gulp.task('build-js', () => gulp.src('source/scripts/**/*.jsx')
  .pipe(sourcemaps.init())
  .pipe(concat('bundle.js'))
  .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('client/scripts'))
);

gulp.task('build-css', () => gulp.src('source/styles/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('client/styles'))
);

gulp.task('default', ['lint', 'watch', 'build-css', 'build-js'], () => gutil.log('Gulp' +
  ' is running!'));
