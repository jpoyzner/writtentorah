define(['react', 'components/parshapreview', 'components/parshadetails'], function(React, ParshaPreview, ParshaDetails) {
	return React.createClass({
		render: function() {
			return (
				<div className={'wt-parsha ' + (this.props.expanded ? 'expanded' : '')}>
					{this.props.expanded ?
						<ParshaDetails model={this.props.model} index={this.props.index} />
						: <ParshaPreview model={this.props.model} index={this.props.index} />
					}
				</div>
		    );
		}
	});
});