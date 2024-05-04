const gulp = require('gulp');
const sass = require('gulp-sass') (require('sass'));
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImg() {
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

function comprimeJs() {
    return gulp.src('./src/scripts/*.js')
        .pipe (uglify())
        .pipe (obfuscate())
        .pipe(gulp.dest('./dist/scripts'))
}

function styles() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

exports.default = styles;
exports.watch = function() {
    gulp.watch ('./src/styles/*.scss', gulp.parallel(styles))
}

exports.javascript = comprimeJs;
exports.images = comprimeImg