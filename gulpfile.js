const gulp = require('gulp');

// Include plugins
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));

// Concatenate, rename and minify JS files
const task_main_js = () => {
  return gulp.src('js/*.js')
    .pipe(concat('main.js'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
}

const task_project_js = () => {
  return gulp.src('js/projects/*.js')
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('build/projects/js'));
}

// Concatenate, compile, and minify scss files
const task_main_scss = () => {
  return gulp.src('scss/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('build/css'));
}

const task_project_scss = () => {
  return gulp.src('scss/projects/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('build/projects/css'));
}

// minify flickity css file
const task_flickity_min = () => {
  return gulp.src('dep/flickity/flickity.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('build/css'));
}

// Watch for changes to files during development
const task_watch = () => {
  // Watch .js files
  gulp.watch('js/*.js', task_main_js);
  gulp.watch('js/projects/*.js', task_project_js);
  // Watch .scss files
  gulp.watch('scss/*.scss', task_main_scss);
  gulp.watch('scss/projects/*.scss', task_project_scss);
}

// Default Task
gulp.task('default', gulp.series(
  task_main_js,
  task_project_js,
  task_main_scss,
  task_project_scss,
  task_flickity_min,
  task_watch
));
