gulp = require 'gulp'
gutil = require 'gulp-util'
coffee = require 'gulp-coffee'
concat = require 'gulp-concat'
shell = require 'gulp-shell'
coverage = require 'coffee-coverage'

# alias for gulp
task = gulp.task.bind gulp
src = gulp.src.bind gulp

mochaCmd = [
  'mocha'
  '--compilers coffee:coffee-script/register'
  '--reporter html-cov'
  '--bail'
  '--require js/test/init.js'
  'test/spec_init.coffee'
  'test/unit/test_spec.coffee'
  '> coffee-coverage/coverage.html'
].join ' '

# Run the mocha test suite
task 'tests-with-coverage', ['build-test'], shell.task(mochaCmd)

coverageCmd = [
  'coffeeCoverage'
  '--path relative'
  '-i ./js/test/test-app.js'
  './src'
  './test/_tmp'
].join ' '

# Instruments and compiles coffeescript files and outputs them to a tmpdir,
# so they can be concatenated and used in the test suite.
task 'coffee-coverage', shell.task(coverageCmd)

# Concatenates instrumented js files.
task 'build-test', ['coffee-coverage'], ->
  src srclist.testApp
    .pipe concat 'test-app.js'
    .pipe dest TEST_DIR
