define(['react'], function(React) {
	return React.createClass({
		render: function() {
			return (
				React.createElement("div", {className: 'wt-parsha-preview'}, 
					React.createElement("a", {onClick: window.page.setSelectedParshaIndex.bind(null, this.props.index)}, 
						"Bereisheet " + this.props.index + " - Still open!"
					)
				)	
		    );
		}
	});
});