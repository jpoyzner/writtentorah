define(['react', 'components/parshawritten', 'components/parshaediting'], function(React, ParshaWritten, ParshaEditing) {
	return React.createClass({
		getInitialState: function() {
			return {};
		},
		render: function() {
			return (
				<div className={'wt-parsha-details'}>
					<span className="wt-parsha-title closed">{this.props.model.get("name")}</span>					
					{this.state.editing ?
						<ParshaEditing model={this.props.model} />
						: <ParshaWritten model={this.props.model} />}
					<a className={'wt-home'} onClick={window.page.home}>HOME</a>
					<a className={'wt-edit'} onClick={this.processText}>{this.state.editing ? "SAVE" : "EDIT"}</a>
				</div>	
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