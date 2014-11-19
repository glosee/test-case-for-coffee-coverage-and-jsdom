root.jsdom = require 'jsdom'

# Setup Chai, append the should() syntax to Object.prototype, and use sinon
root.chai = require 'chai'
root.expect = root.chai.expect
chai.use require 'sinon-chai'
root.chai.should()

root.sandbox = null

appFilePath = './test-app.js'

# Create a jsdom instance before the entire test suite runs, and don't let
# the test suite continue until the DOM is ready and the app script has loaded.
before (next) ->
  config =
    html: '<body></body>'
    scripts: [appFilePath]
    features:
      FetchExternalResources: ['script']
      ProcessExternalResources: ['script']
    done: (error, window) ->
      if error then console.log error.stack ? error
      # We have to expose Namespace on root so test suites can instantiate
      # modules without making mocha complain
      global.Namespace = window.Namespace
      next()
  jsdom.env config

