module.exports = function(grunt) {
    grunt.initConfig({
      nodewebkit: {
        options: {
            platforms: ['win','osx'],
            buildDir: 'build',
        },
        src: ['package.json', 'src/**'],
      },
    });

    grunt.loadNpmTasks('grunt-node-webkit-builder');
    grunt.registerTask('default', ['nodewebkit']);
}
