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
				<span>
					<div className={'wt-parsha-help'}>{help}</div>
					<textarea className={'wt-text'}>{this.props.model.get("text")}</textarea>
					<span className={'wt-author-text'}>BY: </span>
					<input className={'wt-author'} defaultValue={author ? author : ''} />
					<br />
					<span className={'wt-cong-text'}>FROM: </span>
					<input className={'wt-cong'} defaultValue={cong ? cong : ''} />
					<br />
					<span className={'wt-password-text'}>PASSWORD: </span>
					<input className={'wt-password'} />
					<br />
				</span>
			);
		}
	});
});