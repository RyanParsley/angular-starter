module.exports = function (grunt) {
  'use strict';
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-ng-annotate');

  // Default task.
  grunt.registerTask('default', [ 'build', 'compass']);
  grunt.registerTask('build', ['clean','html2js','concat','copy:assets', 'compass']);
  grunt.registerTask('release', ['clean','html2js','concat','copy:assets', 'ngAnnotate','compass','uglify','jshint','karma:unit','protractor']);
  grunt.registerTask('test-watch', ['watch:test']);

  // Print a timestamp (useful for when watching)
  grunt.registerTask('timestamp', function() {
    grunt.log.subhead(Date());
  });

  // Project configuration.
  grunt.initConfig({
    distdir: 'dist',
    pkg: grunt.file.readJSON('package.json'),
    banner:
      '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
      ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;\n' +
      ' * Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n */\n',
      src: {
      js: ['src/**/*.js'],
      jsTpl: ['<%= distdir %>/templates/**/*.js'],
      specs: ['test/**/*.spec.js'],
      scenarios: ['test/**/*.scenario.js'],
      html: ['src/index.html'],
      tpl: {
        app: ['src/app/**/*.tpl.html', 'src/app/**/*.tpl.jade'],
        common: ['src/common/**/*.tpl.html']
      },
      sass: ['src/sass/base.scss'],
      sassWatch: ['src/sass/**/*.scss', 'src/app/**/*.scss']
    },
    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'src/sass',
          cssDir: 'dist/css'
        }
      }
    },
    clean: ['<%= distdir %>/*'],
    copy: {
      assets: {
        files: [{ dest: '<%= distdir %>', src : '**', expand: true, cwd: 'src/assets/' }]
      }
    },
    ngAnnotate: {
      options: {
        // Task-specific options go here.
      },
      app: {
        src:['<%= distdir %>/angular_starter.js'],
        dest:'<%= distdir %>/angular_starter.js'
      }
    },
    protractor: {
      options: {
        configFile: "node_modules/protractor/example/conf.js", // Default config file
        keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
        args: {
          // Arguments passed to the command
        }
      },
      jasmine: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
        options: {
          configFile: "test/config/e2e.js", // Target-specific config file
          args: {} // Target-specific arguments
        }
      },
      cucumber: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
        options: {
          configFile: "test/config/e2e-cucumber.js", // Target-specific config file
          args: {} // Target-specific arguments
        }
      }
    },
    karma: {
      unit: {
        configFile: 'test/config/unit.js'
      }
    },
    html2js: {
      app: {
        options: {
          base: 'src/app',
          options: {
            jade: {
              //this prevents auto expansion of empty arguments
              //e.g. "div(ui-view)" becomes "<div ui-view></div>"
              //     instead of "<div ui-view="ui-view"></div>"
              doctype: 'html'
            }
          }
        },
        src: ['<%= src.tpl.app %>'],
        dest: '<%= distdir %>/templates/app.js',
        module: 'templates.app'
      },
      common: {
        options: {
          base: 'src/common'
        },
        src: ['<%= src.tpl.common %>'],
        dest: '<%= distdir %>/templates/common.js',
        module: 'templates.common'
      }
    },
    concat:{
      dist:{
        options: {
          sourceMap: true,
          banner: '<%= banner %>'
        },
        src:['<%= src.js %>', '<%= src.jsTpl %>'],
        dest:'<%= distdir %>/js/<%= pkg.name %>.js'
      },
      index: {
        src: ['src/index.html'],
        dest: '<%= distdir %>/index.html',
        options: {
          process: true
        }
      },
      angular: {
        src:['vendor/angular/angular.js', 'vendor/angular/angular-route.js', 'vendor/angular/angular-ui-router.min.js'],
        dest: '<%= distdir %>/js/angular.js'
      },
      mongo: {
        src:['vendor/mongolab/*.js'],
        dest: '<%= distdir %>/js/mongolab.js'
      },
      jquery: {
        src:['vendor/jquery/*.js'],
        dest: '<%= distdir %>/js/jquery.js'
      }
    },
    uglify: {
      dist:{
        options: {
          mangle: false,
          banner: '<%= banner %>'
        },
        src:['<%= src.js %>' ,'<%= src.jsTpl %>'],
        dest:'<%= distdir %>/js/<%= pkg.name %>.js'
      },
      angular: {
        src:['<%= concat.angular.src %>'],
        dest: '<%= distdir %>/js/angular.js'
      },
      mongo: {
        src:['vendor/mongolab/*.js'],
        dest: '<%= distdir %>/js/mongolab.js'
      },
      jquery: {
        src:['vendor/jquery/*.js'],
        dest: '<%= distdir %>/js/jquery.js'
      }
    },
    watch:{
      options: {
        atBegin: true
      },
      all: {
        files:['<%= src.js %>', '<%= src.specs %>', '<%= src.sass %>', '<%= src.sassWatch %>', '<%= src.tpl.app %>', '<%= src.tpl.common %>', '<%= src.html %>', 'src/assets/**'],
        tasks:['default','timestamp'],
        options: {
          livereload: true
        }
      },
      build: {
        files:['<%= src.js %>', '<%= src.specs %>', '<%= src.sass %>', '<%= src.sassWatch %>', '<%= src.tpl.app %>', '<%= src.tpl.common %>', '<%= src.html %>', 'src/assets/**'],
        tasks:['build','timestamp']
      },
      css: {
        files: '**/*.scss',
        tasks: ['compass']
      },
      test: {
        files:['<%= src.js %>', '<%= src.specs %>'],
        tasks:['jshint', 'karma:unit', 'protractor'],
        options: {
          livereload: false
        }
      }
    },
    jshint:{
      files:['gruntFile.js', '<%= src.js %>', '<%= src.specs %>', '<%= src.scenarios %>']
    }
  });
};
