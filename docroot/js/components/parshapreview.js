define(['react'], function(React) {
	return React.createClass({
		render: function() {
			var closed = !!this.props.model.get('text');
			
			return (
				React.createElement("div", {className: 'wt-parsha-preview' + (closed ? ' closed' : '')}, 
					React.createElement("a", {onClick: window.page.setSelectedParshaIndex.bind(null, this.props.index)}, 
						this.props.model.get("name") + ": " + (closed ? "WRITTEN" : "STILL OPEN")
					)
				)	
		    );
		}
	});
});