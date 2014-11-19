gulp = require 'gulp'
gutil = require 'gulp-util'
concat = require 'gulp-concat'
shell = require 'gulp-shell'
coverage = require 'coffee-coverage'

# alias for gulp
task = gulp.task.bind gulp
src = gulp.src.bind gulp
dest = gulp.src

specReporter = [
  'mocha'
  '--compilers coffee:coffee-script/register'
  '--reporter spec'
  '--bail'
  '--require test/init.js'
  'test/spec_init.coffee'
  'test/**/*_spec.coffee'
].join ' '

htmlCovReporter = [
  'mocha'
  '--compilers coffee:coffee-script/register'
  '--reporter html-cov'
  '--bail'
  '--require test/init.js'
  'test/spec_init.coffee'
  'test/**/*_spec.coffee'
  '> coffee-coverage/coverage.html'
].join ' '

# Run the mocha test suite with the spec reporter
gulp.task('test', ['build-test'], shell.task [specReporter, htmlCovReporter])

coverageCmd = [
  'coffeeCoverage'
  '--path relative'
  '-i ./test/init.js'
  './src'
  './test/_tmp'
].join ' '

# Instruments and compiles coffeescript files and outputs them to a tmpdir,
# so they can be concatenated and used in the test suite.
gulp.task('coffee-coverage', shell.task coverageCmd)

# Concatenates instrumented js files.
gulp.task 'build-test', ['coffee-coverage'], ->
  gulp.src './test/_tmp/**/*.js'
    .pipe concat 'test-app.js'
    .pipe gulp.dest './test'
