define(['react'], function(React) {
	return React.createClass({
		render: function() {
			return (
				<div className={'wt-parsha-details'}>
					<a className={'wt-home'} onClick={window.page.home}>HOME</a>					
					<textarea className={'wt-text'}>{this.props.model ? this.props.model.get("text") : ""}</textarea>
					<a className={'wt-submit'} onClick={window.page.home}>SUBMIT</a>
				</div>	
		    );
		}
	});
});