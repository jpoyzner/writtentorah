define(['react', 'collections/parshas', 'components/home', 'components/parsha'],
function(React, Parshas, Home, Parsha) {
	return React.createClass({
		getInitialState: function() {
			window.page = this;
			
			new Parshas().on('sync', function(parshas) {
				this.setState({parshas: parshas});
				
				require(['scrollintoview'], function() {
					$('#wt-intro').scrollIntoView(1000);
				});
		    }.bind(this));
			
		    return {parshas: []};
		},
		render: function() {
			var selectedParsha;
			if (this.state.parshas.models) {
				selectedParsha = this.state.parshas.models[this.state.selectedParshaIndex];
			}
			
			return (
			    <div id="wt-page">
					<Home parshas={this.state.parshas} />
					{!!selectedParsha ?
						<Parsha expanded={true} model={selectedParsha} index={this.state.selectedParshaIndex} />
						: ""}
				</div>
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