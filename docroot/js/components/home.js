define(['react', 'components/parsha'], function(React, Parsha) {
	return React.createClass({
		render: function() {
			if (!this.props.parshas) {
				return null;
			}
			
			return (
				React.createElement("div", {id: "wt-home"}, 
					React.createElement("p", {id: "wt-title"}, "Written in the Torah"), 
					this.props.parshas.map(function(parsha, index) {
						return React.createElement(Parsha, {model: parsha, index: index})
					})
				)
			)
		}
	});
});