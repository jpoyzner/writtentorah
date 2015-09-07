define(['react'], function(React) {
	return React.createClass({
		render: function() {
			var help =
				"Please leave your thoughts on this Parsha. "
				+ "It can be anything from your personal feelings to any wisdom or insight you would like to share. "
				+ "It is highly recommended that you edit and save your text elsewhere first before pasting it here:"
			
			var author = this.props.model.get('author');
			var cong = this.props.model.get('cong');
			
			return (
				React.createElement("span", null, 
					React.createElement("div", {className: 'wt-parsha-help'}, help), 
					React.createElement("textarea", {className: 'wt-text'}, this.props.model.get("text")), 
					React.createElement("span", {className: 'wt-author-text'}, "BY: "), 
					React.createElement("input", {className: 'wt-author', defaultValue: author ? author : ''}), 
					React.createElement("br", null), 
					React.createElement("span", {className: 'wt-cong-text'}, "FROM: "), 
					React.createElement("input", {className: 'wt-cong', defaultValue: cong ? cong : ''}), 
					React.createElement("br", null), 
					React.createElement("span", {className: 'wt-password-text'}, "PASSWORD: "), 
					React.createElement("input", {className: 'wt-password'}), 
					React.createElement("br", null)
				)
			);
		}
	});
});