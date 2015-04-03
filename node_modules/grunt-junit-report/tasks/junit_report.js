var path = require("path");

module.exports = function(grunt) {

    'use strict';

    grunt.loadNpmTasks('grunt-xsltproc');

    grunt.registerMultiTask("junit_report", "Generate a junit html report from an XML report", function() {

        var options = this.options({
            xmlFolder: "reports",
            outputFolder: "output"
        });

        grunt.config("xsltproc", {
            options: {
                stylesheet: path.join(__dirname, "..", 'xsl', 'junit-noframes.xsl')
            },
            compile: {
                files: [{
                    expand: true,
                    cwd: options.xmlFolder,
                    src: '*.xml',
                    dest: options.outputFolder,
                    ext: '.html'
                }]
            }
        });

        grunt.task.run("xsltproc:compile");

    });
};
