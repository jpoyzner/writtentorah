define(['react'], function(React) {
	return React.createClass({
		render: function() {
			return (
				<div className={this.props.expanded ? 'expanded' : ''}>
					<a onClick={window.page.setSelectedParshaIndex.bind(null, this.props.index)}>
						{this.props.model ? this.props.model.get("text") : ""}
					</a>
				</div>
		    );
		}
	});
});