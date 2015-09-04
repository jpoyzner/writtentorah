define(['react', 'components/parsha'], function(React, Parsha) {
	return React.createClass({
		render: function() {
			if (!this.props.parshas) {
				return null;
			}
			
			return (
				<div id="wt-home">
					<p id="wt-title">Written in the Torah</p>
					{this.props.parshas.map(function(parsha, index) {
						return <Parsha model={parsha} index={index} />
					})}
				</div>
			)
		}
	});
});