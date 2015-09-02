define(['router', 'react', 'collections/parshas', 'components/home'], function(Router, React, Parshas, Home) {
	return React.createClass({
		getInitialState: function() {
			new Parshas().on('sync', function(parshas) { //TODO: should we ever load individual parsha data? (efficiency)
		    	this.setState({parshas: parshas, selectedParsha: Router.selectedParsha});
		    }.bind(this));
			
		    return {parshas: []};
		},
		render: function() {
			return (
				<Home parshas={this.state.parshas} />
			)
		}
	});
});