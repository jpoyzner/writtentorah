define(['react'], function(React) {
	return React.createClass({
		render: function() {
			var closed = !!this.props.model.get('text');
			
			return (
				<div className={'wt-parsha-preview' + (closed ? ' closed' : '')}>
					<a onClick={window.page.setSelectedParshaIndex.bind(null, this.props.index)}>
						{this.props.model.get("name") + ": " + (closed ? "WRITTEN" : "STILL OPEN")}
					</a>
				</div>	
		    );
		}
	});
});