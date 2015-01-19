var package = require("./package.json");
var version = package.version;
var name = package.titaniumManifest.name;
module.exports = function(grunt) {
  grunt.initConfig({
    titaniumifier: {
      "module": {
        options: {
        },
        files: [{
          src:['.'],
          dest:'dist'
        }]
      }
    },
    shell: {
      target: {
        command: '(cd dist; unzip -p ' + name + '-commonjs-'+version+'.zip modules/commonjs/' + name + '/'+version+'/' + name + '.js > ' + name + '.js)'
      }
    },
    watch: {
      nano: {
        files: ["./src/**"],
        tasks: ['build'],
        options: {
          spawn: false
        }
      },
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', 'build');
  grunt.registerTask('build', ['titaniumifier','shell']);
  grunt.registerTask('dev', ['build', 'watch']);
};


