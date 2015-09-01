define(['react', 'jquery', 'underscore', 'components/parsha'], function(React, $, _, Parsha) {
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