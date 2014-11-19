gulp = require 'gulp'
gutil = require 'gulp-util'
shell = require 'gulp-shell'
coverage = require 'coffee-coverage'

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
  '--require test/instrumented/init.js'
  'test/spec_init.coffee'
  'test/**/*_spec.coffee'
  '> coverage-results/coverage.html'
].join ' '

# Run the mocha test suite without receiving coverage output
gulp.task('test', ['coffee-coverage'],
  shell.task [specReporter, htmlCovReporter])

# Run the mocha test suite and receive output as expected
gulp.task 'test-with-coverage', ['turn-on-coverage', 'coffee-coverage'], ->
  gulp.run(shell.task [specReporter, htmlCovReporter])

coverageCmd = [
  'coffeeCoverage'
  '--path relative'
  '-i ./test/instrumented/init.js'
  './src'
  './test/instrumented/'
].join ' '

# Instruments and compiles coffeescript files and outputs them to a tmpdir,
# so they can be concatenated and used in the test suite.
gulp.task('coffee-coverage', shell.task coverageCmd)

# Very simple task that sets an environment variable so that coverage reports
# can be turned on.
gulp.task 'turn-on-coverage', ->
  process.env['COVERAGE'] = yes
