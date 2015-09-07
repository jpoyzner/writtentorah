define(['react', 'components/parshawritten', 'components/parshaediting'], function(React, ParshaWritten, ParshaEditing) {
	return React.createClass({
		getInitialState: function() {
			return {};
		},
		render: function() {
			return (
				React.createElement("div", {className: 'wt-parsha-details'}, 
					React.createElement("span", {className: "wt-parsha-title closed"}, this.props.model.get("name")), 					
					this.state.editing ?
						React.createElement(ParshaEditing, {model: this.props.model})
						: React.createElement(ParshaWritten, {model: this.props.model}), 
					React.createElement("a", {className: 'wt-home', onClick: window.page.home}, "HOME"), 
					React.createElement("a", {className: 'wt-edit', onClick: this.processText}, this.state.editing ? "SAVE" : "EDIT")
				)	
		    );
		},
		processText: function() {
			if (this.state.editing) {
				if ($('.wt-password').val() !== 'Israel') {
					alert("Please use the correct password to submit your writing");
					return;
				}
				
				this.props.model.set({text: $('.wt-text').val(), author: $('.wt-author').val(), cong: $('.wt-cong').val()});
				this.setState({editing: false});
			} else {
				this.setState({editing: true});
			}
		}
	});
});