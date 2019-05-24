'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var tailwindcss = require('tailwindcss');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('start', function () {
   browserSync.init({
      proxy: "jincicin.test"
   });

   gulp.watch("./user/themes/jinci-cin/css/*.css", ['tailwind', browserSync.reload]);
   gulp.watch("./user/themes/jinci-cin/templates/**/*.*").on('change', browserSync.reload);
   gulp.watch("./tailwind.js").on('change', browserSync.reload);
   gulp.watch("./tailwind.js", ['tailwind']);


});


gulp.task('tailwind', function () {
   return gulp.src('./user/themes/jinci-cin/css/custom.css')
      .pipe(postcss([
         tailwindcss('./tailwind.js'),
         autoprefixer,
      ]))
      .on('error', swallowError)
      .pipe(gulp.dest('./user/themes/jinci-cin/css/public/'))
})

gulp.task('default', ['start']);

function swallowError(error) {
   // If you want details of the error in the console
   console.log(error.toString())
   this.emit('end')
}