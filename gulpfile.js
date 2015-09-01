var gulp = require('gulp');

gulp.task('default', ['debug'], function() {
    console.log("deploying writtentorah JavaScript!");
});

gulp.task('bundle', ['clean'], function() {
	//TODO: change this to make use of jsx tranform in debug task below!
	
	var bundle =
		require('gulp-requirejs')({
	        baseUrl: 'js',
	        name: 'cellwarz',
	        out: 'cellwarz.js',
	        paths: {
	        	jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min',
	            backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.2/backbone-min',
	            underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
	            react: '//cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react.min'
	        }
	    });
    
    bundle.pipe(require('gulp-uglify')()).pipe(gulp.dest('./WebContent/js/'));
});

gulp.task('debug', ['clean'], function() {
	var react = require('gulp-react');
	gulp.src('js/**/*.js').pipe(react()).pipe(gulp.dest('./docroot/js/'));
});

gulp.task('clean', function(callback) {
	require('del')(["docroot/js/**/*"], callback);
});

gulp.task('deploy', function() {
	//TODO: ADD DEPLOYMENT TO S3                                        
});