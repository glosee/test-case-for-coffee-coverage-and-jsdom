# Standalone test case for Static Coffee Coverage with JSDom

This is as simple as I could get for a test environment to reproduce an issue with trying to use `coffee-coverage` and `jsdom` to test client-side code that is not built with `browserify` and cannot be `require`d. This has been raised in the `coffee-coverage` repository as [issue 23](https://github.com/benbria/coffee-coverage/issues/23).

This test project contains two `gulp` tasks: one that does and one that does not produce coverage results when running unit tests with `mocha`.

## How to use

Clone the repo and run `$ npm install`. Run `$ gulp test` and open `coverage-results/coverage.html` in your browser to see 0 for every line. Run `$ gulp test-with-coverage` and open `coverage-results/coverage.html` in your browser to see %100 coverage. The trick is what's on line 30 of `test/spec_init.coffee`...

```coffeescript
global._$jscoverage = window._$jscoverage
```


## About

The project uses [gulp](http://gulpjs.com/) as a convenience for running `coffee-coverage` and `mocha` as shell commands (because I'm not great with writing bash scripts).

### Directory structure

The directory structure is simple enough, with `src/` and `test/` being the only needed directories. The `src/` directory is where app modules live, and the `test/` directory is where spec files live. The `coffee-coverage` task instruments modules inside `src/` and puts them into `test/instrumented` for use in the tests.

### Gulp tasks

There are two main tasks: `test[-with-coverage]` and `coffee-coverage`. These are both shell commands that are run by `gulp` for convenience. If you want to edit the terminal command to change arguments, look at `gulpfile.coffee` and you'll see the variables `specReporter` and `htmlCovReporter` contain the mocha commands in an array for easy reading and editing, like so:

```coffeescript
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
```

#### Task: `coffee-coverage`

+ runs the `coffeeCoverage` command-line tool via `gulp-shell`
+ generates an init file: `test/instrumented/init.js`
+ instruments files found in `src/` and outputs to `test/instrumented/`

#### Task: `test`

+ runs the `mocha` cli via `gulp-shell` twice: once using `spec` reporter and once using `html-cov` reporter (so you can have some output in the terminal)
+ compiles coffeescript spec files on the fly using `--compilers` option
+ `require`s `test/instrumented/init.js` (the init file generated by `coffee-coverage`)
+ runs `spec_init.coffee` first, which just sets up `mocha` and instantiates `jsdom` before any tests are run
+ outputs coverage results to `coverage-results/coverage.html`

#### Task: `test-with-coverage`

+ same as `test` task but depends on an extra tiny task called `turn-on-coverage`, which sets `process.env.COVERAGE` to `yes`
+ uses the workaround mentioned in [coffee-coverage issue 23](https://github.com/benbria/coffee-coverage/issues/23) to get coverage results

### About `spec_init.coffee`

This file instantiates `chai` and `should`, sets up the `jsdom` instance, and tells it to load `test/instrumented/my-module.js` inside a `<script>` tag. There is a `done` callback in the JSDom configuration - roughly the equivalent of `document.onready` - which exposes everything on JSDom's `window` to `global` for use inside `before` and `after` calls in the test suites.
