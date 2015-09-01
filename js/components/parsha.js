define(['react'], function(React) {
	return React.createClass({
		render: function() {
			return (
				<div>{this.props.data}</div>
		    );
		}
	});
});