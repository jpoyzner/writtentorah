define(['react', 'components/parsha'], function(React, Parsha) {
	return React.createClass({
		render: function() {
			if (!this.props.parshas) {
				return null;
			}
			
			return (
				React.createElement("div", {id: "wt-home"}, 
					React.createElement("p", {id: "wt-title"}, "Written in the Torah"), 
					React.createElement("p", {id: "wt-intro"}, "Welcome to our project home page! Please select a Parsha below:"), 
					this.props.parshas.map(function(parsha, index) {
						return React.createElement(Parsha, {model: parsha, index: index})
					})
				)
			)
		}
	});
});