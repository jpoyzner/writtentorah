define(['react'], function(React) {
	return React.createClass({
		render: function() {
			var author = this.props.model.get('author');
			var cong = this.props.model.get('cong');
			
			return (
				<span>
					<div className={'wt-written'}>{this.props.model.get('text') || "Still open! Click on EDIT below!"}</div>
					{author ? <div className={'wt-author-text'}>By: {author}</div> : ""}
					{cong ? <div className={'wt-cong-text'}>From: {cong}</div> : ""}
				</span>
		    );
		}
	});
});