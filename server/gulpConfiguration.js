
// Base paths
const paths = {
  modules: './node_modules/',
  dist: './distribution/',
  app: './application/'
};

// Paths to node modules
const libs = {
  // 'jquery': paths.modules + 'jquery/dist/jquery.js',
  // 'fontawesome': paths.modules + 'font-awesome/fonts/**/*.*'
}

// Each item in the arrays is a base name of a Gulp Task
const builds = {
  static: [ 'static' ],
  html: [ 'copy-html' ],
  simple: [ 'ejs', 'js-babel', 'sass', 'images', 'fonts' ],
  imports: [ 'ejs', 'js-babel-imports', 'sass', 'images', 'fonts' ],
  react: [ 'ejs', 'js-react', 'sass', 'images', 'fonts' ]
};

const pages = [
  {
    path: 'default',
    build: builds.react,
    entryPoints: [ 'js/app.js' ]
  }
];

module.exports = { paths, builds, pages };
