define(['firebase'], function(Firebase) {
	var myDataRef = new Firebase('https://rdtikkrk13o.firebaseio-demo.com/');
	
	myDataRef.on('child_added', function(snapshot) {
		var message = snapshot.val();
		console.log(message.user, message.name);
	});
	
	myDataRef.push({user: 'jeffpoyzner', name: 'fire'});	
});