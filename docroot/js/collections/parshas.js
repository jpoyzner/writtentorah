define(['backfire'], function() {
	return Backbone.Firebase.Collection.extend({
		url: new Firebase('https://scorching-torch-6675.firebaseio.com/parshas').orderByChild('index')
	});
});