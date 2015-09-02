define(['react', 'components/parsha'], function(React, Parsha) {
	return React.createClass({
		render: function() {
			return (
				<div>
					{this.props.parshas.map(function(parsha) {
						return <Parsha data={parsha} />
					})}
				</div>
			)
		}
	});
});