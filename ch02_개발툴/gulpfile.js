const gulp = require("gulp");
const babel = require("gulp-babel");
const eslint = require("gulp-eslint");

gulp.task("default", function () {
  //ESlint 먼저 실행
  const eslintStream = gulp
    .src(["es6/**/*.js", "public/es6/**/*.js"])
    .pipe(eslint())
    .pipe(eslint.format());

  const es6Stream = gulp
    .src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));

  const publicStream = gulp
    .src("public/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));

  return eslintStream, es6Stream, publicStream;
});
