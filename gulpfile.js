
// gulp module
const gulp = require('gulp')

// gulp tasks modules
  // join minify module
  const jsonminify = require('gulp-json-minify')
  // pug compiling module - a html template engine
  const pug = require('gulp-pug')
  // sass compiling module - a css preprocessor
  const sass = require('gulp-sass')
  // css prefixer module - to support some css3 properties in some old browsers
  const prefix = require('gulp-autoprefixer')
  // concat module
  const concat = require('gulp-concat')
  // javascript unify module
  const uglify = require('gulp-uglify-es').default



// json gulp task
gulp.task('json', () => {
  return gulp.src('dev/json/*.json')
    .pipe(jsonminify())
    .pipe(gulp.dest('data/data/'))
})


// pug gulp task
gulp.task('pug', () => {
  return gulp.src(['dev/pug/**/*.pug', '!dev/pug/inc/*.pug'])
    .pipe(pug({pretty: false}))
    .pipe(gulp.dest('.'))
})

// sass gulp task
gulp.task('sass', () => {
  return gulp.src(['dev/sass/*.sass', '!dev/sass/imp/*.sass'])
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(prefix('last 2 versions'))
    .pipe(gulp.dest('data/sheets/'))
})


// js gulp task
gulp.task('js', () => {
  // set the path variable
  let path = 'dev/js/'
  // return the gulp thing
  return gulp.src([path + 'data.js', path + 'fetch.js', path + 'lang.js', path + 'theme.js', path + 'stats.js', path + 'loader.js'])
    .pipe(concat('main.js'))
    .pipe(uglify({ toplevel: true, mangle: { properties: { keep_quoted: true } } }))
    .pipe(gulp.dest('data/scripts/'))
})


// gulp watch task
gulp.task('watch', () => {
  gulp.watch('dev/json/*.json', gulp.series('json'))
  gulp.watch('dev/pug/**/*.pug', gulp.series('pug'))
  gulp.watch('dev/sass/**/*.sass', gulp.series('sass'))
  gulp.watch('dev/js/**/*', gulp.series('js'))
})


// gulp default task
gulp.task('default', gulp.series('watch'))