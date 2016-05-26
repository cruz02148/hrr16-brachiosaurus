/* File: gulpfile.js */

// grab our gulp packages
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('lint', () =>
  // ESint ignores files with "node_modules" paths.
  // So, it's best to have gulp ignore the directory as well.
  // Also, Be sure to return the stream from the task;
  // Otherwise, the task may end before the stream has finished.
  gulp.src(['**/*.js', '!node_modules/**', '!client/**/*'])
  // eslint() attaches the lint output to the "eslint" property
  // of the file object so it can be used by other modules.
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    .pipe(eslint.failAfterError())
);

gulp.task('watch', () => {
  gulp.watch('source/scripts/**/*.js', ['eslint']);
  gulp.watch('source/styles/**/*.scss', ['build-css']);
});

gulp.task('build-js', () => gulp.src('source/scripts/**/*.jsx')
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    // only uglify if gulp is ran with '--type production'
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('client/scripts'))
);

gulp.task('build-css', () => gulp.src('source/styles/**/*.scss')
  .pipe(sourcemaps.init())  // Process the original sources
  .pipe(sass())
  .pipe(sourcemaps.write()) // Add the map to modified source.
  .pipe(gulp.dest('client/styles'))
);

gulp.task('default', ['lint', 'watch', 'build-css', 'build-js'], () => gutil.log('Gulp' +
  ' is running!'));
