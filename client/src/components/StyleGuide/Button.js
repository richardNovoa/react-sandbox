import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, color, size }) => {
	let style;
	if (type === 'primary') {
		style = 'btn btn-primary';
	} else {
		style = 'btn btn-danger';
	}

	return (
		<div>
			<p className={style}>HELLO</p>
		</div>
	);
};

Button.propTypes = {
	type: PropTypes.string,
	color: PropTypes.string,
	string: PropTypes.string
};

export default Button;
