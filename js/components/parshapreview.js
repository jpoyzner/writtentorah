define(['react'], function(React) {
	return React.createClass({
		render: function() {
			return (
				<div className={'wt-parsha-preview'}>
					<a onClick={window.page.setSelectedParshaIndex.bind(null, this.props.index)}>
						{"Bereisheet " + this.props.index + " - Still open!"}
					</a>
				</div>	
		    );
		}
	});
});