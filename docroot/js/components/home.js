define(['react', 'jquery', 'underscore', 'components/parsha'], function(React, $, _, Parsha) {
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