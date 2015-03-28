module.exports = function(grunt) {
	grunt.initConfig({

		// auto prefix the css
		autoprefixer: {
			mutiple_files: {
				expand: true,
				flatten: true,
				src: 'app/css/*.css',
				dest: 'dist/css/'
			}
		}
	});

	grunt.loadNpmTasks('grunt-autoprefixer');
};
