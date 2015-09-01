define(['react'], function(React) {
	return React.createElement(
		React.createClass({
			handleClick: function() {
				alert('Hello!');
			},
			render: function() {
				return (
					React.createElement('a', {href: "#", onClick: this.handleClick}, ["Do something!"])
				);
			}
		}),
		$('body').get(0)
	);
});