module.exports = function(grunt) {

    grunt.initConfig({
      critical: {
        extract: {
          options: {
            base: './',
            width: 375,
            height: 667,

          },
          src: '../page2.html',
          dest: '../page2.html'
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-critical');
    grunt.registerTask('default', ['critical']);
  
  };