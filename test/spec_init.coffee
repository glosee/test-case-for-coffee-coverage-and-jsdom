global.jsdom = require 'jsdom'

# Setup Chai and append the `should` syntax to Object.prototype
global.chai = require 'chai'
global.expect = global.chai.expect
global.chai.should()

global._ = require 'underscore'

moduleFilePath = './instrumented/my-module.js'

# Create a jsdom instance before the entire test suite runs, and don't let
# the test suite continue until the DOM is ready and the app script has loaded.
before (next) ->
  config =
    html: '<body></body>'
    scripts: [moduleFilePath]
    features:
      FetchExternalResources: ['script']
      ProcessExternalResources: ['script']
    done: (error, window) ->
      if error then console.log error.stack ? error

      # Expose everything that's on `window` to `global`
      _(global).defaults(window)

      # Ensure coverage is written to the `global` version of `_$jscoverage`,
      # which was instantiated when mocha required `init.js`, but only when
      # $COVERAGE is true.
      console.log "COVERAGE: " + process.env['COVERAGE']
      if process.env['COVERAGE'] then global._$jscoverage = window._$jscoverage

      next()
  jsdom.env config
