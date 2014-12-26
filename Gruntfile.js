"use strict";

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Configurations for grunt
    grunt.initConfig({
        nodewebkit: {
            options: {
                platforms: ['win', 'osx'],
                buildDir: 'build',
            },
            src: ['package.json', 'src/**'],
        },
    });

    grunt.registerTask('build', ['nodewebkit']);
};
