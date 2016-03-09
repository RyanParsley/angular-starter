module.exports = function(config) {
  'use strict';
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../..',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'jasmine'
    ],
    files: [
      'vendor/jquery/jquery.js',
      'vendor/angular/angular.js',
      'vendor/angular/angular-route.js',
      'vendor/mongolab/mongolab-resource.js',
      'test/vendor/angular/angular-mocks.js',
      'vendor/angular-ui/**/*.js',
      'src/**/*.js',
      'test/unit/**/*.spec.js',
      'dist/templates/**/*.js'
    ],
    plugins: [
      // these plugins will be require() by Karma
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher'
    ],
    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'junit'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['PhantomJS'],
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // the default configuration
    junitReporter: {
      outputDir: '', // results will be saved as $outputDir/$browserName.xml
      outputFile: 'test-results.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
      suite: '', // suite will become the package name attribute in xml testsuite element
      useBrowserName: false // add browser name to report and classes names
    }
  });
};
