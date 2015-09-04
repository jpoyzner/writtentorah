define(['react', 'collections/parshas', 'components/home', 'components/parsha'], function(React, Parshas, Home, Parsha) {
	return React.createClass({
		getInitialState: function() {
			window.page = this;
			
			new Parshas().on('sync', function(parshas) { //TODO: should we ever load individual parsha data? (for efficiency)
				this.setState({parshas: parshas});
		    }.bind(this));
			
		    return {parshas: []};
		},
		render: function() {
			var selectedParsha;
			if (this.state.parshas.models) {
				selectedParsha = this.state.parshas.models[this.state.selectedParshaIndex];
			}
			
			return (
			    React.createElement("div", {id: "wt-page"}, 
					React.createElement(Home, {parshas: this.state.parshas}), 
					React.createElement(Parsha, {expanded: !!selectedParsha, model: selectedParsha, index: this.state.selectedParshaIndex})
				)
			);
		},
		setSelectedParshaIndex: function(index) {
			this.setState({selectedParshaIndex: index});
		},
		home: function() {
			this.setState({selectedParshaIndex: -1});
		}
	});
});