define(['react'], function(React) {
	return React.createClass({
		render: function() {
			return (
				React.createElement("div", {className: 'wt-parsha-details'}, 
					React.createElement("a", {className: 'wt-home', onClick: window.page.home}, "HOME"), 					
					React.createElement("textarea", {className: 'wt-text'}, this.props.model ? this.props.model.get("text") : ""), 
					React.createElement("a", {className: 'wt-submit', onClick: window.page.home}, "SUBMIT")
				)	
		    );
		}
	});
});