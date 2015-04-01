module.exports = function(grunt) {
    "use strict";
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                mangle: true,
                drop_console: false
            },
            buildall: {
                options: {
                    compress: false,
                    report: "min",
                    sourceMap: true
                },
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: '**/*.js',
                    dest: 'app'
                }]
            }
        },
        cssmin: {
            buildall: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.css'],
                    dest: 'app'
                }]
            }
        },
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            all: ['Gruntfile.js', 'src/**/*.js']
        },
        watch: {
            scripts: {
                files: [
                    'src/**/*.js',
                    'Gruntfile.js'
                ],
                tasks: ['minall', 'jshint'],
                options: {
                    spawn: true,
                    interrupt: true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('release', ['uglify', 'cssmin']);
    grunt.registerTask('minall', ['uglify:buildall', 'cssmin:buildall']);
    grunt.registerTask('default', ['uglify', 'cssmin', 'watch']);
};
