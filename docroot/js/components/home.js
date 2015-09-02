define(['react', 'collections/parshas', 'components/parsha'], function(React, Parshas, Parsha) {
	return React.createClass({
		getInitialState: function() {
			new Parshas().on('sync', function(parshas) {
		    	this.setState({data: parshas});
		    }.bind(this));
			
		    return {data: []};
		},
		render: function() {
			return (
				React.createElement("div", null, 
					this.state.data.map(function(parsha) {
						return React.createElement(Parsha, {data: parsha})
					})
				)
			)
		}
	});
});