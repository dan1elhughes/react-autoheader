import React from 'react';
import PropTypes from 'prop-types';

import { Consumer, Provider } from '../context';

const Section = ({ children, level: override }) => (
	<Consumer>
		{level => (
			<Provider
				value={
					typeof override !== 'undefined' ? override : Math.min(level + 1, 6)
				}
			>
				{children}
			</Provider>
		)}
	</Consumer>
);

Section.propTypes = {
	children: PropTypes.node,
	level: PropTypes.number,
};

export default Section;
