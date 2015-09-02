define(['backfire'], function() {
	return Backbone.Firebase.Collection.extend({
		url: 'https://scorching-torch-6675.firebaseio.com/parshas'
	});
});