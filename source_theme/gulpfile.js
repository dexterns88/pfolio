//VARIABLES
var gulp = require('gulp'),
    gp_sass = require('gulp-sass'),
    gp_sourcemaps = require('gulp-sourcemaps'),
    gp_postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    postcss_font_awesome = require('postcss-font-awesome'),
    browserSync = require('browser-sync').create(),
    gp_concat = require('gulp-concat'),
    gp_uglify = require('gulp-uglify'),
    gp_filter = require('gulp-filter'),
    gp_header = require('gulp-header'),
    imageResize = require('gulp-image-resize'),
    processors = [
      autoprefixer({
        browsers: ['last 5 versions', 'IE 9', 'IE 10'],
        cascade: false
      }),
      postcss_font_awesome
    ],
    jsfiles = [
      'node_modules/web-animations-js/web-animations.min.js',
      'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
      'source/js/app.js'
    ],
    scssfiles = [
      'source/scss/*.scss'
    ],
    images = [

    ],
    fonts = [
      'node_modules/font-awesome/fonts/*'
    ];

var dest = [];

dest['css'] = '../src/assets/css';
dest['js'] = '../src/assets/js';
dest['fonts'] = '../src/assets/fonts';
dest['images'] = '../src/assets/img';

//FA FONTS
gulp.task('fonts', function() {
  return gulp.src(fonts)
    .pipe(gulp.dest(dest['fonts']));
});

gulp.task('image', function() {
  return gulp.src(images)
    .pipe(gulp.dest(dest['images']));
});

var imgProjects = [
  '../src/assets/images/projects/**/*.png'
];


// Image resize task
gulp.task('imgc-thumb', function() {

  gulp.src(imgProjects)
    .pipe(imageResize({
      width: 730,
      height: 410,
      crop: false,
      imageMagick: true
    }))
    .pipe(gulp.dest('../src/assets/images-ch/thumb'));
});

gulp.task('imgcSmall', function() {
  gulp.src(imgProjects)
    .pipe(imageResize({
      width: 730,
      height: 410,
      crop: true,
      imageMagick: true
    }))
    .pipe(gulp.dest('../src/assets/images-ch/small'));
});

//CSS
gulp.task('styles', function() {
  return gulp.src(scssfiles)
    .pipe(gp_header('$debug: true;'))
    .pipe(gp_sourcemaps.init())
    .pipe(gp_sass().on('error', gp_sass.logError))
    .pipe(gp_postcss(processors))
    .pipe(gp_concat('screen.css'))
    .pipe(gp_sourcemaps.write('.'))
    .pipe(gulp.dest(dest['css']))
    .pipe(gp_filter('**/*.css'))
    .pipe(browserSync.stream());
    // .pipe(browserSync.reload({stream: true}));
});

//CSS MINIFY
gulp.task('styles_prod', function() {
  return gulp.src(scssfiles)
    .pipe(gp_sass({outputStyle: 'compressed'}).on('error', gp_sass.logError))
    .pipe(gp_postcss(processors))
    .pipe(gulp.dest(dest['css']));
});


//JS
gulp.task('scripts', function() {
  return gulp.src(jsfiles)
    .pipe(gp_sourcemaps.init())
    .pipe(gp_concat('scripts.js'))
    .pipe(gp_sourcemaps.write('./'))
    .pipe(browserSync.stream())
    .pipe(gulp.dest(dest['js']));
});


//JS MINIFY/UGLIFY
gulp.task('scripts_prod', function() {
  return gulp.src(jsfiles)
    .pipe(gp_concat('scripts.js'))
    .pipe(gp_uglify())
    .pipe(gulp.dest(dest['js']));
});

//WATCH
// gulp.task('watch' ,['browser-sync'] , function() {

gulp.task('w', function() {
  gulp.watch(scssfiles, ['styles']);
  gulp.watch(jsfiles, ['scripts']);
  gulp.watch('*.html').on('change', browserSync.reload);
});

// gulp.task('w', ['browser-sync'], function() {
//   gulp.watch(scssfiles, ['styles']);
//   gulp.watch(jsfiles, ['scripts']);
//   gulp.watch('*.html').on('change', browserSync.reload);
// });


//DEFAULT
gulp.task('default', ['styles_prod', 'scripts_prod']);
gulp.task('cache', ['imgc-thumb', 'imgcSmall']);
