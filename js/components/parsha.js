define(['react'], function(React) {
	return React.createClass({
		render: function() {
			return (
				<div className={'wt-parsha ' + (this.props.expanded ? 'expanded' : '')}>
					{this.props.expanded ? <a onClick={window.page.home}>HOME</a> : ""}
					<a onClick={window.page.setSelectedParshaIndex.bind(null, this.props.index)}>
						{this.props.model ? this.props.model.get("text") : ""}
					</a>
				</div>
		    );
		}
	});
});