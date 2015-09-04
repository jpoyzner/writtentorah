define(['react', 'components/parshapreview', 'components/parshadetails'], function(React, ParshaPreview, ParshaDetails) {
	return React.createClass({
		render: function() {
			return (
				React.createElement("div", {className: 'wt-parsha ' + (this.props.expanded ? 'expanded' : '')}, 
					this.props.expanded ?
						React.createElement(ParshaDetails, {model: this.props.model, index: this.props.index})
						: React.createElement(ParshaPreview, {model: this.props.model, index: this.props.index})
					
				)
		    );
		}
	});
});