var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');

var sassFolder = './public/stylesheets/**/*.scss';
var cssFolder = './public/assets/css';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('minify-css', function() {
  return gulp.src(cssFolder + "/*.css")
    .pipe(minifyCss({compatibility: 'ie9'}))
    .pipe(gulp.dest(cssFolder));
});

gulp.task('sass', function () {
  return gulp
    .src(sassFolder)
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(cssFolder))
});

gulp.task('watch', function() {
  return gulp
    .watch(sassFolder, ['sass'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', recompiling.');
    });
});

gulp.task('default', ['sass', 'watch']);
