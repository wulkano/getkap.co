import {src, dest, watch, parallel, series} from 'gulp';
import del from 'del';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import atImport from 'postcss-import';
import minify from 'cssnano';
import simpleVars from 'postcss-simple-vars';
import svgo from 'gulp-svgo';
import imagemin from 'gulp-imagemin';
import pixrem from 'pixrem';
import rev from 'gulp-rev';
import revReplace from 'gulp-rev-replace';

// Sources
const SRC_DIR = 'src';
const BUILD_DIR = 'build';
const CSS_GLOB = `${SRC_DIR}/**/*.css`;
const IMG_GLOB = `${SRC_DIR}/images/**/*`;
const MISC_GLOB = [`${SRC_DIR}/**/*`, `!${CSS_GLOB}`, `!${IMG_GLOB}`];
// Clean task
export function clean() {
  return del([BUILD_DIR]);
}

// CSS
const processors = [
  atImport,
  simpleVars,
  autoprefixer({browsers: ['last 2 versions']}),
  pixrem({rootValue: 10})
];
export function styles() {
  return src(CSS_GLOB)
    .pipe(postcss(processors))
    .pipe(postcss([minify]))
    .pipe(rev())
    .pipe(dest(BUILD_DIR))
    .pipe(rev.manifest())
    .pipe(dest(BUILD_DIR));
}

// Images
export function images() {
  return src(IMG_GLOB, {base: SRC_DIR})
    .pipe(svgo())
    .pipe(imagemin())
    .pipe(dest(BUILD_DIR));
}

// Pipe other files
export function misc() {
  return src(MISC_GLOB)
    .pipe(dest(BUILD_DIR));
}

export function revAssets() {
  let manifest = src('**/rev-manifest.json');
  return src('**/*.html', {base: SRC_DIR})
    .pipe(revReplace({manifest: manifest}) )
    .pipe(dest(BUILD_DIR));
}

function watchSrc() {
  watch(CSS_GLOB, styles);
  watch(IMG_GLOB, images);
  watch(MISC_GLOB, series(misc, revAssets));
  watch(['**/rev-manifest.json'], revAssets);
};

const mainTasks = parallel(styles, images, misc);
export const build = series(clean, mainTasks, revAssets);
export const dev = series(clean, mainTasks, revAssets, watchSrc);

export default build;
