import React from 'react';
import PropTypes from 'prop-types';

const { Consumer, Provider } = React.createContext(0);

export const Section = ({ children, level: override }) => (
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

export const Header = props => (
	<Consumer>
		{level => {
			const Heading = `h${level}`;
			return <Heading {...props} />;
		}}
	</Consumer>
);
