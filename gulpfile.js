const gulp = require('gulp');
const del = require("del");
const ts = require("gulp-typescript");
const less = require('gulp-less');
const minifycss = require('gulp-minify-css');
const concat = require('gulp-concat');
const tsProject = ts.createProject('tsconfig.gulp.json');
const merge = require('merge2');
const root = 'src/node_modules/kts-component-document';

// 编译 ts
gulp.task('default', async () => {

    await del(["bin/"])

    var tsResult = gulp.src(`${root}/**/*.ts*`)
        .pipe(tsProject())

    // 移动 package.json 文件
    gulp.src("package.json")
        .pipe(gulp.dest("bin"))

    // 移动 README.md
    gulp.src("README.md")
        .pipe(gulp.dest("bin"))

    gulp.src(`${root}/**/*.less`)
        .pipe(less({ compress: false }))
        .pipe(concat('main.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('bin/style'))

    gulp.src(`${root}/**/*.less`)
        .pipe(gulp.dest("bin"))

    return merge([
        tsResult.dts.pipe(gulp.dest('bin')),
        tsResult.js.pipe(gulp.dest('bin'))
    ]);
});