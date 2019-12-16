
const _ = require('lodash');
const gulp = require('gulp');
const gls = require('gulp-live-server');
const del = require('del');
const plugins = require('gulp-load-plugins')();

const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const ejs = require('gulp-ejs');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

var args = process.argv.slice(2);
var options = {};
if (args[0] === "--env" && args[1] === "production") {
  options = { env: { NODE_ENV: 'production' } };
}
const server = gls('./server/server.js', options);

const {pages, paths} = require('./gulpConfiguration.js');

// search patterns
var sourcePatterns = {
  all: '/**/*',
  htmlFlat: '/*.html',
  html: '/**/*.html',
  images: '/**/*.{gif,jpg,jpeg,png,svg}',
  fonts: '/**/*.{eot,svg,ttf,woff,woff2}',
  sass: '/**/*.{scss,sass,css}',
  js: '/**/*.{js,jsx}'
};

// base tasks
gulp.task('server', () => {
  server.start();
});

gulp.task('clean', () => {
  return del([paths.dist]);
});

pages.forEach((page)=>{
  if (page.lint !== false) {
    gulp.task('lint-' + page.path, () => {
      return gulp.src([paths.app + page.path + sourcePatterns.js])
        .pipe(eslint())
        .pipe(eslint.format());
    });
  }
});


// main task list
var taskList = [
  {
    shortName: 'static',
    sourcePattern: ['all'], // string, or array of strings
    create: (sources, config) => {
      return () => {
        return gulp.src(sources)
          .pipe(plugins.plumber())
          .pipe(gulp.dest(paths.dist + config.path))
          .pipe(server.notify.apply(server));
      }
    }
  },{
    shortName: 'copy-html',
    sourcePattern: ['htmlFlat'], // string, or array of strings
    create: (sources, config) => {
      return () => {
        return gulp.src(sources)
          .pipe(plugins.plumber())
          .pipe(gulp.dest(paths.dist + config.path))
          .pipe(server.notify.apply(server));
      }
    }
  },{
    shortName: 'ejs',
    sourcePattern: ['html'],
    data: { msg: "Hello from Gulp!" }, // for all ejs templates
    create: (sources, config) => {
      return () => {
        return gulp.src(sources)
          .pipe(ejs(config.data))
          .pipe(gulp.dest(paths.dist + config.path))
          .pipe(server.notify.apply(server));
      }
    }
  },{
    shortName: 'images',
    sourcePattern: ['images'],
    create: (sources, config) => {
      return () => {
        return gulp.src(sources)
          .pipe(plugins.plumber())
          .pipe(gulp.dest(paths.dist + config.path))
          .pipe(server.notify.apply(server));
      }
    }
  },{
    shortName: 'fonts',
    sourcePattern: ['fonts'],
    destination: '/fonts',
    create: (sources, config) => {
      return () => {
        return gulp.src(sources)
          .pipe(plugins.plumber())
          .pipe(gulp.dest(paths.dist + config.path + config.destination))
          .pipe(server.notify.apply(server));
      }
    }
  },{
    shortName: 'sass',
    sourcePattern: ['sass'],
    destination: '/bundle.css',
    create: (sources, config) => {
      return () => {
        return gulp.src(sources)
          .pipe(plugins.plumber())
          .pipe(plugins.concat(config.destination))
          .pipe(plugins.sass({
            outputStyle: 'compressed',
            includePaths: paths.modules
          }))
          .pipe(plugins.autoprefixer())
          .pipe(gulp.dest(paths.dist + config.path))
          .pipe(server.notify.apply(server));
      }
    }
  },{
    shortName: 'js-babel',
    sourcePattern: ['js'],
    destination: '/bundle.js',
    create: (sources, config) => {
      return () => {
        return gulp.src(sources)
          .pipe(plugins.plumber())
          .pipe(plugins.concat(config.destination))
          .pipe(gulp.dest(paths.dist + config.path))
          .pipe(babel({
            presets: ['es2015'],
            babelrc: false
          }))
          .pipe(plugins.uglify())
          .pipe(gulp.dest(paths.dist + config.path))
          .pipe(server.notify.apply(server));
      }
    }
  },{
    shortName: 'js-babel-imports',
    sourcePattern: ['js'], // since there are entry points, this is only what to watch
    create: (sources, config) => {
      return () => {
        // default entry point
        var entryPoints = config.entryPoints || [ 'app.js' ];
        entryPoints = _.map(entryPoints, (entry) => { return paths.app + config.path +'/'+ entry; });
        _.each(entryPoints, (entry) => {
          const destination = entry.split(config.path +'/')[1]; // get the filename from the full path
          return browserify({
            entries: entry, // full path
            extensions: ['.js','.jsx']
          })
          .transform(babelify, {presets: ['es2015']})
          .bundle()
          .pipe(plugins.plumber())
          .pipe(source(destination)) // just the filename
          .pipe(gulp.dest(paths.dist + config.path)) // just the path
          .pipe(server.notify.apply(server));
        });
      }
    }
  },{
    shortName: 'js-react',
    sourcePattern: ['js'], // since there are entry points, this is only what to watch
    create: (sources, config) => {
      return () => {
        // default entry point
        var entryPoints = config.entryPoints || [ 'app.js' ];
        entryPoints = _.map(entryPoints, (entry) => { return paths.app + config.path +'/'+ entry; });
        _.each(entryPoints, (entry) => {
          const destination = entry.split(config.path +'/')[1]; // get the filename from the full path
          return browserify({
            entries: entry, // full path
            extensions: ['.js','.jsx']
          })
          .transform(babelify, {presets: ['es2015', 'react']})
          .bundle()
          .pipe(plugins.plumber())
          .pipe(source(destination)) // just the filename
          .pipe(gulp.dest(paths.dist + config.path)) // just the path
          .pipe(server.notify.apply(server));
        });
      }
    }
  }
];

module.exports = {taskList, sourcePatterns};
