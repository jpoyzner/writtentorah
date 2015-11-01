define(['react'], function(React) {
	return React.createClass({
		render: function() {
			var author = this.props.model.get('author');
			var cong = this.props.model.get('cong');
			var contact = this.props.model.get('contact');
			
			return (
				React.createElement("span", null, 
					React.createElement("div", {className: 'wt-written', dangerouslySetInnerHTML: {__html: this.props.model.get('text').replace(/[\n\r]/g, '<br>') || "Still open! Click on EDIT below!"}}), 
					author ? React.createElement("div", {className: 'wt-author-text'}, "By: ", author) : "", 
					cong ? React.createElement("div", {className: 'wt-cong-text'}, "From: ", cong) : "", 
					contact ? React.createElement("div", {className: 'wt-contact-text'}, "Contact: ", contact) : ""
				)
		    );
		}
	});
});