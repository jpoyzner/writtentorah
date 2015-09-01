requirejs.config({
    paths: { //Be sure to add these in gulpfile.js also:
        jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min',
        backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.2/backbone-min',
        underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
        react: '//cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react.min'
    }
});

requirejs(['react', 'jquery', 'components/home'], function(React, $, HomeComponent) {
	React.render(HomeComponent, $('body')[0]);
});