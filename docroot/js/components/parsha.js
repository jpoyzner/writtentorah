define(['react'], function(React) {
	return React.createClass({
		render: function() {
			return (
				React.createElement("div", {className: this.props.expanded ? 'expanded' : ''}, 
					React.createElement("a", {onClick: window.page.setSelectedParshaIndex.bind(null, this.props.index)}, 
						this.props.model ? this.props.model.get("text") : ""
					)
				)
		    );
		}
	});
});