requirejs.config({ //Be sure to add these in gulpfile.js also:
    paths: {
        jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min',
        scrollintoview: '../lib/scrollintoview',
        backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.2/backbone-min',
        underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
        react: '//cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react', //TODO: don't forget to minify
        firebase: '//cdn.firebase.com/js/client/2.2.1/firebase',
        backfire: '//github.com/firebase/backbonefire/releases/download/v0.5.1/backbonefire.min'
    },
    shim: {
	    firebase: {
	        exports: 'Firebase'
	    },
	    backfire: {
            deps: ['backbone', 'firebase']
        }
    }
});

requirejs(['jquery', 'react', 'components/page'], function($, React, Page) {
	React.render(React.createElement(Page), $('body')[0]);
});