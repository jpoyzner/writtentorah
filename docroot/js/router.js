define(['backbone'], function () {
	return new (Backbone.Router.extend({
	    initialize: function() {
	    	var usePushStates = "pushState" in history;
	    	Backbone.history.start({pushState: usePushStates, hashChange: usePushStates});
	    },
	    routes: {
	    	'*path': 'homePage'
	    },
	    homePage: function(options) {
	    	var path = location.pathname.split('/');
	    	
	    	this.selectedParsha;
	    	var parshaIndex = path.indexOf('parsha') + 1;
	    	if (parshaIndex && parshaIndex < path.length) {
	    		this.selectedParsha = path[parshaIndex];
	    	}
	    }
	}))();
});