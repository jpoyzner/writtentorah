define(['react', 'components/parsha'], function(React, Parsha) {
	return React.createClass({
		render: function() {
			return (
				React.createElement("div", null, 
					this.props.parshas.map(function(parsha) {
						return React.createElement(Parsha, {data: parsha})
					})
				)
			)
		}
	});
});