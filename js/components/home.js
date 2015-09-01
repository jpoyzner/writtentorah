define(['react'], function(React) {
	return React.createElement(
		React.createClass({
			handleClick: function() {
				alert('Hello!');
			},
			render: function() {
				return (
					<a href="#" onClick={this.handleClick}>Do something!</a>
				);
			}
		}),
		$('body').get(0)
	);
});