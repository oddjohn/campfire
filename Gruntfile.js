module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
      },
      buildall: {
        options: {
            mangle: true,
            compress: {
                drop_console: true
            },
            report: "min"
        },
        files: [{
            expand: true,
            cwd: 'src',
            src: '**/*.js',
            dest: 'app/js'
        }, {
            expand: true,
            cwd: 'campfire-framework/src',
            src: '**/*.js',
            dest: 'app/js'
        }]
      }
    },
    watch: {
      scripts: {
        files: ['src/**/*.js', 'campfire-framework/src/**/*.js'],
        tasks: ['minall'],
        options: {
          spawn: true,
          interrupt: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('minall', ['uglify:buildall']);
  grunt.registerTask('default', ['uglify', 'watch']);
};