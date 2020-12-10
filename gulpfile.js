let {src,dest,watch} = require('gulp');
let sass = require('gulp-sass');
let cssnano = require('gulp-cssnano');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
let babel = require('gulp-babel');
let htmlmin = require('gulp-htmlmin');
let imagemin = require('gulp-imagemin');
// 创建任务
// 复制index.html
function fnCopyIndex(){
    return src('./src/index.html').pipe(dest('./dist'));
}
function fnJS(){
    return src('./src/js/*.js').pipe(babel({presets: ['@babel/env']})).pipe(uglify()).pipe(rename({suffix : '.min'})).pipe(dest('./dist/js'));
}
function fnCSS(){
    return src('./src/sass/*.css').pipe(sass()).pipe(cssnano()).pipe(rename({suffix : '.min'})).pipe(dest('./dist/css'));
}
function fnImg(){
    return src('./src/img/*')
    .pipe(imagemin())
    .pipe(dest('./dist/img'));
}
function fnPage(){
    return src('./src/pages/*.html')
    .pipe(htmlmin())
    .pipe(dest('./dist/pages'));
}
function fnWatch(){
    watch('./src/pages/*.html',fnPage);
    watch('./src/sass/*.css',fnCSS);
    watch('./src/js/*.js',fnJS);
    watch('./src/index.html',fnCopyIndex);
}
// 导出
exports.copy = fnCopyIndex;
exports.js = fnJS;
exports.css = fnCSS;
exports.page = fnPage;
exports.img = fnImg;
exports.default = fnWatch;