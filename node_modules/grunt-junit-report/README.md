# grunt-junit-report

Basic generation of Junit HTML reports from existing XML reports.
This is similar to - but much more limited than - the JUnitReport ant task (https://ant.apache.org/manual/Tasks/junitreport.html)

This only supports generating reports with the "junit-noframes.html" template at the moment.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-junit-report --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-junit-report');
```

## The "junit_report" task

### Overview
In your project's Gruntfile, add a section named `junit_report` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  junit_report: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.xmlFolder
Type: `String`
Default value: `'reports'`

Path to a folder container junit xml reports. (It expects files to end with a '.xml' extension.)

#### options.outputFolder
Type: `String`
Default value: `'output'`

Path to folder where html reports will be created.

### Usage Examples

#### Custom Options

```js
grunt.initConfig({
  junit_report: {
    foo : {
      options : {
        xmlFolder : "./reports/xml"
         outputFolder : "./output"
      }
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
 * 2014-11-19 v0.0.4 Cleaned up dependencies (thanks to https://github/com/jonnyreeves and https://github/com/ohall)
 * 2014-08-19 v0.0.3 First clean version.
