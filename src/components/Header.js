import React from 'react';

import { Consumer } from '../context';

const Header = props => (
	<Consumer>
		{level => {
			const Heading = `h${level}`;
			return <Heading {...props} />;
		}}
	</Consumer>
);

export default Header;
