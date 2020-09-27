"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
    paths = {
        views: {
            src: [
                "./src/views/index.pug",
                "./src/views/pages/*.pug"
            ],
            dist: "./dist/",
            watch: [
                "./src/blocks/**/*.pug",
                "./src/views/**/*.pug"
            ]
        },
        styles: {
            src: "./src/styles/main.scss",
            dist: "./dist/styles/",
            watch: [
                "./src/blocks/**/*.scss",
                "./src/styles/**/*.scss"
            ]
        },
        scripts: {
            src: "./src/js/index.js",
            dist: "./dist/js/",
            watch: [
                "./src/blocks/**/*.js",
                "./src/js/**/*.js"
            ]
        },
        images: {
            src: [
                "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
                "!./src/img/svg/*.svg",
                "!./src/img/favicon.{jpg,jpeg,png,gif}"
            ],
            dist: "./dist/img/",
            watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg}"
        },
        sprites: {
            src: [
                "./src/img/svg/cards/*.svg",
                "./src/img/svg/catalog/*.svg",
                "./src/img/svg/slider/*.svg",
                "./src/img/svg/form/*.svg"
            ],
            dist: "./dist/img/sprites/",
            watch: [
                "./src/img/svg/cards/*.svg",
                "./src/img/svg/catalog/*.svg",
                "./src/img/svg/slider/*.svg",
                "./src/img/svg/form/*.svg"
            ]
        },
        fonts: {
            src: "./src/fonts/*.{woff,woff2}",
            dist: "./dist/fonts/",
            watch: "./src/fonts/*.{woff,woff2}"
        },
        iconfonts: {
            src: "./src/img/svg/svg-font/*.svg",
            dist: "./dist/fonts/",
        },
        favicons: {
            src: "./src/img/favicon.{jpg,jpeg,png,gif}",
            dist: "./dist/img/favicons/",
        },
        gzip: {
            src: "./src/.htaccess",
            dist: "./dist/"
        }
    };

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series("clean",
    gulp.parallel(["views", "styles", "scripts", "images", "sprites", "fonts", "iconfont", "favicons"]),
    gulp.parallel("serve"));

export const prod = gulp.series("clean",
    gulp.series(["views", "styles", "scripts", "images", "sprites", "fonts", "iconfont", "favicons", "gzip"]));

export default development;