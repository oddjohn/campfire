module.exports = function(grunt) {
    "use strict";
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                mangle: true,
                drop_console: false
            },
            release: {
                options: {
                    compress: false,
                    report: 'min',
                    sourceMap: false
                },
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: '**/*.js',
                    dest: 'app'
                }]
            },
            debug: {
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
            release: {
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
        },
        clean: {
            release: ['app/js/**/*.map']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('release', ['uglify:release', 'cssmin:release', 'clean:release']);
    grunt.registerTask('minall', ['uglify:debug', 'cssmin:release']);
    grunt.registerTask('default', ['uglify:debug', 'cssmin:release', 'watch']);
};
