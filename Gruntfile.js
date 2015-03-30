module.exports = function(grunt) {
	grunt.initConfig({

		// auto prefix the css
		autoprefixer: {
			options: {
        		browsers: ['> 1%', 'last 2 versions', 'Firefox >= 20', 'Opera 12.1']
     		 },
			mutiple_files: {
				expand: true,
				flatten: true,
				src: 'app/css/*.css',
				dest: 'app/css/'
			}
		}
	});

	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');
};
